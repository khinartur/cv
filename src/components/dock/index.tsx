import React from "react"
import styled from "styled-components"
import {
  ContactsApp,
  ExperienceApp,
  FrontmanApp,
  GitHubApp,
  HobbiesApp,
  HRGameApp,
  LinkedInApp,
  SettingsApp,
  YoutubeApp,
} from "../app"

export type DockProps = {
  mobile: boolean
}

export function Dock({ mobile }: DockProps) {
  const apps = mobile
    ? [<ContactsApp />, <LinkedInApp />, <YoutubeApp />, <ExperienceApp />]
    : [
        <HobbiesApp withTooltip />,
        <HRGameApp withTooltip />,
        <ContactsApp withTooltip />,
        <LinkedInApp withTooltip />,
        <YoutubeApp withTooltip />,
        <ExperienceApp withTooltip />,
        <FrontmanApp withTooltip />,
        <GitHubApp withTooltip />,
        <SettingsApp withTooltip />,
      ]

  return (
    <Container>
      <Wrapper children={apps} />
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

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
