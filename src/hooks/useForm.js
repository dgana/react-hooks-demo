import { useState, useCallback } from 'react'

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleChange = useCallback(({ target }) => {
    const { name, value } = target
    setValues(state => ({ ...state, [name]: value }))
  }, [])

  return [values, handleChange]
}

export default useForm
