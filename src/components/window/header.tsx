import React, { useCallback } from "react"
import styled from "styled-components"
import { closeApp } from "~/features/app"
import { useAppDispatch } from "~/store/hooks"
import { ApplicationsEnum } from "../app/domain"

export type HeaderProps = {
  application: ApplicationsEnum
}

export const Header = React.forwardRef(({ application }: HeaderProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const dispatch = useAppDispatch()

  const onClose = useCallback(() => {
    dispatch(closeApp(application))
  }, [dispatch])

  return (
    <Container ref={ref}>
      <Close onClick={onClose} />
      <Fold />
      <Fullscreen />
    </Container>
  )
})

const Button = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  background-color: #fff;
  height: 30px;
  border-radius: 10px 10px 0 0;
  box-sizing: border-box;

  & > ${Button} {
    margin-right: 8px;
  }
`

const Close = styled(Button)`
  background: #ec6a5e;
  border: 0.5px solid rgba(0, 0, 0, 0.12);
`

const Fold = styled(Button)`
  background: #f5bf4f;
  border: 0.5px solid rgba(0, 0, 0, 0.12);
`

const Fullscreen = styled(Button)`
  background: #61c554;
  border: 0.5px solid rgba(0, 0, 0, 0.12);
`
