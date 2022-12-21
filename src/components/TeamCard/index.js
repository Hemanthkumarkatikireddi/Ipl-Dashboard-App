// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {details} = props
  const {name, id, teamImageURL} = details

  return (
    <Link className="anchor" to={`/team-matches/${id}`}>
      <li className="team-card-list">
        <div className="team-card-list-box">
          <img className="team-logos" src={teamImageURL} alt={name} />
          <p>{name}</p>
        </div>
      </li>
    </Link>
  )
}
export default TeamCard
