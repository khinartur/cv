import React, { useCallback } from "react"
import styled from "styled-components"
import sunIcon from "~/assets/icons/sun.svg"
import { Image } from "~/components/image"
import { Text } from "~/components/text"
import { Toggle } from "~/components/toggle"
import { changeTheme, selectAppTheme } from "~/features/app"
import { useAppDispatch, useAppSelector } from "~/store/hooks"
import { FontSize, FontWeight } from "~/theming/themes/common"

// @todo: choose language, choose time + time format
export function Settings() {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectAppTheme)

  const onToggle = useCallback(() => {
    dispatch(changeTheme(theme === "dark" ? "light" : "dark"))
  }, [dispatch, theme])

  return (
    <Container>
      <Text size={FontSize.TITLE_APP} weight={FontWeight.BOLD} children="Settings" />
      <List>
        <Setting>
          <SettingLeft>
            <IconWrapper children={<Image src={sunIcon} />} />
            <Text children="Light theme" />
          </SettingLeft>
          <Toggle enabled={theme === "light"} onChange={onToggle} />
        </Setting>
      </List>
    </Container>
  )
}

const Container = styled.div`
  width: 600px;
  min-width: 320px;
  height: 400px;
  min-height: 600px;
  padding: 48px 8px 64px;
  box-sizing: border-box;
  background-color: #000;
`

const List = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  background-color: #1c1c1e;
  border-radius: 10px;
  min-height: 300px;
`

const Setting = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
`

const SettingLeft = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: #efa21e;
  margin-right: 12px;
`
