import { navigate } from '@reach/router'

const useNavigate = (url) => {
  const handleNavigation = ({ id }) => () => {
    navigate(`${url}/${id}`)
  }
  return handleNavigation
}

export default useNavigate
