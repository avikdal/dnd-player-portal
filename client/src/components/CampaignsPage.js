import React from 'react'
import { Link } from 'react-router-dom';
import CampaignCard from './CampaignCard'

export default function CampaignsPage({ campaigns }) {

  const campaignCard = campaigns.map((c) => <CampaignCard key={c.id} campaignInfo={c} />)


  return (
    <div>
        <h1>Welcome to the Campaigns Page</h1>
        <hr></hr>
        <Link to="/create-campaign">
            <button type="button" className="block" >Create Your Own Campaign</button>
        </Link>
        <hr></hr>
        <div>{campaignCard}</div>
    </div>
  )
}
