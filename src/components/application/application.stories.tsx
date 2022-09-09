import React from "react"
import { storiesOf } from "@storybook/react"
import { Application } from "../application"

const stories = storiesOf("Application", module)

stories.add("Basic", () => <Application />)
