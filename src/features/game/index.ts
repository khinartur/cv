import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "~/store"
import { GameState, GameStatus } from "./domain"

const initialState: GameState = {
  status: GameStatus.MENU,
  score: 0,
}

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<GameStatus>) => {
      state.status = action.payload
    },
    incrementScore: (state, action: PayloadAction<number>) => {
      state.score += action.payload
    },
    resetGame: state => {
      state = initialState
    },
  },
})

export const { changeStatus, incrementScore, resetGame } = gameSlice.actions

export const selectGameStatus = (state: RootState) => state.game.status
export const selectGameScore = (state: RootState) => state.game.score

export default gameSlice.reducer
