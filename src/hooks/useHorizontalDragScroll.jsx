import { useRef } from "react"

export default function useHorizontalDragScroll() {
  const ref = useRef(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const onMouseDown = (e) => {
    isDown.current = true
    startX.current = e.pageX - ref.current.offsetLeft
    scrollLeft.current = ref.current.scrollLeft
  }

  const onMouseLeave = () => {
    isDown.current = false
  }

  const onMouseUp = () => {
    isDown.current = false
  }

  const onMouseMove = (e) => {
    if (!isDown.current) return
    e.preventDefault()

    const x = e.pageX - ref.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    ref.current.scrollLeft = scrollLeft.current - walk
  }

  return {
    ref,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,
  }
}
