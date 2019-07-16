import React, { useContext } from 'react'
import { Store } from 'stores'
import { SHOW } from 'config/constants'
import DataGrid from 'ui-kit/DataGrid'
import useNavigate from 'hooks/useNavigate'

const Like = () => {
  const handleNavigation = useNavigate('show')
  const { state: { likes = [] }} = useContext(Store)
  return <DataGrid type={SHOW} data={likes} onClick={handleNavigation} />
}

export default Like
