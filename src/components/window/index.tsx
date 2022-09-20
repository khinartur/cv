import React from "react"
import styled from "styled-components"
import { getApplicationByName } from "~/applications/utils"
import { OpenedAppState, Position } from "~/features/app/domain"
import { Header } from "./header"

export type WindowProps = {
  appState: OpenedAppState
}

export function Window({ appState: { application, position } }: WindowProps) {
  const Application = getApplicationByName(application)

  return (
    <Wrapper position={position}>
      <Header />
      <Application />
    </Wrapper>
  )
}

const Wrapper = styled.div<{ position: Position }>`
  position: absolute;
  top: ${p => p.position.y}px;
  left: ${p => p.position.x}px;
  min-width: 300px;
  min-height: 300px;
  background-color: #000;
  border-radius: 10px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5), inset 0px 0.5px 1px #ffffff;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.15)) drop-shadow(0px 25px 30px rgba(0, 0, 0, 0.35));
`
