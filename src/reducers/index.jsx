import { combineReducers } from "redux";

import ControlPanelReducer from "../features/ControlPanel/ControlPanelSlice";
import AccountPanelReducer from "../features/AccountPanel/AccountPanelSlice";

export default combineReducers({
	controls: ControlPanelReducer,
	accounts: AccountPanelReducer,
});
