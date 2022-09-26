export enum GameStatus {
  MENU = "menu",
  RUNNED = "runned",
  PAUSED = "paused",
  GAME_OVER = "game-over",
  BREAKPOINT = "breakpoint",
}

export interface GameState {
  status: GameStatus
  score: number
}
