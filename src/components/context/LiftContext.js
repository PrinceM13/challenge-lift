import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { ADD_WAITING_LIST, GO_DOWN, GO_UP, INITIAL_LIFT, liftReducer, REMOVE_WAITING_LIST, SET_DIRECTION } from "../reducer/LiftReducer";
import { timeout } from "../utils/util";

const LiftContext = createContext();

export default function LiftContextProvider({ children }) {
    // useState
    const [isMoving, setIsMoving] = useState(false);

    // useReducer
    const [lift, dispatchLift] = useReducer(liftReducer, INITIAL_LIFT);

    // manage moving -----------------------------------------------------------------------------------------
    const handleButtonPress = (button) => {
        setIsMoving(true);
        dispatchLift({ type: ADD_WAITING_LIST, payload: button });
    }

    // move to target floor
    useEffect(() => { isMoving && moveFloor() }, [isMoving, lift.move])

    // change target to next floor in waiting list
    useEffect(() => { isMoving && dispatchLift({ type: SET_DIRECTION }) }, [isMoving, lift.floorWaitingList.length])

    const moveFloor = async () => {
        await timeout();
        if (lift.move > 0) dispatchLift({ type: GO_UP });
        else if (lift.move < 0) dispatchLift({ type: GO_DOWN });

        // reach target floor, so remove from waiting list
        if (lift.currentFloor == lift.floorWaitingList[0]) dispatchLift({ type: REMOVE_WAITING_LIST });
    };
    // -------------------------------------------------------------------------------------------------------

    return (
        <LiftContext.Provider value={{ lift, handleButtonPress }}>
            {children}
        </LiftContext.Provider>
    );
}

export function useLift() {
    return useContext(LiftContext);
} 