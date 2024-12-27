import { useState } from "react";
import { List } from "./components/List/List";
import { Details } from "./components/Details/Details";
import "./App.css";

function App() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  return (
    <div className="container">
      <div className="list"> 
      <List onSelect={setSelectedUserId} />
      </div>
      <div className="details">
      <Details userId={selectedUserId} />
      </div>
    </div>
  );
};
export default App