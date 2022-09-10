import React from "react"
import { storiesOf } from "@storybook/react"
import { Dock } from "../dock"
import { Contacts, Experience, Hobbies, Settings } from "../app"

const stories = storiesOf("Dock", module)

stories.add("Basic", () => (
  <Dock>
    <Contacts />
    <Settings />
    <Experience />
    <Hobbies />
  </Dock>
))
