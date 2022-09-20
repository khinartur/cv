import { ApplicationsEnum } from "~/components/app/domain"

export type Position = {
  x: number
  y: number
}

export interface OpenedAppState {
  application: ApplicationsEnum
  position: Position
}

export interface AppState {
  apps: OpenedAppState[]
  activeApp: Nullable<ApplicationsEnum>
}
