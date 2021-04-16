export const TeamNames = [
  '',
  'Arizona Diamondbacks',
  'Atlanta Braves',
  'Baltimore Orioles',
  'Boston Red Sox',
  'Chicago White Sox',
  'Chicago Cubs',
  'Cincinnati Reds',
  'Cleveland Indians',
  'Colorado Rockies',
  'Detroit Tigers',
  'Houston Astros',
  'Kansas City Royals',
  'Los Angeles Angels',
  'Los Angeles Dodgers',
  'Miami Marlins',
  'Milwaukee Brewers',
  'Minnesota Twins',
  'New Jersey Jackals',
  'New York Yankees',
  'New York Mets',
  'Oakland Athletics',
  'Philadelphia Phillies',
  'Pittsburgh Pirates',
  'San Diego Padres',
  'San Francisco Giants',
  'Seattle Mariners',
  'St. Louis Cardinals',
  'Tampa Bay Rays',
  'Texas Rangers',
  'Toronto Blue Jays',
  'Washington Nationals'
];

export const ValidationMessages = {
  username: [
    { type: 'required', message: 'Username is required.' },
    { type: 'minlength', message: 'Must be more than 4 characters.' }
  ],
  firstName: [{ type: 'required', message: 'First name is required.' }],
  lastName: [{ type: 'required', message: 'Last name is required.' }],
  email: [
    { type: 'required', message: 'Email is required.' },
    { type: 'email', message: 'Not a valid email address.' }
  ],
  /* FOR LEAGUES */
  leagueName: [
    { type: 'required', message: 'League Name is required.' },
    { type: 'minlength', message: 'Must be more than 4 characters.' }
  ],
  alias: [
    { type: 'required', message: 'Alias is required.' },
    { type: 'minlength', message: 'Must be more than 4 characters.' }
  ]
};
