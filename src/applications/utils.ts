import { ApplicationsEnum } from "~/components/app/domain"
import { Settings } from "./settings"

export function getApplicationByName(app: ApplicationsEnum) {
  switch (app) {
    case ApplicationsEnum.SETTIGNS:
      return Settings
    default:
      return Settings
  }
}
