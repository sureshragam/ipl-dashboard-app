// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetail} = props
  const {name, teamImageUrl, id} = teamDetail
  console.log(props)
  return (
    <Link to={`/team-matches/${id}`} className="team-card-link">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
