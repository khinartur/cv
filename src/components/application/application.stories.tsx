import React from "react"
import { storiesOf } from "@storybook/react"
import { Contacts } from "../application"

const stories = storiesOf("Application", module)

stories.add("Contacts", () => <Contacts />)
