import React, { useState, useEffect } from 'react'
import baseURL from 'config/baseURL'

import FlexBox from 'ui-kit/FlexBox'
import Input from 'ui-kit/Input'
import { H1 } from 'ui-kit/Heading'
import Img from 'ui-kit/Img'
import saveIcon from 'assets/save.png'

import useForm from 'hooks/useForm'
import useDebounce from 'hooks/useDebounce'
import useFetch from 'hooks/useFetch'
import { Link, navigate } from '@reach/router'

import styles from './Header.module.css'

const Header = ({ location }) => {
  const [query, setQuery] = useState('');
  const [{ search, count }, onChange] = useForm({ search: '', count: 1 })
  const [{ id }] = useFetch(`${baseURL}singlesearch/shows?q=${query}`, {}, query)

  useDebounce(() => {
    if (search) {
      setQuery(search)
    }
  }, count * 1000, [search, count])

  /**
   * Effect after debounce 
   */
  useEffect(() => {
    if (id) {
      if (window.location.href.includes('show')) {
        navigate(`${id}`)
      } else {
        navigate(`show/${id}`)
      }
      setQuery("")
    }
  }, [id, query])

  /**
   * Effect when the page is in HomePage to clear searchValue
   */
  useEffect(() => {
    if (location.pathname === '/') {
      onChange({ target: { name: 'search', value: '' }})
    }
  }, [location.pathname, onChange])
  
  return (
    <FlexBox className={styles.fixed} justify='space-between' align="center">
      <Link to="/">
        <H1 className={styles.h1}>TV Show</H1>
      </Link>
      <FlexBox align="center" justify='flex-start'>
        <Input 
          type="number" 
          name="count"
          placeholder="change debounce ms"
          className={styles.inputBounce} 
          value={count} 
          onChange={onChange} 
        />
        <Input 
          type="search" 
          name="search"
          placeholder="Search show here"
          className={styles.input} 
          value={search} 
          onChange={onChange} 
        />
        <Link to="/save">
          <Img src={saveIcon} className={styles.save} alt="save" />
        </Link>
      </FlexBox> 
    </FlexBox>
  )
}

export default Header
