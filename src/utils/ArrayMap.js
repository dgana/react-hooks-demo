import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ArrayMap = ({ data, children }) => {
  return data.map((x, i) => (
    <Fragment key={x.id || i.toString()}>{children(x, i)}</Fragment>
  ))
}

ArrayMap.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
}

export default ArrayMap
