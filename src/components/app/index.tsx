import React, { useCallback } from "react"
import styled from "styled-components"
import { Text } from "~/components/text"
import { openApp } from "~/features/app"
import { useAppDispatch } from "~/store/hooks"
import { ApplicationsEnum } from "./domain"
import { iconByApplication } from "./utils"

export type AppProps = {
  app: ApplicationsEnum
  name: string
  showName?: boolean
}

export function App({ app, name, showName }: AppProps) {
  const dispatch = useAppDispatch()

  const icon = iconByApplication[app]

  // @todo: hooks deps typescript check
  const onClick = useCallback(() => {
    dispatch(openApp(app))
  }, [app])

  return (
    <Container onClick={onClick}>
      <Icon src={icon} />
      {showName && name && <Text noUserSelect truncate mt={5} children={name} />}
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

export function ContactsApp({ showName = false }: ConcreteAppProps) {
  return <App app={ApplicationsEnum.CONTACTS} name="Contacts" showName={showName} />
}

export function ExperienceApp({ showName = false }: ConcreteAppProps) {
  return <App app={ApplicationsEnum.EXPERIENCE} name="Experience" showName={showName} />
}

export function SettingsApp({ showName = false }: ConcreteAppProps) {
  return <App app={ApplicationsEnum.SETTIGNS} name="Settings" showName={showName} />
}

export function HobbiesApp({ showName = false }: ConcreteAppProps) {
  return <App app={ApplicationsEnum.HOBBIES} name="Hobbies" showName={showName} />
}

export function LinkedInApp({ showName = false }: ConcreteAppProps) {
  return <App app={ApplicationsEnum.LINKEDIN} name="LinkedIn" showName={showName} />
}

export function HRGameApp({ showName = false }: ConcreteAppProps) {
  return <App app={ApplicationsEnum.HRGAME} name="HR Game" showName={showName} />
}

export type ContreteAppType =
  | typeof ContactsApp
  | typeof ExperienceApp
  | typeof SettingsApp
  | typeof HobbiesApp
  | typeof LinkedInApp
  | typeof HRGameApp
