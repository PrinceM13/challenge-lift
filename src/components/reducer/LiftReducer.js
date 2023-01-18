export const SET_DIRECTION = 'SET_DIRECTION';
export const ADD_WAITING_LIST = 'ADD_WAITING_LIST';
export const REMOVE_WAITING_LIST = 'REMOVE_WAITING_LIST';
export const GO_UP = 'GO_UP';
export const GO_DOWN = 'GO_DOWN';

export const INITIAL_LIFT = {
    move: 0,
    currentFloor: 1,
    floorWaitingList: []
};

let tempArr = [];

export const liftReducer = (state, action) => {
    switch (action.type) {
        case SET_DIRECTION: return { ...state, move: state.floorWaitingList[0] - state.currentFloor };
        case ADD_WAITING_LIST:
            tempArr = [...state.floorWaitingList];
            tempArr.push(action.payload);
            return { ...state, floorWaitingList: tempArr };
        case REMOVE_WAITING_LIST:
            tempArr = [...state.floorWaitingList];
            tempArr.shift();
            return { ...state, floorWaitingList: tempArr };
        case GO_UP: return {
            ...state,
            currentFloor: state.currentFloor + 1,
            move: state.move - 1
        };
        case GO_DOWN: return {
            ...state,
            currentFloor: state.currentFloor - 1,
            move: state.move + 1
        };
        default: return state;
    }

}