import { useEffect } from 'react'

const useDebounce = (fn, ms, deps = []) => {
  useEffect(() => {
    const handle = setTimeout(fn, ms)
    return () => clearTimeout(handle)
    // eslint-disable-next-line
  }, deps)
}

export default useDebounce
