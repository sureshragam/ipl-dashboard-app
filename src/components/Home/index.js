// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamDetails: [], isLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const response = await fetch(url)
    const teamDetailsObject = await response.json()
    const teamDetails = teamDetailsObject.teams
    const updatedTeamDetails = teamDetails.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamDetails: updatedTeamDetails, isLoading: false})
    console.log(teamDetails)
    console.log(updatedTeamDetails)
  }

  render() {
    const {teamDetails, isLoading} = this.state
    return (
      <div className="main-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="main-heading">IPL DASHBOARD</h1>
        </div>
        {isLoading ? (
          <div className="loader" testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <ul className="team-details-ul">
            {teamDetails.map(eachTeam => (
              <TeamCard key={eachTeam.id} teamDetail={eachTeam} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
