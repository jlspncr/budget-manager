import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { accounts } from "../../assets/data/data.jsx";

const initialState = accounts;

const AccountPanelSlice = createSlice({
  name: "accounts",
  initialState: initialState,
  reducers: {
    addAccount(state, action){
      const {index, newAcct} = action.payload;
      const panel = state[index];
    },

    removeAccount(state, action){
      
    },

    setParamValue(state, action){

    },

    income(state, action){

    },

    expense(state, action){

    },


  }
});

export const {
  addAccount,

} = AccountPanelSlice.actions;

export default AccountPanelSlice.reducer;