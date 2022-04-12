import {createSlice} from "@reduxjs/toolkit"

const initialState={data: [],allData: [], real: [], cat: [], next: 1}


const Design365 = createSlice({
    name: "365design",
    initialState,
    reducers: {
        setDesignData(state, action) {
            state.data = arrayUnique(state.data.concat(action.payload.projects))
            state.allData = arrayUnique(state.allData.concat(action.payload.allProjects))
            state.next = action.payload.nextRowsBool
        },
        updateDesignData(state, action) {
            state.real = arrayUnique(state.real.concat(action.payload))
        },
        setCat (state, action) {
            state.cat = action.payload
        },
        updateDesignLikes(state, action) {
            let prod = state.data.find(p => p.id === action.payload)
            let cat = state.cat.find(p => p.id === action.payload)
            let all = state.allData.find(p => p.id === action.payload)
            if(prod) {
                if(prod.isFavourite) {
                    prod.isFavourite = 0
                    prod.countFavourite -= 1
                }else {
                    prod.isFavourite = 1
                    prod.countFavourite += 1
                }
            }
            if(cat) {
                if(cat.isFavourite) {
                    cat.isFavourite = 0
                    cat.countFavourite -= 1
                }else {
                    cat.isFavourite = 1
                    cat.countFavourite += 1
                }
            }
            if(all) {
                if(all.isFavourite) {
                    all.isFavourite = 0
                    all.countFavourite -= 1
                }else {
                    all.isFavourite = 1
                    all.countFavourite += 1
                }
            }
        },
    }
})


export const  DesignActions = Design365.actions
export default Design365.reducer

//delete Array Dublicate
function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i].id === a[j].id)
                a.splice(j--, 1);
        }
    }
    return a;
}