import React, { useCallback } from "react"
import styled from "styled-components"
import { Text } from "~/components/text"
import { changeStatus, selectGameScore, selectGameStatus } from "~/features/game"
import { GameStatus } from "~/features/game/domain"
import { useAppDispatch, useAppSelector } from "~/store/hooks"

export function GameUI() {
  const dispatch = useAppDispatch()
  const status = useAppSelector(selectGameStatus)
  const score = useAppSelector(selectGameScore)

  const onStart = useCallback(() => {
    dispatch(changeStatus(GameStatus.RUNNED))
  }, [])

  if (status === GameStatus.MENU) {
    return (
      <Container>
        <MenuWrapper>
          <StartButton onClick={onStart} children="START" />
        </MenuWrapper>
      </Container>
    )
  }

  if (status === GameStatus.RUNNED) {
    return (
      <Container>
        <RunnedWrapper>
          <ScoreWrapper>
            <Score children={String(score)} />
          </ScoreWrapper>
          <ControlsWrapper></ControlsWrapper>
        </RunnedWrapper>
      </Container>
    )
  }

  return <Container></Container>
}

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
`

const MenuWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const RunnedWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`

const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Score = styled(Text)`
  color: #fff;
  font-size: 24px;
`

const StartButton = styled.button`
  /* disable appearance */
  background: transparent;
  border: none;
  cursor: pointer;
  line-height: normal;

  /* common */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  padding: 0 12px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  color: #000;
  background-color: #fff;
`
