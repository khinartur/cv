import React from "react"
import styled from "styled-components"

export type ToggleProps = {
  enabled: boolean
  onToggle: () => void
}

export function Toggle({ enabled, onToggle }: ToggleProps) {
  return (
    <Wrapper>
      <input type="checkbox" id="toggle" checked={enabled} onChange={onToggle} />
      <label htmlFor="toggle" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  input {
    display: none;
  }
  label {
    display: block;
    background-color: #787880;
    opacity: 0.32;

    width: 51px;
    height: 31px;
    border-radius: 16px;

    &:before {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      height: 27px;
      width: 27px;
      background: #fff;
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);
      border-radius: 50%;
      transition: 0.15s all ease-in-out;
      z-index: 1;
    }
  }
  input:checked + label {
    background-color: #32d74b;
    opacity: 1;
    &:before {
      transform: translateX(20px);
      transform-origin: 100% 0;
    }
  }
`
