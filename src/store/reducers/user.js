export const userInfo = (state, action)=>{
  const defaultData = JSON.parse(sessionStorage.getItem('userInfo')||'{}')
  return {
    ...defaultData,
    ...action.userInf
  }
}
