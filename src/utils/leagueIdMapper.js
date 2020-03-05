export default function leagueIdMapper(leagueName) {
  const leagueMaps = [
    {
      league_name: 'premier',
      league_id: 148
    },
    {
      league_name: 'laliga',
      league_id: 468
    },
    {
      league_name: 'serie',
      league_id: 262
    },
    {
      league_name: 'bundes',
      league_id: 196
    },
    {
      league_name: 'legue',
      league_id: 176
    },
    {
      league_name: 'champs',
      league_id: 149
    }
  ];

  const { league_id } = leagueMaps.find(l => l.league_name === leagueName);
  return league_id;
}
