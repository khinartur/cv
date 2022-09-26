import { getRandomIntFromRange } from "~/core/utils/get-random-int-from-range"

export class Star {
  public x: number = 0
  public y: number = 0
  public width: number = 4
  public height: number = 4

  constructor(private readonly skyWidth: number, private readonly skyHeight: number) {
    this.x = getRandomIntFromRange(10, this.skyWidth - 10)
    this.y = getRandomIntFromRange(0, this.skyHeight)
  }

  updatePosition = () => {
    if (++this.y > this.skyHeight) {
      this.y = 0
    }
  }
}
