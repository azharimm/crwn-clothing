import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import UserReducer from '../redux/user/user.reducer'
import CartReducer from '../redux/cart/cart.reducer'
import DirectoryReducer from '../redux/directory/directory.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: DirectoryReducer
})

export default persistReducer(persistConfig, rootReducer)

