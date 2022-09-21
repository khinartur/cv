import React from "react"
import styled from "styled-components"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  left?: React.ReactNode
}

export function Button({ left, children, ...rest }: ButtonProps) {
  return (
    <ButtonView {...rest}>
      {left}
      {children}
    </ButtonView>
  )
}

const ButtonView = styled.button`
  /* disable appearance */
  background: transparent;
  border: none;
  cursor: pointer;
  line-height: normal;

  /* common */
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 110px;
  height: 32px;
  padding: 0 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;

  & > *:first-child {
    margin-right: 8px;
  }

  &:hover {
    background: #1b1a2010;
  }
`
