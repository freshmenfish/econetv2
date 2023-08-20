import React from 'react'
import './organizations.scss';

/* Contains the form for organizations to sign up for the platform */
const Organizations = () => {
  return (
    <section id="organizations">
      <div className="form_tile">
        <h1 className="form_title">Organization Sign-Up</h1>
        <form action="" className="organization_form">
          <input type="text" className="text_field" placeholder="Organization Name"/>
          <input type="text" className="text_field" placeholder="Address"/>
          <input type="text" className="text_field" placeholder="Scale"/>
          <input type="text" className="text_field" placeholder="# of Current Volunteers"/>
          <input type="text" className="text_field" placeholder="Tags (space separated)"/>
          <button type="submit" value="Send" className="submit_button">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Organizations
