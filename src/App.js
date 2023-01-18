import LiftContextProvider from "./components/context/LiftContext";
import LiftController from "./components/LiftController";
import LiftDisplay from "./components/LiftDisplay";

function App() {
  return (
    <LiftContextProvider>
      <div className="container" style={{ maxWidth: 600 }}>
        <div className="d-flex flex-column gap-5 justify-content-center">
          <LiftDisplay />
          <LiftController />
        </div>
      </div>
    </LiftContextProvider>
  );
}

export default App;
