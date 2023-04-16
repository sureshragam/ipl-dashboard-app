// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    banner: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getTeamMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const teamMatchesDetail = await response.json()
    const teamBanner = teamMatchesDetail.team_banner_url
    const latestMatchDetails = teamMatchesDetail.latest_match_details
    const recentMatches = teamMatchesDetail.recent_matches
    const updatedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    const updatedRecentMatches = recentMatches.map(eachRecent => ({
      competingTeam: eachRecent.competing_team,
      competingTeamLogo: eachRecent.competing_team_logo,
      result: eachRecent.result,
      matchStatus: eachRecent.match_status,
      id: eachRecent.id,
    }))
    this.setState({
      banner: teamBanner,
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatches,
      isLoading: false,
    })
  }

  render() {
    const {banner, latestMatchDetails, recentMatches, isLoading} = this.state
    return (
      <div className="team-matches-container">
        {isLoading ? (
          <div className="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div>
            <div className="banner-container">
              <img src={banner} alt="team banner" />
            </div>
            <h1>Latest Matches</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul>
              {recentMatches.map(eachMatch => {
                const {
                  id,
                  competingTeam,
                  competingTeamLogo,
                  matchStatus,
                  result,
                } = eachMatch
                return (
                  <MatchCard
                    key={id}
                    id={id}
                    team={competingTeam}
                    logo={competingTeamLogo}
                    status={matchStatus}
                    result={result}
                  />
                )
              })}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
