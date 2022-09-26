import React, { useCallback } from "react"
import styled from "styled-components"
import { Text } from "~/components/text"
import { FRONTMAN_URL, GITHUB_URL, LINKEDIN_URL, YOUTUBE_URL } from "~/core/constants"
import { pushHistory } from "~/core/utils/history"
import { openApp } from "~/features/app"
import { useAppDispatch } from "~/store/hooks"
import { ApplicationsEnum } from "./domain"
import { iconByApplication, nameByApplication } from "./utils"

export type AppProps = {
  app: ApplicationsEnum
  name: string
  showName?: boolean
  redirectUrl?: string
}

export function App({ app, name, showName, redirectUrl }: AppProps) {
  const dispatch = useAppDispatch()

  const icon = iconByApplication[app]

  // @todo: hooks deps typescript check
  const onClick = useCallback(() => {
    if (redirectUrl) {
      // @todo: open in new tab
      pushHistory(redirectUrl)
      return
    }
    dispatch(openApp(app))
  }, [app, redirectUrl])

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
  return <App app={ApplicationsEnum.CONTACTS} name={nameByApplication[ApplicationsEnum.CONTACTS]} showName={showName} />
}

export function ExperienceApp({ showName = false }: ConcreteAppProps) {
  return (
    <App app={ApplicationsEnum.EXPERIENCE} name={nameByApplication[ApplicationsEnum.EXPERIENCE]} showName={showName} />
  )
}

export function SettingsApp({ showName = false }: ConcreteAppProps) {
  return <App app={ApplicationsEnum.SETTIGNS} name={nameByApplication[ApplicationsEnum.SETTIGNS]} showName={showName} />
}

export function HobbiesApp({ showName = false }: ConcreteAppProps) {
  return <App app={ApplicationsEnum.HOBBIES} name={nameByApplication[ApplicationsEnum.HOBBIES]} showName={showName} />
}

export function HRGameApp({ showName = false }: ConcreteAppProps) {
  return <App app={ApplicationsEnum.HRGAME} name={nameByApplication[ApplicationsEnum.HRGAME]} showName={showName} />
}

export function LinkedInApp({ showName = false }: ConcreteAppProps) {
  return (
    <App
      app={ApplicationsEnum.LINKEDIN}
      name={nameByApplication[ApplicationsEnum.LINKEDIN]}
      redirectUrl={LINKEDIN_URL}
      showName={showName}
    />
  )
}

export function YoutubeApp({ showName = false }: ConcreteAppProps) {
  return (
    <App
      app={ApplicationsEnum.YOUTUBE}
      name={nameByApplication[ApplicationsEnum.YOUTUBE]}
      redirectUrl={YOUTUBE_URL}
      showName={showName}
    />
  )
}

export function GitHubApp({ showName = false }: ConcreteAppProps) {
  return (
    <App
      app={ApplicationsEnum.GITHUB}
      name={nameByApplication[ApplicationsEnum.GITHUB]}
      redirectUrl={GITHUB_URL}
      showName={showName}
    />
  )
}

export function FrontmanApp({ showName = false }: ConcreteAppProps) {
  return (
    <App
      app={ApplicationsEnum.FRONTMAN}
      name={nameByApplication[ApplicationsEnum.FRONTMAN]}
      redirectUrl={FRONTMAN_URL}
      showName={showName}
    />
  )
}

export type ContreteAppType =
  | typeof ContactsApp
  | typeof ExperienceApp
  | typeof SettingsApp
  | typeof HobbiesApp
  | typeof LinkedInApp
  | typeof HRGameApp
