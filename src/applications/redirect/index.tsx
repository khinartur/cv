import React, { useEffect } from "react"
import styled from "styled-components"
import { Text } from "~/components/text"

export type RedirectProps = {
  url: string
}

export function Redirect({ url }: RedirectProps) {
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
  background-color: #0d0a31;

  @media (min-width: 768px) {
    min-height: 600px;
    max-height: 1000px;
  }
`

const Title = styled(Text)`
  font-size: 24px;
  color: #fff;
`
