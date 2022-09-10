import React from "react"
import styled from "styled-components"

export type AppsProps = {
  children: React.ReactNode[]
}

export function Apps({ children }: AppsProps) {
  return (
    <Container>
      <Grid children={children} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-grow: 1;

  padding: 24px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 60px;
  grid-gap: 32px;
`
