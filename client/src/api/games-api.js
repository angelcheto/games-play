import * as request from './requester'

const BASE_URL = 'http://localhost:5173/jsonstore/games'

export const getALL = async () => request.get(BASE_URL);