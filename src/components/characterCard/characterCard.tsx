import React from "react";

import { Card, Image, ListItem, Name } from "./characterCard.styles";

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
      <Name>{name}</Name>
      <ul>
        <ListItem>
          <strong>Gender:</strong>
          <br />
          {gender}
        </ListItem>
        <ListItem>
          <strong>Status:</strong>
          <br />
          {status}
        </ListItem>
        <ListItem>
          <strong>Created:</strong>
          <br />
          {created}
        </ListItem>
      </ul>
      <Image src={imageUrl} />
    </Card>
  );
};

export default CharacterCard;
