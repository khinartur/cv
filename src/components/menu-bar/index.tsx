import React from "react"
import styled from "styled-components"
import { Image } from "~/components/image"
import { Text } from "~/components/text"
import appleIcon from "~/assets/icons/apple.svg"
import { useAppSelector } from "~/store/hooks"
import { selectActiveApp } from "~/features/app"
import { nameByApplication } from "../app/utils"
import { FontWeight } from "~/theming/themes/common"
import { Watch } from "./watch"

export type MenuBarProps = {
  mobile: boolean
}

export function MenuBar({ mobile }: MenuBarProps) {
  const activeApp = useAppSelector(selectActiveApp)

  return (
    <Container>
      <Left>
        <MenuButton children={<Image src={appleIcon} />} />
        {activeApp && (
          <MenuButton children={<Text weight={FontWeight.BOLD} children={nameByApplication[activeApp]} />} />
        )}
      </Left>
      <Right>
        <Watch />
      </Right>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  align-items: center;
  justify-content: space-between;

  height: 24px;
  padding: 0 16px 0 8px;
  box-sizing: border-box;

  background: ${p => p.theme.colors.menubar};
  backdrop-filter: blur(${p => (p.theme.key === "dark" ? "32.5px" : "75px")});
  color: #fff;
`

const Left = styled.div`
  display: flex;
  align-items: center;
`

const Right = styled.div`
  display: flex;
  align-items: center;
`

const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  padding: 0 8px;

  &:active {
  }
`
