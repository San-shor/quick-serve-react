import "./App.css";
import CreateWorker from "./components/worker/createWorker";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-4">
      <div className="w-full max-w-4xl mx-auto">
        <CreateWorker />
      </div>
    </div>
  );
}

export default App;
