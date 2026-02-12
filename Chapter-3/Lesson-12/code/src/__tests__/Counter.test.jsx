import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import reducer from "../reducer";
import Counter from "../pages/Counter";
import { createStore } from "redux";

const renderWithRedux = (
  component,
  { initState, store = createStore(reducer, initState) } = {},
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};

describe("testing counter", () => {
  it("inc through redux", () => {
    const { getByTestId } = renderWithRedux(<Counter />, {
      initState: { counter: 2 },
    });

    fireEvent.click(getByTestId("inc"));
    expect(getByTestId("count")).toHaveTextContent("3");
  });

  it("dec through redux", () => {
    const { getByTestId } = renderWithRedux(<Counter />, {
      initState: { counter: 2 },
    });

    fireEvent.click(getByTestId("dec"));
    expect(getByTestId("count")).toHaveTextContent("1");
  });
});
