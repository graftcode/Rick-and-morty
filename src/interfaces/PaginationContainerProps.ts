export interface PaginationContainerProps {
  nextButton: {
    disableButton: boolean;
    handleClick: () => void;
    buttonText: string;
  };
  previousButton: {
    disableButton: boolean;
    handleClick: () => void;
    buttonText: string;
  };
  pageIndex: number;
}
