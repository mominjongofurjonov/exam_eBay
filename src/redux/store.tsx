import {configureStore} from '@reduxjs/toolkit';

import mainSlice from './mainSlice';

const store = configureStore({
    reducer: {
        actions: mainSlice
    }
})

export default store