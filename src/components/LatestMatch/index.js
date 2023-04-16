// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    competingTeamLogo,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="col-1">
        <p className="latest-head">{competingTeam}</p>
        <p className="latest-head">{date}</p>
        <p>{venue}</p>
        <p className="latest-head">{result}</p>
      </div>
      <div className="col-2">
        <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      </div>
      <div className="col-3">
        <p className="latest-head">First Innings</p>
        <p>{firstInnings}</p>
        <p className="latest-head">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="latest-head">Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p className="latest-head">Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
