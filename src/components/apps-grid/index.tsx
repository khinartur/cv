import React from "react"
import styled from "styled-components"
import { ContreteApplication } from "../app"

// @todo: accept React nodes
export type AppsGridProps = {
  applications: ContreteApplication[]
}

export function AppsGrid({ applications }: AppsGridProps) {
  return (
    <Container>
      <Grid
        children={applications.map(App => (
          <App showName />
        ))}
      />
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
  grid-template-rows: minmax(60px, 90px);
`
