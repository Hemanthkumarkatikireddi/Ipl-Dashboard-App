// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {matchObject: [], isLoading: true, banner: ''}

  componentDidMount = () => {
    this.getTeamsPage()
  }

  getLatestMach = data => ({
    id: data.id,
    umpire: data.umpires,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    result: data.result,
    secondInnings: data.second_innings,
    venue: data.venue,
  })

  getTeamsPage = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`${'https://apis.ccbp.in/ipl/'}${id}`)
    const data = await response.json()

    const updateLatestMatch = {
      latestMatch: this.getLatestMach(data.latest_match_details),
      recentMatch: data.recent_matches.map(each => this.getLatestMach(each)),
    }

    this.setState({
      matchObject: updateLatestMatch,
      banner: data.team_banner_url,
      isLoading: false,
    })
  }

  getLatestMatches = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const {matchObject, banner} = this.state
    const {latestMatch, recentMatch} = matchObject

    return (
      <div className="team-matches">
        <img className="banner" src={banner} alt="team banner" />
        <div className="latest-match-list">
          <LatestMatch latestMatchData={latestMatch} />
        </div>
        <ul className="match-card-list">
          {recentMatch.map(each => (
            <MatchCard key={each.id} details={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    // const {
    //     umpire,
    //   competingTeam,
    //   competingTeamLogo,
    //   date,
    //   firstInnings,
    //     manOfTheMatch,
    //     matchStatus,
    //   result,
    //     secondInnings,
    //   venue,
    // } = latestMatch

    return (
      <div className="team-match-container">
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffff" height={50} width={50} />
          </div>
        ) : (
          this.getLatestMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
