import React from "react"
import styled from "styled-components"

export type ApplicationProps = {}

export function Application({}: ApplicationProps) {
  return <Container></Container>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
