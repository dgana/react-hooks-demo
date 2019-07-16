import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      const parseItem = JSON.parse(item)
      return parseItem || initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (typeof valueToStore === 'object') {
        return window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
      return window.localStorage.setItem(key, valueToStore)
    } catch (error) {
      return error
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
