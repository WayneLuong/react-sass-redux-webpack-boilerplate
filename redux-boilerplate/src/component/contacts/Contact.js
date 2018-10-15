import React, { Component } from 'react'

class Contact extends Component {
  render() {
      const {name, email, phone} = this.props.contact
    return (
      <div className='card'>
            <div className='card-body text-left'>
                <h5 className='card-title'>{name}</h5>
                <p className='card-text'>Email: {email}</p>
                <p className='card-text'>phone: {phone}</p>
            </div>
      </div>
    )
  }
}

export default Contact
