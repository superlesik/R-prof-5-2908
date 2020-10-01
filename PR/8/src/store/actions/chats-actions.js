import { RSAA, getJSON } from 'redux-api-middleware'

// export let LOAD_CHATS = '@@chats/LOAD_CHATS'

export const START_CHATS_LOADING = '@@chats/START_CHATS_LOADING'
export const SUCCESS_CHATS_LOADING = '@@chats/SUCCESS_CHATS_LOADING'
export const ERR_CHATS_LOADING = '@@chats/ERR_CHATS_LOADING'


export const loadChats = () => ({
    [RSAA]: {
        endpoint: '/api/user/u-1',
        method: 'GET',
        headers: {'Content-Type': 'application/json' },
        types: [
            START_CHATS_LOADING,
            {
                type: SUCCESS_CHATS_LOADING,
                payload: (action, state, res) => getJSON(res)
                    .then(data => ({ chats: data.chats }))
            },
            ERR_CHATS_LOADING
        ]
    }
})