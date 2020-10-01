export let SET_PROFILE = '@@profile/SET';

export let setProfile = (login) => ({
    type: SET_PROFILE,
    login,
})
