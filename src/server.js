import { createServer } from 'http';

const Database = new Map()

function respondJSON(data, response) {
    return response(JSON.stringify(data))
}

async function handler(request, response) {
    const { method } = request
    
    if(method === 'GET') {
        return respondJSON([...Database.values()], response)
    }

    if(method === 'POST') {
        return;
    }

    if(method === 'DELETE') {
        return;
    }
}

export default createServer(handler)