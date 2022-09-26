import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { useMediaQuery } from "~/core/hooks/use-media-query"
import { AppsGrid } from "~/components/apps-grid"
import { Dock } from "~/components/dock"
import { MenuBar } from "~/components/menu-bar"
import { selectAppTheme } from "~/features/app"
import { useAppSelector } from "~/store/hooks"
import { themeByKey } from "~/theming/themes"
import { Scene } from "./scene"

export function Root() {
  const theme = useAppSelector(selectAppTheme)
  const isMobile = useMediaQuery(768)

  return (
    <ThemeProvider theme={themeByKey[theme]}>
      <Container>
        <MenuBar mobile={isMobile} />
        {isMobile && <AppsGrid />}
        <Scene />
        <Dock mobile={isMobile} />
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(
    187.84deg,
    #41042b 2.43%,
    #63145a 26.6%,
    #410533 57.19%,
    #6b1960 74.45%,
    #300021 97.15%,
    #300021 97.15%
  );
`
