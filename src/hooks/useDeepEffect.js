import { useEffect, useRef } from 'react'
import { isEqual } from 'utils'

function useDeepCompareMemoize(value) {
  const ref = useRef()
  if (!isEqual(value, ref.current)) {
    ref.current = value
  }
  return ref.current
}

const useDeepEffect = (fn, deps) => {
  useEffect(fn, useDeepCompareMemoize(deps))
}

export default useDeepEffect
