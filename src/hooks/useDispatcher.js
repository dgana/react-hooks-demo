import { useContext, useEffect, useCallback } from 'react'
import { Store } from 'stores'
import useLocalStorage from 'hooks/useLocalStorage'

const useDispatcher = (action, payload, key) => {
  const { state, dispatch } = useContext(Store)
  const [,setLocalStorage] = useLocalStorage('data')

  const dispatcher = () => {
    action(dispatch, payload)
  }

  const cb = useCallback(setLocalStorage, [])

  useEffect(() => {
    cb(state)
  }, [cb, state])

  return dispatcher
}

export default useDispatcher
