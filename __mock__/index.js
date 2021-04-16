import { allPlayers, allLeagues, player, league, deletePlayer, addPlayer, deleteLeague, addLeague } from './routes';

import {
  GET_PLAYERS,
  GET_LEAGUES,
  GET_PLAYER_BY_ID,
  GET_LEAGUE_BY_ID,
  DELETE_PLAYER,
  ADD_PLAYER,
  DELETE_LEAGUE,
  ADD_LEAGUE
} from './endpoints';

/**
 * Mock Route Configuration
 *
 * This object has a dual purpose. First, it will be used to set up routes for
 * the mock server. Second, it is consumed by the `whitelistMiddleware` to serve
 * fallback content.
 *
 * Each property on this object represents an endpoint. The key is the endpoint path.
 * The value is an object. It must have at least 2 properties:
 *   method - 'get' or 'post' configures which method the request is.
 *   json - Function which returns mock data
 *
 * an optional property:
 *   live - Is this service live? If so the live service will be used over the
 *          mock fallback in the whitelistMiddleware
 *
 * The rest of the properties will be passed as configuration to MockYeah:
 * @see https://mockyeah.js.org/API/Mock-API.html#options
 *
 * For example 'latency' is an option to specify how many milliseconds to wait
 * for the mock response to return.
 */
export const endpoints = {
  [GET_PLAYERS]: {
    json: allPlayers,
    latency: 1000,
    method: 'get'
  },
  [GET_LEAGUES]: {
    json: allLeagues,
    latency: 1000,
    method: 'get'
  },
  [GET_PLAYER_BY_ID]: {
    json: player,
    latency: 1000,
    method: 'get'
  },
  [GET_LEAGUE_BY_ID]: {
    json: league,
    latency: 1000,
    method: 'get'
  },
  [DELETE_PLAYER]: {
    json: deletePlayer,
    latency: 1000,
    method: 'delete'
  },
  [ADD_PLAYER]: {
    json: addPlayer,
    latency: 1000,
    method: 'put'
  },
  [DELETE_LEAGUE]: {
    json: deleteLeague,
    latency: 1000,
    method: 'delete'
  },
  [ADD_LEAGUE]: {
    json: addLeague,
    latency: 1000,
    method: 'put'
  }
};
