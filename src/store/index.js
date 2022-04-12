import {configureStore} from '@reduxjs/toolkit'
import linkactive from './linkactive'
import UiAvatarSlice from './UiAvatarSlice'
import Design365 from './Design365'
import MainData from './MainData'
const store = configureStore({
    reducer: {
        linkactive: linkactive,
        ui: UiAvatarSlice,
        design: Design365,
        main: MainData
    }
})
export default store
