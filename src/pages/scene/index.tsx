import React from "react"
import { useAppSelector } from "~/store/hooks"
import { Window } from "~/components/window"
import styled from "styled-components"
import { selectApps } from "~/features/app"

export function Scene() {
  const apps = useAppSelector(selectApps)
  return (
    <Container>
      {Object.values(apps).map(app => (
        <Window key={String(app.application)} appState={app} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 24px;
  left: 0;
  width: 100%;
  height: calc(100% - 24px);
  pointer-events: none;
`
