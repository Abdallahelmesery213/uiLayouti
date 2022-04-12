import {createSlice} from "@reduxjs/toolkit"

const initialState={ui: null, content: null}


const uiAvatar = createSlice({
    name: "uiavatar",
    initialState,
    reducers: {
        setData(state, action) {
            state.ui  = action.payload
        },
        setAll(state, action) {
            state.ui  = {...state.ui, allPersons: state.ui.allPersons.concat(action.payload)}
        },
        setMale(state, action) {
            state.ui  = {...state.ui, malePersons: state.ui.malePersons.concat(action.payload)}
        },
        setFemale(state, action) {
            state.ui  = {...state.ui, femalePersons: state.ui.femalePersons.concat(action.payload)}
        },
        setHeadline(state, action) {
            state.ui  = {...state.ui, headlines: state.ui.headlines.concat(action.payload)}
        },
        setParagraphs(state, action) {
            state.ui  = {...state.ui, paragraphs: state.ui.paragraphs.concat(action.payload)}
        }
    }
})




export const  avatarActions = uiAvatar.actions

export default uiAvatar.reducer
