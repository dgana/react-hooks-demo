import { useEffect, useState } from 'react'

const useFetch = (url, initialState = [], isFetch = true) => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(false)
  
  useEffect(() => {
    if (isFetch) {
      fetch(url)
        .then(d => d.json())
        .then(d => {
          setError(false)
          return setData(d)
        })
        .catch(e => setError(true))
    }
  }, [url, isFetch]);

  return [data, error]
}

export default useFetch
