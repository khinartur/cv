import React, { useCallback, useEffect, useRef } from "react"
import { MIN_WINDOW_HEIGHT, MIN_WINDOW_WIDTH } from "~/core/constants"
import { ResizerProps, TopLeftResizerBlock } from "."

export function TopLeftResizer({ containerRef, updateWindowPosition }: ResizerProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  let containerWidth: number = 0
  let containerHeight: number = 0
  let containerX: number = 0
  let containerY: number = 0
  let mouseX: number = 0
  let mouseY: number = 0

  const mousemoveHandler = useCallback(
    (evt: MouseEvent) => {
      if (containerRef.current) {
        const width = containerWidth - (evt.pageX - mouseX)
        const left = containerX + (evt.pageX - mouseX)
        const height = containerHeight - (evt.pageY - mouseY)
        const top = containerY + (evt.pageY - mouseY)
        if (width > MIN_WINDOW_WIDTH) {
          containerRef.current.style.width = width + "px"
          containerRef.current.style.left = left + "px"
          updateWindowPosition(left, containerY)
        }
        if (height > MIN_WINDOW_HEIGHT) {
          containerRef.current.style.height = height + "px"
          containerRef.current.style.top = top + "px"
          updateWindowPosition(containerX, top)
        }
      }
    },
    [
      containerRef.current,
      updateWindowPosition,
      containerWidth,
      containerHeight,
      containerX,
      containerY,
      mouseX,
      mouseY,
    ],
  )

  const mouseupHandler = useCallback(() => {
    window.removeEventListener("mousemove", mousemoveHandler)
  }, [mousemoveHandler])

  const mousedownHandler = useCallback(
    (evt: MouseEvent) => {
      evt.stopPropagation()
      evt.preventDefault()
      if (containerRef.current) {
        const containerStyles = window.getComputedStyle(containerRef.current)
        containerWidth = parseInt(containerStyles.width.replace("px", ""))
        containerHeight = parseInt(containerStyles.height.replace("px", ""))
        containerX = parseInt(containerStyles.left.replace("px", ""))
        containerY = parseInt(containerStyles.top.replace("px", ""))
        mouseX = evt.pageX
        mouseY = evt.pageY

        window.addEventListener("mousemove", mousemoveHandler)
        window.addEventListener("mouseup", mouseupHandler)
      }
    },
    [containerRef.current],
  )

  useEffect(() => {
    if (containerRef.current && ref.current) {
      const resizer = ref.current
      resizer.addEventListener("mousedown", mousedownHandler)

      return () => {
        window.removeEventListener("mouseup", mouseupHandler)
        resizer.removeEventListener("mousedown", mousedownHandler)
      }
    }
  }, [containerRef.current, ref.current, mousedownHandler, mouseupHandler])

  return <TopLeftResizerBlock ref={ref} />
}
