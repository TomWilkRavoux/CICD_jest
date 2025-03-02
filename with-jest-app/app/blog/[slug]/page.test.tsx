/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

// Simuler fetch() pour les tests
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ title: "Slug: Test" }),
  })
) as jest.Mock;

it("App Router: Works with dynamic route segments", async () => {
  render(<Page params={{ slug: "Test" }} />);

  // Attendre que le titre s'affiche après le chargement
  await waitFor(() => {
    expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
  });
});
