import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ApplicationsEnum } from "~/components/app/domain"
import { RootState } from "~/store"
import { AppState } from "./domain"

const initialState: AppState = {
  apps: [],
  activeApp: null,
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openApp: (state, action: PayloadAction<ApplicationsEnum>) => {
      const application = action.payload
      // @todo: make random position
      state.apps.push({
        application,
        position: {
          x: 100,
          y: 100,
        },
      })
      state.activeApp = application
    },
    setActiveApp: (state, action: PayloadAction<ApplicationsEnum>) => {
      state.activeApp = action.payload
    },
  },
})

export const { openApp, setActiveApp } = appSlice.actions

export const selectApps = (state: RootState) => state.app.apps
export const selectActiveApp = (state: RootState) => state.app.activeApp

export default appSlice.reducer
