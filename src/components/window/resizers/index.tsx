import React from "react"
import styled from "styled-components"
import { BottomResizer } from "./bottom"
import { BottomLeftResizer } from "./bottom-left"
import { BottomRightResizer } from "./bottom-right"
import { LeftResizer } from "./left"
import { RightResizer } from "./right"
import { TopResizer } from "./top"
import { TopLeftResizer } from "./top-left"
import { TopRightResizer } from "./top-right"

export type ResizerProps = {
  containerRef: React.MutableRefObject<HTMLDivElement | null>
  updateWindowPosition: (x: number, y: number) => void
}

export function Resizers(props: ResizerProps) {
  return (
    <>
      <TopResizer {...props} />
      <TopRightResizer {...props} />
      <RightResizer {...props} />
      <BottomRightResizer {...props} />
      <BottomResizer {...props} />
      <BottomLeftResizer {...props} />
      <LeftResizer {...props} />
      <TopLeftResizer {...props} />
    </>
  )
}

const Resizer = styled.div`
  position: absolute;
  background: transparent;
`

const CornerResizer = styled(Resizer)`
  width: 8px;
  height: 8px;
  z-index: 1;
`

export const TopRightResizerBlock = styled(CornerResizer)`
  top: 0;
  right: 0;
  cursor: nesw-resize;
`

export const BottomRightResizerBlock = styled(CornerResizer)`
  bottom: 0;
  right: 0;
  cursor: nwse-resize;
`

export const BottomLeftResizerBlock = styled(CornerResizer)`
  bottom: 0;
  left: 0;
  cursor: nesw-resize;
`

export const TopLeftResizerBlock = styled(CornerResizer)`
  top: 0;
  left: 0;
  cursor: nwse-resize;
`

const HorizontalResizer = styled(Resizer)`
  background: transparent;
  width: 100%;
  height: 4px;
  cursor: ns-resize;
`

const VerticalResizer = styled(Resizer)`
  background: transparent;
  width: 4px;
  height: 100%;
  cursor: ew-resize;
`

export const TopResizerBlock = styled(HorizontalResizer)`
  top: 0;
  left: 0;
`

export const BottomResizerBlock = styled(HorizontalResizer)`
  bottom: 0;
  left: 0;
`

export const RightResizerBlock = styled(VerticalResizer)`
  top: 0;
  right: 0;
`

export const LeftResizerBlock = styled(VerticalResizer)`
  top: 0;
  left: 0;
`
