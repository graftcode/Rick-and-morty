export interface PaginationContainerProps {
  nextButton: {
    disableButton: boolean;
    handleClick: any;
    buttonText: string;
    type?: string;
  };
  previousButton: {
    disableButton: boolean;
    handleClick: any;
    buttonText: string;
    type?: string;
  };
  pageIndex: number;
}
