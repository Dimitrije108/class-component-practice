import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

describe("App component", () => {
  it("renders magnificent monkeys", () => {
    // since screen does not have the container property, we'll destructure 
    // render to obtain a container for this test
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  })
})

// The describe block defines a test suite called 'App', which groups 
// together all tests related to the App component.
describe('App', () => {
  // it block defines a test case named 'renders headline'. It will 
  // check if the App component correctly renders the headline.
  it('renders headline', () => {
    // This renders the App component with a prop of title="React" in a 
    // virtual DOM environment (provided by jsdom), simulating what happens
    // in the browser.
    render(<App title="React" />);
    // screen.debug() outputs the current state of the DOM to the console. 
    // It is mainly for debugging purposes and allows you to inspect what 
    // the rendered component looks like at that point in the test.
    screen.debug();
    // There’s no assertion in this code yet, so the test doesn’t actually
    // verify anything.
  });
});