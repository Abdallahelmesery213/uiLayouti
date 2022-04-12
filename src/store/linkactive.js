import {createSlice} from "@reduxjs/toolkit"

const initialState={type:"ui"}

const linkActive = createSlice({
    name: "linkactive",
    initialState,
    reducers: {
        setType(state, action) {
            state.type = action.payload
        }
    }
})




export const LinkActive = linkActive.actions

export default linkActive.reducer