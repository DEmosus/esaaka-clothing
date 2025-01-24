import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const middleWares = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }).concat(
    import.meta.MODE !== "production" ? [logger] : []
  );

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares
})

export const persistor = persistStore(store)