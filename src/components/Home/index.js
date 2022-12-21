// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, teams: []}

  componentDidMount = () => {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamsData = await response.json()

    const updateTeam = teamsData.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageURL: each.team_image_url,
    }))

    this.setState({teams: updateTeam, isLoading: false})
  }

  getTeamsData = () => {
    const {teams} = this.state
    return (
      <ul className="teams-list">
        {teams.map(each => (
          <TeamCard details={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-container">
        <div className="home-content">
          <div className="logo-container">
            <img
              className="ipl-logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1 className="home-heading">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            <div>
              <Loader type="Oval" color="#ffff" height={50} width={50} />
            </div>
          ) : (
            this.getTeamsData()
          )}
        </div>
      </div>
    )
  }
}

export default Home
