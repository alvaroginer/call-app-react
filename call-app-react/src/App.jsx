import { useState, useEffect } from "react";
import "./App.css";
import { CallCard } from "./components/CallCard/CallCard";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("./data.json");
        if (!response.ok) {
          throw new Error("Error al cargar el JSON");
        }
        const data = await response.json();
        setUsers(data.persons);
        localStorage.setItem("users", JSON.stringify(data.persons));
      } catch (error) {
        console.error("Hubo un problema con la carga del JSON:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <section className="grid padding--lateral__24 users-grid">
        <div className="card width__100">
          {users.map((user) => {
            return <CallCard key={user.id} user={user} />;
          })}
        </div>
      </section>
    </>
  );
}

export default App;
