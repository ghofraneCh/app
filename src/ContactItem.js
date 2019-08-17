import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function nameToInitials(name) {
  // name = "foulen ben foulen ben allen"
  return name
    .split(' ') // ["foulen", "ben", "foulen", "ben", "allen"]
    .map(el => el[0]) // ["f", "b", "f", "b", "a"]
    .join('') // "fbfba"
    .slice(0, 2) // "fb"
    .toUpperCase() // "FB"
}

function ContactItem({ contact, deleteContact }) {
  return (
    <div className="contact-item">
      <div className="contact-item__image">{nameToInitials(contact.name)}</div>
      <div className="contact-item__content">
        <div className="contact-item__name">{contact.name}</div>
        <div className="contact-item__number">{contact.number}</div>
      </div>
      <a
        href="##"
        className="contact-item__remove-button"
        onClick={function() {
          deleteContact(contact.id)
        }}
      >
        <FontAwesomeIcon size="lg" icon={faTimes} color="#f16e6e" />
      </a>
    </div>
  )
}

export default ContactItem
