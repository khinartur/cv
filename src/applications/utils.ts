import { ApplicationsEnum } from "~/components/app/domain"
import { Rocket } from "./rocket"
import { Settings } from "./settings"

export function getApplicationByName(app: ApplicationsEnum) {
  switch (app) {
    case ApplicationsEnum.SETTIGNS:
      return Settings
    case ApplicationsEnum.HRGAME:
      return Rocket
    default:
      return null
  }
}
