import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import Form from "./Form";

describe("Login Form Component", () => {
  beforeEach(() => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("RENDERS email and password fields", () => {
    render(<Form />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("SHOWS ERROR for short password", () => {
    render(<Form />);

    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const button = screen.getByRole("button", { name: /login/i });

    fireEvent.change(email, { target: { value: "test@test.com" } });
    fireEvent.change(password, { target: { value: "123" } });
    fireEvent.click(button);

    expect(screen.getByText("Min 6 characters")).toBeInTheDocument();
  });

  it("SUBMITS successfully with valid input", () => {
    render(<Form />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@test.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "123456" },
    });
    fireEvent.click(screen.getByLabelText(/female/i));

    const countrySelect = screen.getByRole("combobox");
    fireEvent.mouseDown(countrySelect);
    fireEvent.click(screen.getByRole("option", { name: /india/i }));

    fireEvent.click(screen.getByLabelText(/i agree to the terms and conditions/i));
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(window.alert).toHaveBeenCalledWith("Form submitted successfully");
  });
});
