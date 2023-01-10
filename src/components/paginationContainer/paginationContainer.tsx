import React from "react";

import Button from "../button/button";
import { PaginationWrapper, PageIndex } from "./paginationContainer.styles";

import { PaginationContainerProps } from "../../interfaces/PaginationContainerProps";

const PaginationContainer: React.FC<PaginationContainerProps> = ({
  nextButton,
  previousButton,
  pageIndex,
}) => {
  return (
    <PaginationWrapper>
      <Button {...previousButton} />
      <PageIndex>{pageIndex}</PageIndex>
      <Button {...nextButton} />
    </PaginationWrapper>
  );
};

export default PaginationContainer;
