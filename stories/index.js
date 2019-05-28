import React from "react";
import { storiesOf } from "@storybook/react";
import { Loader, Ripple, TextButton } from "../src";

storiesOf("Loaders", module)
    .add("Ripple", () => <Ripple />)
    .add("Loader", () => <Loader />);

storiesOf("Buttons", module).add("TextButton", () => <TextButton />);
