import { GameStatus } from "~/features/game/domain"
import { Star } from "./star"

const STARS_COUNT = 50
const ROCKET_WIDTH = 80
const ROCKET_HEIGHT = 92

export class GameController {
  private initialized: boolean = false
  private paused: boolean = false
  private launchMeteorites: boolean = false
  private ctx: CanvasRenderingContext2D
  private C_WIDTH: number
  private C_HEIGHT: number
  private stars: Star[]
  private ROCKET_X: number
  private ROCKET_Y: number
  private rocketImage: HTMLImageElement | undefined
  private meteoriteImage: HTMLImageElement | undefined
  private animationId: number | undefined

  constructor(private readonly container: HTMLDivElement, private readonly canvas: HTMLCanvasElement) {
    const containerStyles = getComputedStyle(this.container)
    this.C_WIDTH = this.canvas.width = parseInt(containerStyles.width)
    this.C_HEIGHT = this.canvas.height = parseInt(containerStyles.height)
    this.ctx = this.canvas.getContext("2d")!
    this.ctx.fillStyle = "white"

    this.stars = new Array(STARS_COUNT).fill(null).reduce(acc => {
      acc.push(new Star(this.C_WIDTH, this.C_HEIGHT))
      return acc
    }, [])

    this.ROCKET_X = this.C_WIDTH / 2 - ROCKET_WIDTH / 2
    this.ROCKET_Y = this.C_HEIGHT - ROCKET_HEIGHT * 1.2
  }

  init = (rocketImage: HTMLImageElement, meteoriteImage: HTMLImageElement) => {
    this.rocketImage = rocketImage
    this.meteoriteImage = meteoriteImage
    this.initialized = true
  }

  start = () => {
    document.addEventListener("beforeunload", this.beforeUnloadListener)
    this.animate()
  }

  finish = () => {
    document.removeEventListener("beforeunload", this.beforeUnloadListener)
  }

  pause = () => {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
      this.paused = true
    }
  }

  resume = () => {
    if (this.paused) {
      this.animate()
    }
  }

  processStatus = (status: GameStatus) => {
    if (!this.initialized) {
      return
    }
    switch (status) {
      case GameStatus.MENU:
        this.launchMeteorites = false
        this.resume()
        break
      case GameStatus.RUNNED:
        this.launchMeteorites = true
        this.resume()
        break
      case GameStatus.PAUSED:
        this.pause()
        break
      case GameStatus.BREAKPOINT:
        this.pause()
        break
      case GameStatus.GAME_OVER:
        this.pause()
        break
    }
  }

  animate = () => {
    this.ctx.clearRect(0, 0, this.C_WIDTH, this.C_HEIGHT)
    for (const star of this.stars) {
      star.updatePosition()
      this.ctx.fillRect(star.x, star.y, star.width, star.height)
    }
    this.ctx.drawImage(this.rocketImage!, this.ROCKET_X, this.ROCKET_Y, ROCKET_WIDTH, ROCKET_HEIGHT)
    this.animationId = requestAnimationFrame(this.animate)
  }

  private beforeUnloadListener = (evt: BeforeUnloadEvent) => {
    evt.preventDefault()
    return (evt.returnValue = "Game progress will be lost. Are you sure you want to close the page?")
  }
}
