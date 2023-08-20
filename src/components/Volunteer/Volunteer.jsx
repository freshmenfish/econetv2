import React, { useEffect, useState } from 'react'
import './volunteer.scss';
import { supabase } from "../../supabase.js";

/* Accesses the backend through supabase, which stores a PostGRE SQL database */
const Volunteer = () => {
  const [organizations, setOrganizations] = useState({});
  const [selectedValue, setSelectedValue] = useState('None');

  useEffect(() => {
    getOrganizations();
  }, []);

  async function getOrganizations() {
    const { data } = await supabase.from("organizations").select("*");
    setOrganizations(data);
  }

  const handleValueChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <section id="volunteer">
      <div>
        <div className="search_bar">
          <h2 className="filter_text">Filter by: </h2>
          <select className="dropdown" value={selectedValue} onChange={handleValueChange}>
            <option value="None">None</option>
            <option value="Local">Local</option>
            <option value="Regional">Regional</option>
            <option value="International">International</option>
          </select>
        </div>

        <div className="tiles">
          {Array.isArray(organizations) ? organizations.map(organization => 
            <a href="https://www.google.com" target="_blank">
              <div className="organization_tile" style={{display: selectedValue === organization.org_scale || selectedValue == 'None'? '':'none'}}><br/>
                <span className="organization_name">{organization.name}</span><br/>
                <span className="organization_email">{organization.email}</span><br/><br/>
                <span className="organization_description">{organization.description}</span><br/><br/>
                <span className="organization_scale">Scale: {organization.org_scale}</span><br/><br/>
                <span className="organization_tags">
                  {organization.tags.map(tag =>
                    <div>{tag} </div>
                  )}</span>
              </div>
            </a>
          ) : ''}
        </div>
      </div>
    </section>
  )
}

export default Volunteer
