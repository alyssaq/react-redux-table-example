import './NutrientPage.styl'
import React from 'react'
import NutrientTable from '../../components/NutrientTable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { tableActions as actions } from '../../actions'

class NutrientPage extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h2> Food Nutrients List </h2>
        <NutrientTable {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = ({table}) => table
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NutrientPage)
