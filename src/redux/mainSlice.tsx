import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../types'

const initialState = {
    data:  JSON.parse(localStorage.getItem("data") || '{}') || null,
    token: localStorage.getItem("token") || null,
    likes: JSON.parse(localStorage.getItem('likes') || '[]' ) || [],
    stored: JSON.parse(localStorage.getItem('stored') || '[]' ) || [],
    user: localStorage.getItem("user") || null
}

const mainSlice = createSlice({
    name: 'actions',
    initialState,
    reducers: {
        plusLike: (state, action) => {
            state.likes.push(action.payload)
            localStorage.setItem('likes', JSON.stringify(state.likes))
        },
        deleteLike: (state, action) => {
            state.likes = state.likes.filter((product : Product) => product.id !== action.payload.id)
            localStorage.setItem('likes', JSON.stringify(state.likes.filter((product : Product) => product.id !== action.payload.id)))
        },
        addItem: (state, action) => {
            state.stored.push(action.payload)
            localStorage.setItem('stored', JSON.stringify(state.stored))
        },
        deleteItem: (state, action) => {
            state.stored = state.stored.filter((product : Product) => product.id !== action.payload.id)
            localStorage.setItem('stored', JSON.stringify(state.stored.filter((product : Product) => product.id !== action.payload.id)))
        },
        register: (state, action) => {
            state.data = action.payload
            localStorage.setItem("data", JSON.stringify(action.payload))
         },
         login: (state, action) => {
            state.token = action.payload.access_token;
            localStorage.setItem("token", action.payload.access_token)
            if(state.token){
            window.location.replace("/admin")
            }
        },
        getUserProfile: (state, action) => {
            const {password, ...user} = action.payload
            state.user = user
            localStorage.setItem("user", JSON.stringify(user))
          }
    }
})

export const { plusLike, deleteLike, addItem, deleteItem, register, login, getUserProfile} = mainSlice.actions
const actionsReducer = mainSlice.reducer

export default actionsReducer 