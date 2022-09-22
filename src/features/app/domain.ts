import { ApplicationsEnum } from "~/components/app/domain"
import { ThemeKey } from "~/theming/types"

export type Position = {
  x: number
  y: number
}

export interface OpenedAppState {
  application: ApplicationsEnum
  position: Position
}

export type AppsState = Record<Partial<ApplicationsEnum>, OpenedAppState>

export interface AppState {
  apps: AppsState
  activeApp: Nullable<ApplicationsEnum>
  theme: ThemeKey
}
