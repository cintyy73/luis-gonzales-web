import { useEffect, useRef, useState } from 'react'

interface Options {
  end: number
  duration?: number
  start?: number
  decimals?: number
  enabled?: boolean
}

export const useCountUp = ({
  end,
  duration = 1800,
  start = 0,
  decimals = 0,
  enabled = true,
}: Options): string => {
  const [value, setValue] = useState(start)
  const startTime = useRef<number | null>(null)
  const frame = useRef<number | null>(null)

  useEffect(() => {
    if (!enabled) {
      setValue(end)
      return
    }
    startTime.current = null

    const tick = (now: number) => {
      if (startTime.current === null) startTime.current = now
      const elapsed = now - startTime.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(start + (end - start) * eased)
      if (progress < 1) frame.current = requestAnimationFrame(tick)
    }

    frame.current = requestAnimationFrame(tick)
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [end, duration, start, enabled])

  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString()
}
