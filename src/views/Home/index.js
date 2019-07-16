import React from 'react';
import { SHOW } from 'config/constants'

import baseURL from 'config/baseURL'
import useFetch from 'hooks/useFetch'
import usePagination from 'hooks/usePagination'
import useNavigate from 'hooks/useNavigate'

import DataGrid from 'ui-kit/DataGrid'
import Pagination from 'ui-kit/Pagination'

const HomeView = () => {
  const [prev, next, curr] = usePagination(0)
  const handleNavigation = useNavigate('show')
  const [data] = useFetch(`${baseURL}shows?page=${curr}`)

  return (
    <>
      <Pagination next={next} prev={prev} />
      <DataGrid type={SHOW} data={data} onClick={handleNavigation} />
    </>
  );
}

export default HomeView;