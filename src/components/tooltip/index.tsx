import React from "react"
import styled from "styled-components"

export type TooltipProps = {
  label: string
  children: React.ReactNode
}

export function Tooltip({ label, children }: TooltipProps) {
  return <Wrapper data-label={label}>{children}</Wrapper>
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, calc(-100% - 24px));
    border-width: 8px 6px 0;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.2) transparent transparent transparent;
    backdrop-filter: blur(25px);
    opacity: 0;
    z-index: 10;
  }

  &::after {
    content: attr(data-label);
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, calc(-100% - 32px));
    opacity: 0;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.2);
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(25px);
    font-size: 13px;
    color: white;
    text-align: center;
    white-space: nowrap;
    padding: 6px 8px;
    z-index: 10;
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
  }
`
