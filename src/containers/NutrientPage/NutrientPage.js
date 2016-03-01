import React from 'react'
import NutrientTable from '../../components/NutrientTable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { tableActions as actions } from '../../actions'

const NutrientPage = (props) => {
  return (
    <div>
      <h2> Food Nutrients List </h2>
      <NutrientTable {...props} />
    </div>
  )
}

const mapStateToProps = ({table}) => table
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NutrientPage)
