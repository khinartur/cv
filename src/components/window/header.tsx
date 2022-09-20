import React from "react"
import styled from "styled-components"

export type HeaderProps = {}

export function Header({}: HeaderProps) {
  return (
    <Container>
      <Close />
      <Fold />
      <Fullscreen />
    </Container>
  )
}

const Button = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  height: 50px;
  border-radius: 10px 10px 0 0;
  box-sizing: border-box;
  cursor: move;

  & > ${Button} {
    margin-right: 8px;
  }
`

const Close = styled(Button)`
  background: #ec6a5e;
  border: 0.5px solid rgba(0, 0, 0, 0.12);
`

const Fold = styled(Button)`
  background: #f5bf4f;
  border: 0.5px solid rgba(0, 0, 0, 0.12);
`

const Fullscreen = styled(Button)`
  background: #61c554;
  border: 0.5px solid rgba(0, 0, 0, 0.12);
`
