import React from "react"
import { storiesOf } from "@storybook/react"
import { Dock } from "../dock"
import { Contacts, Experience, Hobbies, Settings } from "../application"

const stories = storiesOf("Dock", module)

stories.add("Basic", () => (
  <Dock>
    <Contacts />
    <Settings />
    <Experience />
    <Hobbies />
  </Dock>
))
