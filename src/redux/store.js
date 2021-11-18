import * as redux from "redux";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { persistReducer, persistStore } from "redux-persist";
import { searchReducer } from "./searchReducer";

const persistConfig = {
  key: "root",
  storage,
  tranforms: [
    encryptTransform({
      secretKey: "muthu@123",
      onError: function (error) {
        console.log(error);
      },
    }),
  ],
};

const enhancers = redux.compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootReducer = redux.combineReducers({
  user: userReducer,
  cart: cartReducer,
  search: searchReducer,
});

//persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = redux.createStore(persistedReducer, enhancers);

export let persistor = persistStore(store);
