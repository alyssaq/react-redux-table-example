import React from 'react'
import PropTypes from 'prop-types'
import { Column } from 'fixed-data-table-2'
import { SortHeaderCell, DataCell } from './Cells'
import ResponsiveTableWrapper from '../ResponsiveTableWrapper'

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

  render () {
    const { isFetching, data, filterString, sortBy, sortKey, sortDesc } = this.props
    const headerCellProps = { sortBy, sortKey, sortDesc }

    return (
      <div>
        <input className='filter-input' value={filterString}
          onChange={this.handleFilterStringChange()}
          type='search' placeholder='Filter Rows'
          autoCorrect='off' autoCapitalize='off' spellCheck='false' />
        <br />

        {isFetching && <div className='loader-box' />}
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
