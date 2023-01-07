import React from "react";
import { format } from "date-fns";

import {
  Card,
  Image,
  ListItem,
  Name,
  StatusIcon,
} from "./characterCard.styles";

import { ICharacterData } from "../../interfaces/ICharacterData";

const CharacterCard: React.FC<ICharacterData> = ({
  name,
  status,
  gender,
  created,
  image: imageUrl,
}) => {
  return (
    <Card>
      <Image src={imageUrl} />

      <Name>{name}</Name>

      <ul>
        <ListItem>
          <strong>Gender:&nbsp;</strong>
          {gender}
        </ListItem>
        <ListItem>
          <strong>Status:&nbsp;</strong>
          <StatusIcon status={status} />
          {status}
        </ListItem>
        <ListItem>
          <strong>Created:&nbsp;</strong>
          {format(new Date(created), "dd/MM/yyyy")}
        </ListItem>
      </ul>
    </Card>
  );
};

export default CharacterCard;
