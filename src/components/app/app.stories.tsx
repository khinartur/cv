import React from "react"
import { storiesOf } from "@storybook/react"
import { ContactsApp } from "."
import styled from "styled-components"

const stories = storiesOf("App", module)

stories.add("Without app name", () => (
  <DarkWrapper>
    <ContactsApp />
  </DarkWrapper>
))
stories.add("With app name", () => (
  <DarkWrapper>
    <ContactsApp showName />
  </DarkWrapper>
))

const DarkWrapper = styled.div`
  padding: 60px;
  background: purple;
`
