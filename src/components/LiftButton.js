import { useLift } from "./context/LiftContext";

export default function LiftButton({ children }) {
    const { setCurrentButton } = useLift();
    const handleButton = (e) => {
        // console.log(e.target.value);
        setCurrentButton(e.target.value);
    }
    return (
        <button className="btn btn-outline-light" onClick={handleButton} value={children}>{children}</button>
    );
}