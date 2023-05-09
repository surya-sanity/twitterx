
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers } from "redux";
import UtilReducer from "./Reducers/UtilReducer";

const reducers = combineReducers({
  util: UtilReducer
});

const store = configureStore({
  reducer: reducers,

  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({ serializableCheck: false })

    return middlewares;
  },
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof reducers>;
export { store };