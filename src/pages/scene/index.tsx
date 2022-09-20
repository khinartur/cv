import React from "react"
import { useAppSelector } from "~/store/hooks"
import { Window } from "~/components/window"
import styled from "styled-components"

export function Scene() {
  const apps = useAppSelector(state => state.app.apps)
  return (
    <Container>
      {apps.map(app => (
        <Window key={String(app)} appState={app} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  pointer-events: none;
`
