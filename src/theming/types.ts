import { FlattenSimpleInterpolation } from "styled-components"
import { FontSize, FontWeight, ZIndex } from "./themes/common"

export const uiSizes = ["sm", "md", "lg", "xl"] as const
export type UISize = typeof uiSizes[number]

export type CommonTheme = {
  breakpoints: Record<UISize, string>
  fontsStyles: Record<FontSize, FlattenSimpleInterpolation>
  fontsWeights: Record<FontWeight, FlattenSimpleInterpolation>
  transitions: {
    fast: string
    medium: string
    long: string
  }
  uiSizes: Record<UISize, number>
  zIndexes: Record<ZIndex, number>
}

export type AppTheme = CommonTheme & {
  key: ThemeKey

  colors: {
    primary: string
    secondary: string
    menubar: string
  }
}

export const themeKeys = ["light", "dark"] as const

export type ThemeKey = typeof themeKeys[number]
