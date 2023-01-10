import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MockedProvider } from "@apollo/client/testing";
import { GET_CHARACTERS } from "./graphql/Queries";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const apolloClientMock = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: {
        page: 1,
      },
    },
    result: {
      data: {
        characters: {
          __typename: "Characters",
          info: {
            __typename: "Info",
            count: 826,
            pages: 42,
            next: 36,
            prev: 34,
          },
          results: [
            {
              __typename: "Character",
              id: "681",
              name: "Adam's Mother",
              image:
                "https://rickandmortyapi.com/api/character/avatar/681.jpeg",
              status: "Dead",
              gender: "Female",
              created: "2021-10-16T13:20:07.710Z",
            },
          ],
        },
      },
    },
  },
];
test("renders learn react link", () => {
  render(
    <MockedProvider mocks={apolloClientMock} addTypename={false}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MockedProvider>
  );
  const HomePageTitle = screen.getByText(/Rick And Morty Archive/i);
  expect(HomePageTitle).toBeInTheDocument();
});
