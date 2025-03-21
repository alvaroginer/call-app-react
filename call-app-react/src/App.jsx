import { useState, useEffect } from "react";
import { UserCard } from "./components/CallCard/UserCard";
import { calculateGeneralRating } from "./functions/calculateRating";
import { updateUser } from "./functions/updateUser";
import "./App.css";
import "./index.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data.json");
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
        {users.map((user) => {
          const newUser = calculateGeneralRating(user);
          updateUser(user.id, newUser);
          return <UserCard key={user.id} user={newUser} />;
        })}
      </section>
    </>
  );
}

export default App;
