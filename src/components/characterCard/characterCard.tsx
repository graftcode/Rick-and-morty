import React from "react";

import { Card } from "./characterCard.styles";

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
      <div>
        {name}
        {gender}
        {status}
        {created}
        <img src={imageUrl} />
      </div>
    </Card>
  );
};

export default CharacterCard;
