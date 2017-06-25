import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import renderers from '../../modules/renderers'

// Stateless cell components for Table component
export function SortHeaderCell ({children, sortBy, sortKey, sortDesc, columnKey, ...props}) {
  const clickFunc = () => sortBy(columnKey)

  return (
    <Cell {...props}>
      <a onClick={clickFunc}>
        {children} {renderers.renderSortArrow(sortKey, sortDesc, columnKey)}
      </a>
    </Cell>
  )
}

SortHeaderCell.propTypes = {
  sortBy: PropTypes.func.isRequired,
  sortKey: PropTypes.string.isRequired,
  sortDesc: PropTypes.bool.isRequired,
  columnKey: PropTypes.string,
  children: PropTypes.any
}

export function DataCell ({data, rowIndex, columnKey, ...props}) {
  return <Cell {...props}> {data[rowIndex][columnKey]} </Cell>
}

DataCell.propTypes = {
  data: PropTypes.array.isRequired,
  rowIndex: PropTypes.number,
  columnKey: PropTypes.string
}
