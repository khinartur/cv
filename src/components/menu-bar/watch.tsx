import React, { useEffect, useState } from "react"
import { Text } from "~/components/text"

export function Watch() {
  const [value, setValue] = useState<null | string>(null)

  useEffect(() => {
    const handler = () => {
      const date = new Date()
      const hours = date.getHours()
      const minutes = date.getMinutes()

      const hoursStr = hours < 10 ? "0" + hours : hours
      const minutesStr = minutes < 10 ? "0" + minutes : minutes

      setValue(hoursStr + ":" + minutesStr)
    }
    const id = setInterval(handler, 1000)
    return () => clearInterval(id)
  }, [])

  if (!value) return null
  return <Text children={value} />
}
