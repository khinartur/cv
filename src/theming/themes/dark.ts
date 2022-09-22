import { AppTheme } from "../types"
import { commonTheme } from "./common"

const colors = {
  primary: "rgba(0, 0, 0, 1)",
  secondary: "rgba(255, 255, 255, 1)",
  menubar: "rgba(79, 79, 79, .2)",
}

export const darkTheme: AppTheme = {
  key: "dark",
  colors,
  ...commonTheme,
}
