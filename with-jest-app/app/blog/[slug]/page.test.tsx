/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("renders the correct slug", () => {
  render(<Page params={{ slug: "Test" }} />);

  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});
