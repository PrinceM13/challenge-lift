import { createContext, useContext, useEffect, useState } from "react";
import { timeout } from "../utils/util";

const LiftContext = createContext();

export default function LiftContextProvider({ children }) {
    const [currentFloor, setCurrentFloor] = useState(1);
    const [currentButton, setCurrentButton] = useState(1);

    const moveFloor = async () => {
        if (currentButton > currentFloor) { // go up
            await timeout();
            setCurrentFloor(currentFloor + 1);
        } else if (currentButton < currentFloor) { // go down
            await timeout();
            setCurrentFloor(currentFloor - 1);
        }
    }

    useEffect(() => {
        if (currentFloor !== currentButton) {
            moveFloor();
        }
    }, [currentButton, currentFloor])

    return (
        <LiftContext.Provider value={{ currentFloor, setCurrentButton }}>
            {children}
        </LiftContext.Provider>
    );
}

export function useLift() {
    return useContext(LiftContext);
} 