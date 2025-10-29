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

export const getHomeBooksAPI =async()=>{
    return await commonAPI("GET",`${SERVERURL}/home-books`)
}
// all careers


// authorised API - user

// view all books
export const getAllBooksAPI =async(search,reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/all-books?search=${search}`,{},reqHeader)
}

// view single books
export const getSingleBookAPI =async(bookId,reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/books/${bookId}/view`,{},reqHeader)
}


// upload book -called by profile component

export const addBookAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVERURL}/add-book`,reqBody,reqHeader)
}

// all user upload books - called by profile
export const getAllUserBooksAPI =async(reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/user-books`,{},reqHeader)
}

// profile update
// purchased book - called by profile
export const getAllUserPurchasedBooksAPI =async(reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/user-bought-books`,{},reqHeader)
}

// remoe user  uploaded books - called by profile
export const removeUserUploadBookAPI =async(bookId,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVERURL}/user-books/${bookId}/remove`,{},reqHeader)
}

// user profile update
export const updateUserProfileAPI =async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/user-profile/edit`,reqBody,reqHeader)
}

// view selled book


// authorised API- admin

// add career
// update admin
// list books
export const listbooksAPI=async (reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/admin-all-books`,{},reqHeader)
}
// list users
export const getAllUsersAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/all-users`,{},reqHeader)
}

// approve books-called by admin-resource when approve button clicked
export const updateBookStatusAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/admin/book/approve`,reqBody,reqHeader)
}

// admin-profile-edit
// user profile update
export const updateAdminProfileAPI =async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/admin-profile/edit`,reqBody,reqHeader)
}