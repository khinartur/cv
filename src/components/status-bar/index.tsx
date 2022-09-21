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
  align-items: center;

  height: 24px;
  padding: 0 16px;
  box-sizing: border-box;

  background: rgba(143, 143, 143, 0.2);
  color: #fff;
`
