import React from "react";
import { Tag } from "..";
import { useAppSelector } from "../../store/hooks/hooks";
import { getTags } from "../../store/selectors";
import { List } from "./styles";

export const TagList = () => {
  const { tags } = useAppSelector(getTags);

  return (
    <List>
      {tags.map((tag) => {
        return (
          <Tag key={tag.id} id={tag.id}>
            {tag.value}
          </Tag>
        );
      })}
    </List>
  );
};
