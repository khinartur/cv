import React, { useCallback, useState } from "react"
import styled from "styled-components"
import { GameScene } from "./scene"

export function Rocket() {
  const [container, setContainer] = useState<HTMLDivElement | null>(null)
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null)
  const setContainerRef = useCallback((node: HTMLDivElement) => setContainer(node), [setContainer])
  const setCanvasRef = useCallback((node: HTMLCanvasElement) => setCanvas(node), [setCanvas])

  return (
    <Container ref={setContainerRef}>
      <Canvas ref={setCanvasRef} />
      {container && canvas && <GameScene container={container} canvas={canvas} />}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  min-width: 320px;
  max-width: 550px;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    width: 400px;
    min-height: 600px;
    max-height: 1000px;
  }
`
const Canvas = styled.canvas`
  flex-grow: 1;
  width: 100%;
  background-color: #0d0a31;
`
