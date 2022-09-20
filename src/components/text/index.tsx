import React from "react"
import styled, { css } from "styled-components"

export type TextProps = {
  children: string
  truncate?: boolean
  noUserSelect?: boolean
  mt?: number
}

export function Text({ children, mt, truncate, noUserSelect }: TextProps) {
  return <Wrapper children={children} truncate={truncate} noUserSelect={noUserSelect} mt={mt} />
}

const Wrapper = styled.span<{ truncate?: boolean; noUserSelect?: boolean; mt?: number }>`
  font-size: 12px;
  line-height: 14px;
  color: white;
  ${p =>
    p.mt &&
    css`
      margin-top: ${p.mt}px;
    `}
  ${p =>
    p.truncate &&
    css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      max-width: 100%;
    `}
  ${p =>
    p.noUserSelect &&
    css`
      user-select: none;
    `}
`
