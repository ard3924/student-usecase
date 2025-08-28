import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe,it } from "vitest";

describe("Header", () => {
  it("renders STUDENT DASHBOARD to be present", () => {
    render(<Header />);
    const headerElement = screen.getByText(/Student DashBoard/i);
    expect(headerElement).toBeInTheDocument();
  });
});