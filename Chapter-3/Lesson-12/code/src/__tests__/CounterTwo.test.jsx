import CounterTwo from "../pages/CounterTwo";
import { render, fireEvent } from "@testing-library/react";

// it("test name", callback fun )
it("increment counter", () => {
  const { getByTestId } = render(<CounterTwo />);

  //   when
  fireEvent.click(getByTestId("button-up"));

  // then
  expect(getByTestId("counter")).toHaveTextContent("1");
});

it("decrement counter", () => {
  const { getByTestId } = render(<CounterTwo />);

  fireEvent.click(getByTestId("button-down"));
  expect(getByTestId("counter")).toHaveTextContent("-1");
});

it("should be enabled", () => {
  const { getByTestId } = render(<CounterTwo />);
  expect(getByTestId("button-down")).not.toHaveAttribute("disabled");
});
