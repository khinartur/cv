import React, { useCallback } from "react"
import styled from "styled-components"
import sunIcon from "~/assets/icons/sun.svg"
import { Image } from "~/components/image"
import { Text } from "~/components/text"
import { Toggle } from "~/components/toggle"
import { AppTheme } from "~/core/domain"
import { changeTheme, selectAppTheme } from "~/features/app"
import { useAppDispatch, useAppSelector } from "~/store/hooks"

export function Settings() {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectAppTheme)

  const onToggle = useCallback(() => {
    dispatch(changeTheme(theme === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK))
  }, [dispatch, theme])

  return (
    <Container>
      <Title children="Settings" />
      <List>
        <Setting>
          <IconWrapper children={<Image src={sunIcon} />} />
          <Text children="Light theme" />
          <Toggle enabled={theme === AppTheme.LIGHT} onChange={onToggle} />
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

const Title = styled(Text)`
  font-size: 24px;
  color: #fff;
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
