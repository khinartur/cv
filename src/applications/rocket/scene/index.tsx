import React, { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import rocketIcon from "~/assets/icons/rocket.svg"
import meteoriteIcon from "~/assets/icons/meteorite.svg"
import { GameController } from "./controller"
import { GameUI } from "./game-ui"
import { useAppSelector } from "~/store/hooks"
import { selectGameStatus } from "~/features/game"

export type GameSceneProps = {
  container: HTMLDivElement
  canvas: HTMLCanvasElement
}

export function GameScene({ container, canvas }: GameSceneProps) {
  const status = useAppSelector(selectGameStatus)

  const [rocketImage, setRocketImage] = useState<HTMLImageElement | null>(null)
  const [meteoriteImage, setMeteoriteImage] = useState<HTMLImageElement | null>(null)

  const controller = useMemo(() => new GameController(container, canvas), [container, canvas])

  useEffect(() => {
    if (rocketImage && meteoriteImage) {
      controller.init(rocketImage, meteoriteImage)
      controller.start()

      return () => controller.finish()
    }
  }, [rocketImage, meteoriteImage])

  useEffect(() => {
    controller.processStatus(status)
  }, [status])

  // @todo: event type
  useEffect(() => {
    const rocketImage = document.getElementById("rocket") as HTMLImageElement
    rocketImage.onload = (e: any) => setRocketImage(e.target)

    const meteoriteImage = document.getElementById("meteorite") as HTMLImageElement
    meteoriteImage.onload = (e: any) => setMeteoriteImage(e.target)
  }, [])

  return (
    <>
      <GameUI />
      <Hidden>
        <img id="rocket" src={rocketIcon} />
        <img id="meteorite" src={meteoriteIcon} />
      </Hidden>
    </>
  )
}

const Hidden = styled.div`
  display: none;
`
