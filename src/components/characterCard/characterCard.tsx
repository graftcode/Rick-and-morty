import React from "react";
import { format } from "date-fns";

import {
  Card,
  Image,
  ListItem,
  Name,
  InfoWrapper,
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
      <Name>{name}</Name>
      <InfoWrapper>
        <ul>
          <ListItem>
            <strong>Gender:&nbsp;</strong>
            <br />
            {gender}
          </ListItem>
          <ListItem>
            <strong>Status:&nbsp;</strong>
            <br />
            {status}
          </ListItem>
          <ListItem>
            <strong>Created:&nbsp;</strong>
            <br />

            {format(new Date(created), "dd/MM/yyyy")}
          </ListItem>
        </ul>
        <Image src={imageUrl} />
      </InfoWrapper>
    </Card>
  );
};

export default CharacterCard;
