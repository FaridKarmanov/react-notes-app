import { useAppDispatch } from "../../store/hooks/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Form, Input } from "./styles";
import { addNote, addTag } from "../../store/slices";
import { v4 as uuids4 } from "uuid";
import { INote } from "../../types";

type FormValues = {
  value: string;
  id: string;
};

export const NotesForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const dispatch = useAppDispatch();

  const getHashTags = (str: string) => {
    if (!str.includes("#")) {
    } else {
      const hashTagWord = str.split("").splice(str.indexOf("#")).join("");
      const index = hashTagWord.indexOf(" ");
      if (index === -1) {
        const tagValue = {
          value: hashTagWord,
          id: uuids4(),
        };
        dispatch(addTag(tagValue));
      } else if (index !== -1) {
        const firstHashTag = hashTagWord.slice(0, index);
        const tagValue = {
          value: firstHashTag,
          id: uuids4(),
        };
        dispatch(addTag(tagValue));

        const newStr = hashTagWord
          .split("")
          .splice(index + 1)
          .join("");
        getHashTags(newStr);
      }
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    getHashTags(data.value);
    const note: INote = {
      ...data,
      id: uuids4(),
    };
    dispatch(addNote(note));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Enter your note"
        {...register("value", { required: "Node is required" })}
      />
      {errors.value?.message}
      <Button type="submit">Add node</Button>
    </Form>
  );
};
