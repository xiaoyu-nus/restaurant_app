// import { createStore, combineReducer } from "redux";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// import rootReducer from "./reducers";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const store = createStore(
//   reducer /* preloadedState, */,
//   +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

// function saveToLocalStorage(state) {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("state", serializedState);
//   } catch (error) {
//     console.log(error);
//   }
// }

// store.substribe(() => saveToLocalStorage(store.getState()));
