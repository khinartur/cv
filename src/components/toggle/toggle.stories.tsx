import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import { Toggle } from "."

const stories = storiesOf("Toggle", module)

stories.add("Basic", () => <Story />)

const Story = () => {
  const [enabled, setEnabled] = useState(false)
  const onToggle = () => setEnabled(!enabled)

  return <Toggle enabled={enabled} onToggle={onToggle} />
}
