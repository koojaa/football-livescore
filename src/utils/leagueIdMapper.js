import { leagueTypes } from '../components/MatchFinder/League/LeagueList';

export default function leagueIdMapper(leagueName) {
  const leagueMaps = [...leagueTypes];
  const { league_id } = leagueMaps.find(l => l.league === leagueName);
  return league_id;
}
