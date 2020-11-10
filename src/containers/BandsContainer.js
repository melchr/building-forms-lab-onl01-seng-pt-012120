import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  addBand = band => {
    this.props.dispatch({type: 'ADD_BAND', band})
  }

  generateBands = () => this.props.bands.map((band, idx) => <li key={idx}>{band.name}</li>)
  render() {
    return(
      <div>
        <BandInput addBand={this.addBand} />
        <ul> Band List:
          {this.generateBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {bands: state.bands}
}


export default connect(mapStateToProps)(BandsContainer) 
