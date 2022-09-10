import React from "react"
import { storiesOf } from "@storybook/react"
import { Contacts } from "."
import styled from "styled-components"

const stories = storiesOf("Application", module)

stories.add("Without app name", () => (
  <DarkWrapper>
    <Contacts />
  </DarkWrapper>
))
stories.add("With app name", () => (
  <DarkWrapper>
    <Contacts showName />
  </DarkWrapper>
))

const DarkWrapper = styled.div`
  padding: 60px;
  background: purple;
`
