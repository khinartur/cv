import React, { useCallback, useEffect, useRef } from "react"
import styled from "styled-components"
import { getApplicationByName } from "~/applications/utils"
import { debounce } from "~/core/utils/debounce"
import { updateAppPosition } from "~/features/app"
import { OpenedAppState, Position } from "~/features/app/domain"
import { useAppDispatch } from "~/store/hooks"
import { Header } from "./header"

export type WindowProps = {
  appState: OpenedAppState
}

export function Window({ appState: { application, position } }: WindowProps) {
  const dispatch = useAppDispatch()
  const Application = getApplicationByName(application)

  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const headerRef = useRef<HTMLDivElement | null>(null)

  const updateWindowPosition = useCallback(
    debounce(
      (x: number, y: number) =>
        dispatch(
          updateAppPosition({
            application,
            position: { x, y },
          }),
        ),
      500,
    ),
    [application],
  )

  useEffect(() => {
    const header = headerRef.current
    const wrapper = wrapperRef.current
    if (header && wrapper) {
      const onDrag = ({ movementX, movementY }: MouseEvent) => {
        const styles = window.getComputedStyle(wrapper)
        const left = parseInt(styles.left)
        const top = parseInt(styles.top)
        wrapper.style.left = `${left + movementX}px`
        wrapper.style.top = `${top + movementY}px`
        updateWindowPosition(left, top)
      }

      header.addEventListener("mousedown", () => {
        header.addEventListener("mousemove", onDrag)
      })

      document.addEventListener("mouseup", () => {
        header.removeEventListener("mousemove", onDrag)
      })
    }
  }, [headerRef.current, wrapperRef.current, updateWindowPosition])

  return (
    <Wrapper ref={wrapperRef} position={position}>
      <Header ref={headerRef} application={application} />
      <Application />
    </Wrapper>
  )
}

const Wrapper = styled.div<{ position: Position }>`
  position: absolute;
  top: ${p => p.position.y}px;
  left: ${p => p.position.x}px;
  min-width: 300px;
  min-height: 300px;
  background-color: #000;
  border-radius: 10px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5), inset 0px 0.5px 1px #ffffff;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.15)) drop-shadow(0px 25px 30px rgba(0, 0, 0, 0.35));
  pointer-events: auto;
`
