import React from "react"
import styled from "styled-components"
import { FrontmanApp, GitHubApp, HobbiesApp, HRGameApp, SettingsApp } from "../app"

export function AppsGrid() {
  return (
    <Container>
      <Grid>
        <HobbiesApp showName />
        <GitHubApp showName />
        <SettingsApp showName />
        <HRGameApp showName />
        <FrontmanApp showName />
      </Grid>
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
  grid-template-rows: repeat(3, minmax(60px, 90px));
`
