import React from "react"
import { storiesOf } from "@storybook/react"
import { boolean } from "@storybook/addon-knobs"
import { Dock } from "../dock"

const stories = storiesOf("Dock", module)

stories.add("Basic", () => <Dock mobile={boolean("mobile", false)} />)
