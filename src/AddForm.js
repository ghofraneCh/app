import React from 'react'

function AddForm({ hideForm }) {
  return (
    <div className="contact-item">
      <div className="contact-item__image">AB</div>
      <div className="contact-item__content">
        <div className="contact-item__name">
          <input placeholder="Name" />
        </div>
        <div className="contact-item__number">
          <input placeholder="Phone Number" />
        </div>
      </div>
      <div className="contact-item__actions">
        <a href="##" className="contact-item__cancel-button" onClick={hideForm}>
          cancel
        </a>
        <a href="##" className="contact-item__add-button">
          save
        </a>
      </div>
    </div>
  )
}

export default AddForm
