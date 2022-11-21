import { ChangeEvent, useCallback, useState } from "react";

export const useInput = (initialState: string = "") => {
  const [value, setValue] = useState<string>(initialState);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>): void => {
      setValue(event.target.value);
    },
    []
  );

  return {
    value,
    onChange,
    setValue,
  };
};
