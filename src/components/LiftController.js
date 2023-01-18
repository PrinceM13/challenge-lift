import LiftButton from "./LiftButton";

export default function LiftController() {
    const buttonArr = [1, 2, 3, 4, 5]
    return (
        <div className="d-flex gap-3 justify-content-center">
            {buttonArr.map((el, idx) => (<LiftButton key={idx}>{el}</LiftButton>))}
        </div>
    );
}