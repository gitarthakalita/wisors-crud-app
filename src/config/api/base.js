const BASE_API = "http://localhost:8080" // 

const USER_URL = {
    "create" : `${BASE_API}/user/registration/create`,
    "update" : `${BASE_API}/user/registration/update/phone`,
    "delete" : `${BASE_API}/user/registration/delete/phone`,
    "search" : `${BASE_API}/user/phone`
}

export {
  BASE_API,
  USER_URL ,

};
