import React from "react"
import styled from "styled-components"

export type TextProps = {
  children: string
}

export function Text({ children }: TextProps) {
  return <Wrapper children={children} />
}

const Wrapper = styled.span`
  font-size: 12px;
  color: white;
`
