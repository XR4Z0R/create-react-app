import React from "react";
import { create } from "react-test-renderer";

import App from "./App";


test("renders without crashing", () => {

    expect.hasAssertions();

    const app = create(<App />);

    expect(app.toJSON()).toMatchSnapshot();

});
