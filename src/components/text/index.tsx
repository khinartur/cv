import React from "react"
import styled, { css } from "styled-components"

export type TextProps = {
  children: string
  truncate?: boolean
  mt?: number
}

export function Text({ children, mt, truncate }: TextProps) {
  return <Wrapper children={children} truncate={truncate} mt={mt} />
}

const Wrapper = styled.span<{ truncate?: boolean; mt?: number }>`
  font-size: 12px;
  line-height: 14px;
  color: white;
  ${props =>
    props.mt &&
    css`
      margin-top: ${props.mt}px;
    `}
  ${props =>
    props.truncate &&
    css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      max-width: 100%;
    `}
`
