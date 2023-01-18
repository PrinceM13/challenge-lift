import { useLift } from "./context/LiftContext";

export default function LiftButton({ children }) {
    const { lift, handleButtonPress } = useLift();
    const handleButton = (e) => handleButtonPress(e.target.value);
    const isActive = lift.floorWaitingList.includes(String(children));
    const color = isActive ? 'danger' : 'light';
    return (
        <button className={`btn btn-outline-${color}`} onClick={handleButton} value={children}>{children}</button>
    );
}