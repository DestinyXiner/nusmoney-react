//import config from '../config'
import * as Screens from './screens';

function initialState() {
    const state = { page: Screens.PAGE.WALLETS, view: [Screens.createView(Screens.VIEW.MAIN)] };
    console.log("Initial state: ", state);
    return state;
}

export default initialState;
