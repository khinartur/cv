import React from "react"
import styled from "styled-components"
import { ApplicationsEnum } from "./domain"
import { iconByApplication } from "./utils"

export type ApplicationProps = {
  app: ApplicationsEnum
}

export function Application({ app }: ApplicationProps) {
  const icon = iconByApplication[app]
  return <Container background={icon} />
}

const Container = styled.div<{ background: string }>`
  width: 60px;
  height: 60px;
  border-radius: 13px;

  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;
`

export function Contacts() {
  return <Application app={ApplicationsEnum.CONTACTS} />
}

export function Experience() {
  return <Application app={ApplicationsEnum.EXPERIENCE} />
}

export function Settings() {
  return <Application app={ApplicationsEnum.SETTIGNS} />
}

export function Hobbies() {
  return <Application app={ApplicationsEnum.HOBBIES} />
}

export function LinkedIn() {
  return <Application app={ApplicationsEnum.LINKEDIN} />
}
