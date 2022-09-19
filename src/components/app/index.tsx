import React, { useCallback } from "react"
import styled from "styled-components"
import { Text } from "~/components/text"
import { ApplicationsEnum } from "./domain"
import { iconByApplication } from "./utils"

export type AppProps = {
  app: ApplicationsEnum
  name: string
  showName?: boolean
}

export function App({ app, name, showName }: AppProps) {
  const icon = iconByApplication[app]

  const onClick = useCallback(() => {
    // Change app state
    // Add app in open apps
    // Change active app
  }, [])

  return (
    <Container onClick={onClick}>
      <Icon src={icon} />
      {showName && name && <Text truncate mt={5} children={name} />}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;

  &:hover {
    cursor: pointer;
  }
`

const Icon = styled.div<{ src: string }>`
  width: 60px;
  height: 60px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 13px;

  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`

export type ConcreteAppProps = Pick<AppProps, "showName">

export function Contacts({ showName = false }: ConcreteAppProps) {
  return <App app={ApplicationsEnum.CONTACTS} name="Contacts" showName={showName} />
}

export function Experience({ showName = false }: ConcreteAppProps) {
  return <App app={ApplicationsEnum.EXPERIENCE} name="Experience" showName={showName} />
}

export function Settings({ showName = false }: ConcreteAppProps) {
  return <App app={ApplicationsEnum.SETTIGNS} name="Settings" showName={showName} />
}

export function Hobbies({ showName = false }: ConcreteAppProps) {
  return <App app={ApplicationsEnum.HOBBIES} name="Hobbies" showName={showName} />
}

export function LinkedIn({ showName = false }: ConcreteAppProps) {
  return <App app={ApplicationsEnum.LINKEDIN} name="LinkedIn" showName={showName} />
}

export function HRGame({ showName = false }: ConcreteAppProps) {
  return <App app={ApplicationsEnum.HRGAME} name="HR Game" showName={showName} />
}

export type ContreteApplication =
  | typeof Contacts
  | typeof Experience
  | typeof Settings
  | typeof Hobbies
  | typeof LinkedIn
  | typeof HRGame
