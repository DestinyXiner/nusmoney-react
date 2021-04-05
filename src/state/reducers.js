//import config from '../config'
import * as Actions from './actions'
import initialState from './initialState'
import * as Screens from './screens';

function reducers(state = initialState(), action) {
    console.log("Reduce event: ", JSON.stringify(action));//...remove after debug
    const newState = Object.assign({}, state, { lastEvent: action.type });
    switch (action.type) {
        case Actions.SELECT_PAGE:
            return Object.assign(newState, { page: action.page, view: [Screens.createView(Screens.VIEW.MAIN)] });
        case Actions.PUSH_VIEW: {
            let view = newState.view;
            view.push(Screens.createView(action.view, action.arg || null));
            return newState;
        }
        case Actions.POP_VIEW: {
            let view = newState.view;
            if (view.length > action.count) {
                view.length = view.length - action.count;
                return newState;
            }
            console.log("Error: can't pop view from:", JSON.stringify(state), "action: ", JSON.stringify(action));
            return state;
        }
        default:
            return newState;
    }
}

export default reducers
