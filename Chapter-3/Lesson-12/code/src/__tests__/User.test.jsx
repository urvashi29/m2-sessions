import User from "../pages/User";
import { render, waitFor, screen } from "@testing-library/react";

it("expected api data", async () => {
  render(<User />);

  await waitFor(() => {
    expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
  });
});
