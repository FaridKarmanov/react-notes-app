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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.value.indexOf("#") >= 0) {
      const tag = data.value.slice(data.value.indexOf("#"));
      const index = tag.indexOf(" ");
      if (index === -1) {
        const tagValue = {
          value: tag.slice(0),
          id: uuids4(),
        };
        dispatch(addTag(tagValue));
      } else {
        const tagValue = {
          value: tag.slice(0, index),
          id: uuids4(),
        };
        dispatch(addTag(tagValue));
      }
    }
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
