import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ApplicationsEnum } from "~/components/app/domain"
import { RootState } from "~/store"
import { getInitialAppState, saveAppStateInStorage } from "~/store/utils"
import { ThemeKey } from "~/theming/types"
import { AppsState, AppState, OpenedAppState } from "./domain"

const defaultState: AppState = {
  apps: {} as AppsState,
  activeApp: null,
  theme: "dark",
}

const initialState: AppState = getInitialAppState(defaultState)

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
      saveAppStateInStorage(state)
    },
    closeApp: (state, action: PayloadAction<ApplicationsEnum>) => {
      delete state.apps[action.payload]
      const remainingApps = Object.keys(state.apps) as ApplicationsEnum[]
      state.activeApp = remainingApps.length === 0 ? null : remainingApps[0]
      saveAppStateInStorage(state)
    },
    setActiveApp: (state, action: PayloadAction<ApplicationsEnum>) => {
      state.activeApp = action.payload
      saveAppStateInStorage(state)
    },
    updateAppPosition: (state, action: PayloadAction<OpenedAppState>) => {
      const app = state.apps[action.payload.application]
      if (app) {
        app.position = action.payload.position
        saveAppStateInStorage(state)
      }
    },
    changeTheme: (state, action: PayloadAction<ThemeKey>) => {
      state.theme = action.payload
      saveAppStateInStorage(state)
    },
  },
})

export const { openApp, closeApp, setActiveApp, updateAppPosition, changeTheme } = appSlice.actions

export const selectApps = (state: RootState) => state.app.apps
export const selectActiveApp = (state: RootState) => state.app.activeApp
export const selectAppTheme = (state: RootState) => state.app.theme

export default appSlice.reducer
