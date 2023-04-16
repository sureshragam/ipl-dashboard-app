// Write your code here
import './index.css'

const MatchCard = props => {
  const {logo, team, status, result} = props
  return (
    <li className="match-card">
      <div className="logo-container">
        <img src={logo} alt={`competing team ${team}`} />
      </div>
      <p className="team-heading">{team}</p>
      <p className="result">{result}</p>
      <p className={status === 'Won' ? 'won' : 'loss'}>{status}</p>
    </li>
  )
}

export default MatchCard
