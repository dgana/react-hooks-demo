import { useState } from 'react'

const usePagination = (initialCurrent) => {
  const [current, setCurrent] = useState(initialCurrent);
  const handlePrev = () => {
    if (current !== 0) {
      setCurrent(current - 1)
    }
  }
  const handleNext = () => setCurrent(current + 1)
  return [handlePrev, handleNext, current]
}

export default usePagination
