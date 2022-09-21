import React from "react"
import styled from "styled-components"

export type DockProps = {
  children: React.ReactNode[]
}

export function Dock({ children }: DockProps) {
  return (
    <Container>
      <Wrapper children={children} />
    </Container>
  )
}

const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  height: 92px;
  margin: 12px;
  padding: 0 6px;

  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 29px;
  backdrop-filter: blur(80px);
`
