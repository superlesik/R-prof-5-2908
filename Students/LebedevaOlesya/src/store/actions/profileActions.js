export const ADD_PROFILE = '@@profile/ADD_PROFILE';

export const addProfile = (name, gender, age, interests) => ({
   type: ADD_PROFILE,
   name,
   gender,
   age,
   interests,
});