import { useLift } from "./context/LiftContext";

export default function LiftDisplay() {
    const { lift } = useLift();
    return (
        <div className="d-flex justify-content-center">
            <h1>{lift.currentFloor}</h1>
        </div>
    );
}