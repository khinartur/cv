import React from "react"
import styled from "styled-components"
import { Text } from "~/components/text"

export type StatusBarProps = {}

export function StatusBar() {
  return (
    <Container>
      <Text children="CV | Arthur Khineltsev" />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 0;

  height: 44px;
  padding: 14px 20px;
  box-sizing: border-box;

  color: white;
`
