import React from "react"
import { storiesOf } from "@storybook/react"
import { Tooltip } from "."

const stories = storiesOf("Tooltip", module)

stories.add("Centered", () => (
  <div style={{ width: "400px", height: "400px", padding: "50px" }}>
    <Tooltip label="Centered tooltip">
      <button>Button</button>
    </Tooltip>
  </div>
))
