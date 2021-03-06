import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './lines.css'

export default class Lines extends Component {
  static defaultProps = {
    color: '#FF4601',
    size: 100
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
  }

  render () {
    const style = {
      background: this.props.color,
      margin: this.props.size / 15,
      height: this.props.size,
      width: this.props.size / 4
    }
    return (
      <div className='PreLoading-Lines'>
        <span style={style} className='Lines-shape' />
        <span style={style} className='Lines-shape' />
        <span style={style} className='Lines-shape' />
        <span style={style} className='Lines-shape' />
      </div>
    )
  }
}
