import React from "react"
import { storiesOf } from "@storybook/react"
import { Window } from "~/components/window"
import { OpenedAppState } from "~/features/app/domain"
import { ApplicationsEnum } from "../app/domain"

const stories = storiesOf("Window", module)

const settingsApplicationState: OpenedAppState = {
  application: ApplicationsEnum.SETTIGNS,
  position: {
    x: 100,
    y: 100,
  },
}

stories.add("Empty", () => <Window appState={settingsApplicationState} />)
