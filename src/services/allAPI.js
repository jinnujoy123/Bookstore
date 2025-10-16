// guest user

import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

// register API - called by Auth component when register btn clicked
// content type : "application/json (no headers passed)"
export const registerAPI = async(reqBody)=>{
return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}
// login API
export const loginAPI = async(reqBody)=>{
return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

// google login  API

export const googleLoginAPI = async(reqBody)=>{
return await commonAPI("POST",`${SERVERURL}/google-login`,reqBody)
}
// home page book API
// all careers


// authorised API - user

// view all books
// view single books
// upload book
// profile update
// purchased book
// view selled book
// approve books




// authorised API- admin

// add career
// update admin
// list books
// list users
// approve books