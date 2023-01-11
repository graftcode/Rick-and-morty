import React from "react";

import { DropdownWrapper } from "./dropdown.styles";

const Dropdowon: React.FC<{
  handleOption: React.Dispatch<React.SetStateAction<string>>;
  dropdownOptions: any;
}> = ({ handleOption, dropdownOptions }) => {
  return (
    <DropdownWrapper>
      {Object.keys(dropdownOptions).map((option: string) => (
        <label key={option}>
          <input
            value={option}
            type={dropdownOptions[option].type}
            name={dropdownOptions[option].name}
            onClick={() => handleOption(dropdownOptions[option].name)}
          />
          {dropdownOptions[option].name}
        </label>
      ))}
    </DropdownWrapper>
  );
};

export default Dropdowon;
