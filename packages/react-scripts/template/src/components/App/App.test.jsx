import React from "react";
import { cleanup, render } from "@testing-library/react";

import App from "./App";


test("should match snapshot", () => {

    expect.hasAssertions();

    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();

});
