// // Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props

  const {competingTeam, matchStatus, result, competingTeamLogo} = details

  //   console.log(umpire, competingTeam, competingTeamLogo, date)
  const winningClass = matchStatus === 'Won' ? 'win' : 'loss'

  return (
    <li className="match-card-container">
      <div className="match-card-box">
        <img
          className="match-card-img"
          src={competingTeamLogo}
          alt={`competing-team ${competingTeam}`}
        />
        <p className="match-card-details">{competingTeam}</p>
        <p className="match-card-details">{result}</p>
        <p className={winningClass}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
