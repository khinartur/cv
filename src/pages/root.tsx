import React from "react"
import styled from "styled-components"
import { Contacts, Experience, Hobbies, HRGame, LinkedIn, Settings } from "~/components/app"
import { AppsGrid } from "~/components/apps-grid"
import { Dock } from "~/components/dock"
import { StatusBar } from "~/components/status-bar"

export function Root() {
  return (
    <Container>
      <StatusBar />
      <AppsGrid applications={[Contacts, Hobbies, Settings, Experience, LinkedIn, HRGame]} />
      <Dock>
        <Contacts />
        <Hobbies />
        <Settings />
        <Experience />
      </Dock>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(
    187.84deg,
    #41042b 2.43%,
    #63145a 26.6%,
    #410533 57.19%,
    #6b1960 74.45%,
    #300021 97.15%,
    #300021 97.15%
  );
`
