// We cannot use our webpack `Routes`alias here, as mockyeah does not understand webpack aliases
// import { compilePath } from '../routes/utils';

// ENDPOINT CONTRAINTS

export const GET_PLAYERS = '/service/player/fetchAll';

export const GET_LEAGUES = '/service/league/fetchAll';

export const GET_PLAYER_BY_ID = '/service/player/:id';

export const GET_LEAGUE_BY_ID = '/service/league/:id';

export const DELETE_PLAYER = '/service/player/delete/:id';

export const ADD_PLAYER = '/service/player/save';

export const DELETE_LEAGUE = '/service/league/delete/:id';

export const ADD_LEAGUE = '/service/league/save';
