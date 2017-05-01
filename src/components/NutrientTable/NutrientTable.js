import React from 'react'
import PropTypes from 'prop-types'
import { Column, Cell } from 'fixed-data-table'
import ResponsiveTableWrapper from '../ResponsiveTableWrapper'
import renderers from '../../modules/renderers'

// Stateless cell components for Table component
function SortHeaderCell ({children, sortBy, sortKey, sortDesc, columnKey, ...props}) {
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

function DataCell ({data, rowIndex, columnKey, ...props}) {
  return <Cell {...props}> {data[rowIndex][columnKey]} </Cell>
}

DataCell.propTypes = {
  data: PropTypes.array.isRequired,
  rowIndex: PropTypes.number,
  columnKey: PropTypes.string
}

class NutrientTable extends React.Component {
  componentWillMount () {
    this.props.fetchData()
  }

  handleFilterStringChange () {
    return (e) => {
      e.preventDefault()
      this.props.filterBy(e.target.value)
    }
  }

  doesMatch (str) {
    return (key) => (key + '').toLowerCase().indexOf(str) !== -1
  }

  filterData () {
    const {data, filterString} = this.props
    const str = filterString.toLowerCase()
    return str !== ''
      ? data.filter((r) => Object.values(r).some(this.doesMatch(str)))
      : data
  }

  sortData () {
    const {data, sortKey, sortDesc} = this.props
    const multiplier = sortDesc ? -1 : 1
    data.sort((a, b) => {
      const aVal = a[sortKey] || 0
      const bVal = b[sortKey] || 0
      return aVal > bVal ? multiplier : (aVal < bVal ? -multiplier : 0)
    })
    return this
  }

  render () {
    const { isFetching, filterString, sortBy, sortKey, sortDesc } = this.props
    const headerCellProps = { sortBy, sortKey, sortDesc }

    const data = this.sortData().filterData()

    return (
      <div>
        <input className='filter-input' value={filterString}
          onChange={this.handleFilterStringChange()}
          type='text' placeholder='Filter Rows'
          autoCorrect='off' autoCapitalize='off' spellCheck='false' />
        <br />

        {isFetching && data.length === 0 &&
          <div className='loader-box' />}
        {!isFetching && data.length === 0 &&
          <h3 className='center'>No Matching Results :( </h3>}

        <ResponsiveTableWrapper
          rowHeight={50}
          headerHeight={50}
          rowsCount={data.length}>
          <Column
            columnKey='food'
            header={<SortHeaderCell {...headerCellProps}> Food </SortHeaderCell>}
            cell={<DataCell data={data} />}
            flexGrow={3}
            width={100} />
          <Column
            columnKey='nutrient'
            header={<SortHeaderCell {...headerCellProps}> Nutrient </SortHeaderCell>}
            cell={<DataCell data={data} />}
            flexGrow={1}
            width={100} />
          <Column
            columnKey='value'
            header={<SortHeaderCell {...headerCellProps}> Value </SortHeaderCell>}
            cell={<DataCell data={data} />}
            flexGrow={0.5}
            width={100} />
          <Column
            columnKey='unit'
            header={<SortHeaderCell {...headerCellProps}> Unit </SortHeaderCell>}
            cell={<DataCell data={data} />}
            flexGrow={0.1}
            width={100} />
        </ResponsiveTableWrapper>
      </div>
    )
  }
}

NutrientTable.propTypes = {
  // actions
  fetchData: PropTypes.func.isRequired,
  sortBy: PropTypes.func.isRequired,
  filterBy: PropTypes.func.isRequired,

  // state data
  data: PropTypes.array.isRequired,
  filterString: PropTypes.string.isRequired,
  sortKey: PropTypes.string.isRequired,
  sortDesc: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default NutrientTable
