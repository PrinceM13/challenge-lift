import { useLift } from "./context/LiftContext";

export default function LiftDisplay() {
    const {currentFloor} = useLift();
    return (
        <div className="d-flex justify-content-center">
            <h1>{currentFloor}</h1>
        </div>
    );
}