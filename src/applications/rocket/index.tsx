import React from "react"
import styled from "styled-components"
import { Text } from "~/components/text"

export function Rocket() {
  return (
    <Container>
      <Title children="HR Game" />
    </Container>
  )
}

const Container = styled.div`
  flex-grow: 1;
  width: 400px;
  min-width: 320px;
  height: 100%;
  max-height: 1000px;
  background-color: #0d0a31;
`

const Title = styled(Text)`
  font-size: 24px;
  color: #fff;
`
