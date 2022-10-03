import React, { useCallback, useEffect, useRef } from "react"
import styled from "styled-components"
import { getApplicationByName } from "~/applications/utils"
import { debounce } from "~/core/utils/debounce"
import { setActiveApp, updateAppPosition } from "~/features/app"
import { OpenedAppState, Position } from "~/features/app/domain"
import { useAppDispatch } from "~/store/hooks"
import { Header } from "./header"
import { Resizers } from "./resizers"

export type WindowProps = {
  appState: OpenedAppState
}

export function Window({ appState: { application, position } }: WindowProps) {
  const dispatch = useAppDispatch()
  const Application = getApplicationByName(application)

  const onWrapperClick = useCallback(() => {
    dispatch(setActiveApp(application))
  }, [dispatch])

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

  const onDrag = useCallback(
    ({ movementX, movementY }: MouseEvent) => {
      if (wrapperRef.current) {
        const styles = window.getComputedStyle(wrapperRef.current)
        const left = parseInt(styles.left) + movementX
        const top = parseInt(styles.top) + movementY
        wrapperRef.current.style.left = `${left}px`
        wrapperRef.current.style.top = `${top}px`
        updateWindowPosition(left, top)
      }
    },
    [wrapperRef.current],
  )

  useEffect(() => {
    const header = headerRef.current
    const wrapper = wrapperRef.current
    if (header && wrapper) {
      const onMouseDown = () => {
        header.addEventListener("mousemove", onDrag)
      }
      header.addEventListener("mousedown", onMouseDown)

      const onMouseUp = () => {
        header.removeEventListener("mousemove", onDrag)
      }
      document.addEventListener("mouseup", onMouseUp)

      return () => {
        header.removeEventListener("mousedown", onMouseDown)
        document.removeEventListener("mouseup", onMouseUp)
      }
    }
  }, [headerRef.current, wrapperRef.current, onDrag])

  console.log("WINDOW POSITION", position)

  return (
    <Wrapper ref={wrapperRef} position={position} onClick={onWrapperClick}>
      <Header ref={headerRef} application={application} />
      {Application && <Application />}
      <Resizers containerRef={wrapperRef} updateWindowPosition={updateWindowPosition} />
    </Wrapper>
  )
}

const Wrapper = styled.div<{ position: Position }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${p => p.position.y}px;
  left: ${p => p.position.x}px;
  min-width: 300px;
  min-height: 300px;
  background-color: #000;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5), inset 0px 0.5px 1px #ffffff;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.15)) drop-shadow(0px 25px 30px rgba(0, 0, 0, 0.35));
  pointer-events: auto;
`
