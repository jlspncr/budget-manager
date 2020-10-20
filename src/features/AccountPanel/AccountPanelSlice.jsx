import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { accountPanel } from "../../assets/data/data.js";

const initialState = accountPanel;

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
})