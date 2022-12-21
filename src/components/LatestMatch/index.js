// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  console.log(latestMatchData)
  const {
    umpire,
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    venue,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Match</h1>
      <div className="latest-match-box">
        <div className="sub1">
          <div>
            <p className="team-name">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="font">{venue}</p>
            <p className="font">{result}</p>
          </div>
          <img
            className="latest-match-img"
            src={competingTeamLogo}
            alt={`latest-${competingTeam}`}
          />
        </div>

        <div className="sub3">
          <p className="font font-head">First Innings</p>
          <p className="font ">{firstInnings}</p>
          <p className="font font-head">Second Innings</p>
          <p className="font">{secondInnings}</p>
          <p className="font font-head">Man Of The Match</p>
          <p className="font">{manOfTheMatch}</p>
          <p className="font font-head">Umpire</p>
          <p className="font">{umpire}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
