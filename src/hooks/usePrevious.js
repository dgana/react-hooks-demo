import { useRef, useEffect } from 'react'

/**
 * usePrevious to compare previous and current state
 * given value param is the previous state
 *
 * @param {State} value
 */
const usePrevious = (value) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default usePrevious
