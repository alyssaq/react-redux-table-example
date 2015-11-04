import React from 'react'
import { Column } from 'fixed-data-table'
import ResponsiveTableWrapper from '../ResponsiveTableWrapper'
import renderers from '../../modules/renderers'

class NutrientTable extends React.Component {
  constructor (props) {
    super(props)
  }

  static propTypes = {
    // actions
    fetchData: React.PropTypes.func.isRequired,
    sortBy: React.PropTypes.func.isRequired,
    filterBy: React.PropTypes.func.isRequired,

    // state data
    data: React.PropTypes.array.isRequired,
    filterString: React.PropTypes.string.isRequired,
    sortKey: React.PropTypes.string.isRequired,
    sortDesc: React.PropTypes.bool.isRequired,
    isFetching: React.PropTypes.bool.isRequired
  }

  componentWillMount () {
    this.props.fetchData()
  }

  handleFilterStringChange (e) {
    e.preventDefault()
    this.props.filterBy(e.target.value)
  }

  handleSortClick (label, key) {
    return <a onClick={() => this.props.sortBy(key)}>{label}</a>
  }

  doesMatch (str) {
    return (key) => (key + '').toLowerCase().indexOf(str) !== -1
  }

  filterData () {
    const {data, filterString} = this.props
    const str = filterString.toLowerCase()
    return str !== ''
      ? data.filter(r => Object.values(r).some(this.doesMatch(str)))
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
    const { isFetching } = this.props
    const data = this.sortData().filterData()

    return (
      <div>
        <input className='filter-input'
          onChange={::this.handleFilterStringChange}
          type='text' placeholder='Filter Rows'
          autoCorrect='off' autoCapitalize='off' spellCheck='false'/>
        <br/>

        {isFetching && data.length === 0 &&
          <div className='loader-box'></div>}
        {!isFetching && data.length === 0 &&
          <h3 className='center'>No Matching Results :( </h3>}

        <ResponsiveTableWrapper
          rowHeight={50}
          headerHeight={50}
          rowGetter={(i) => data[i]}
          rowsCount={data.length}>
          <Column
            label={'Food' + renderers.renderSortArrow(this.props, 'food')}
            dataKey='food'
            headerRenderer={::this.handleSortClick}
            flexGrow={3}
            width={100} />
          <Column
            label={'Nutrient' + renderers.renderSortArrow(this.props, 'nutrient')}
            dataKey='nutrient'
            headerRenderer={::this.handleSortClick}
            flexGrow={1}
            width={100} />
          <Column
            label={'Value' + renderers.renderSortArrow(this.props, 'value')}
            dataKey='value'
            headerRenderer={::this.handleSortClick}
            flexGrow={0.5}
            width={100} />
          <Column
            label={'Unit' + renderers.renderSortArrow(this.props, 'unit')}
            dataKey='unit'
            headerRenderer={::this.handleSortClick}
            flexGrow={0.1}
            width={100} />
        </ResponsiveTableWrapper>
      </div>
    )
  }
}

export default NutrientTable
