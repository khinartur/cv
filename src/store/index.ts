import { configureStore } from "@reduxjs/toolkit"
import appReducer from "~/features/app"
import gameReducer from "~/features/game"

const store = configureStore({
  reducer: {
    app: appReducer,
    game: gameReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
