import { render } from "@testing-library/react";
import { ICharacterData } from "../../interfaces/ICharacterData";
import CharacterCard from "./characterCard";

const setup = (Component: React.FC<ICharacterData>, props: any) => {
  return render(<Component {...props} />);
};

const mockData: ICharacterData = {
  id: "1233",
  name: "Test Enzyme",
  status: "pending",
  gender: "unknown",
  created: Date.now().toString(),
  image: "mockUrl",
};

describe("<CharacterCard/>", () => {
  it("should render CharacterCard", () => {
    const { getByText } = setup(CharacterCard, { ...mockData });

    expect(getByText("Test Enzyme")).toBeInTheDocument();
    expect(getByText("pending")).toBeInTheDocument();
    expect(getByText("unkown")).toBeInTheDocument();
    expect(getByText(Date.now().toString())).toBeInTheDocument();
    expect(getByText("MockUrl")).toBeInTheDocument();
  });
});
