import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ApplicationsEnum } from "~/components/app/domain"
import { RootState } from "~/store"
import { AppsState, AppState, OpenedAppState } from "./domain"

const initialState: AppState = {
  apps: {} as AppsState,
  activeApp: null,
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openApp: (state, action: PayloadAction<ApplicationsEnum>) => {
      const application = action.payload
      // @todo: make random position
      const alreadyOpenedApp = state.apps[application]
      if (alreadyOpenedApp) {
        state.activeApp = alreadyOpenedApp.application
        return
      }
      state.apps[application] = {
        application,
        position: {
          x: 100,
          y: 100,
        },
      }
      state.activeApp = application
    },
    closeApp: (state, action: PayloadAction<ApplicationsEnum>) => {
      delete state.apps[action.payload]
    },
    setActiveApp: (state, action: PayloadAction<ApplicationsEnum>) => {
      state.activeApp = action.payload
    },
    updateAppPosition: (state, action: PayloadAction<OpenedAppState>) => {
      const app = state.apps[action.payload.application]
      if (app) {
        app.position = action.payload.position
      }
    },
  },
})

export const { openApp, closeApp, setActiveApp, updateAppPosition } = appSlice.actions

export const selectApps = (state: RootState) => state.app.apps
export const selectActiveApp = (state: RootState) => state.app.activeApp

export default appSlice.reducer
