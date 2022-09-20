import React from "react"
import { storiesOf } from "@storybook/react"
import { Dock } from "../dock"
import { ContactsApp, ExperienceApp, HobbiesApp, SettingsApp } from "../app"

const stories = storiesOf("Dock", module)

stories.add("Basic", () => (
  <Dock>
    <ContactsApp />
    <SettingsApp />
    <ExperienceApp />
    <HobbiesApp />
  </Dock>
))
