import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getContacts} from '../../actions/contactActions'

import Contact from './Contact'

 class Contacts extends Component {
     componentDidMount(){
         this.props.getContacts();
     }

  render() {
      const {contacts} = this.props
    return (
      <div className='container text-center'>
        <h1>Contacts</h1>
        {contacts.map(contact =>(
            <Contact key={contact.id} contact={contact}/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    contacts: state.contacts.contacts
})

export default connect(mapStateToProps, {getContacts})(Contacts);
