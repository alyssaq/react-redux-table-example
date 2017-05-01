import React from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'lodash'
import { Table } from 'fixed-data-table'
import './ResponsiveTableWrapper.styl'

// Handles all <Table> to make it responsive
class ResponsiveTableWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tableWidth: 800,
      tableHeight: 600
    }
  }

  handleResize () {
    const padding = this.props.padding
    const widthOffset = window.innerWidth < 680
      ? padding.leftRight / 2 : padding.leftRight

    this.setState({
      tableWidth: window.innerWidth - widthOffset,
      tableHeight: window.innerHeight - padding.topBottom
    })
  }

  _attachResizeEvent (func) {
    const win = window

    if (win.addEventListener) {
      win.addEventListener('resize', func, false)
    } else if (win.attachEvent) {
      win.attachEvent('resize', func)
    } else {
      win.onresize = func
    }
  }

  componentDidMount () {
    this.handleResize()
    this.handleResize = debounce(
      this.handleResize,
      this.props.refreshRate
    ).bind(this)
    this._attachResizeEvent(this.handleResize)
  }

  componentWillUnmount () {
    const win = window

    if (win.detachEventListener) {
      win.detachEventListener('resize', this.handleResize, false)
    } else if (win.detachEvent) {
      win.detachEvent('resize', this.handleResize)
    } else {
      win.onresize = null
    }
  }

  render () {
    return <Table
      width={this.state.tableWidth}
      height={this.state.tableHeight}
      {...this.props} />
  }
}

ResponsiveTableWrapper.propTypes = {
  padding: PropTypes.object,
  refreshRate: PropTypes.number
}

ResponsiveTableWrapper.defaultProps = {
  refreshRate: 200, // ms
  padding: {topBottom: 210, leftRight: 80}
}

export default ResponsiveTableWrapper
