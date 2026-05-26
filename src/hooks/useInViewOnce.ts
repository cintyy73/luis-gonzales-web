import { useEffect, useRef, useState } from 'react'

export const useInViewOnce = <T extends HTMLElement = HTMLDivElement>(
  rootMargin = '0px 0px -10% 0px',
): [React.RefObject<T>, boolean] => {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current || inView) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold: 0.15 },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [rootMargin, inView])

  return [ref, inView]
}
