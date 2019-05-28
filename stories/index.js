import React from "react";
import { storiesOf } from "@storybook/react";
import { Ripple, TextButton } from "../src";

storiesOf("Loaders", module)
    .add("Ripple", () => <Ripple />)
    .add("TextButton", () => <TextButton />);
