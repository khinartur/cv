import React from "react"
import styled from "styled-components"
import { Text } from "~/components/text"

export function MenuBar() {
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

  background: ${p => p.theme.colors.menubar};
  backdrop-filter: blur(${p => (p.theme.key === "dark" ? "32.5px" : "75px")});
  color: #fff;
`
