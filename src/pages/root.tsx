import React from "react"
import styled from "styled-components"
import { ContactsApp, ExperienceApp, HobbiesApp, HRGameApp, LinkedInApp, SettingsApp } from "~/components/app"
import { AppsGrid } from "~/components/apps-grid"
import { Dock } from "~/components/dock"
import { StatusBar } from "~/components/status-bar"
import { Scene } from "./scene"

export function Root() {
  return (
    <Container>
      <StatusBar />
      <AppsGrid apps={[ContactsApp, HobbiesApp, SettingsApp, ExperienceApp, LinkedInApp, HRGameApp]} />
      <Scene />
      <Dock>
        <ContactsApp />
        <HobbiesApp />
        <SettingsApp />
        <ExperienceApp />
      </Dock>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
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
