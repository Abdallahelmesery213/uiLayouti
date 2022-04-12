import {createSlice} from "@reduxjs/toolkit"

const initialState={category: null}


const mainData = createSlice({
    name: "maindata",
    initialState,
    reducers: {
        setData(state, action) {
            state.category = action.payload.projectcats
        }
    }
})




export const MainDataActions = mainData.actions

export default mainData.reducer