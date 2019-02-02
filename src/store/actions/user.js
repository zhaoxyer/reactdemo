import * as user from '../constants/user'

export const setUser = userInf =>{
  return {
    type: user.USERINFO,
    userInf
  }
}
