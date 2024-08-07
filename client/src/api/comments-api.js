import requester from "./requester"

const BASE_URL = 'http://localhost:3030/jsonstore/games/';
const buildUrl = (gameId) => `${BASE_URL}/${gameId}/comments`;
const create = async (gameId, username, text) =>  requester.post(buildUrl(gameId), {username, text});

const getAll = async (getId) => {
    const result = await requester.get(buildUrl(gamesId));
    const comments = Object.values(result);
    return comments;
}

const commentsAPI =  {
    create,
    getAll,
}

export default commentsAPI;