import { useState } from "react";
import Login from "./components/Login";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <Hero />
      <Cards />
    </>
  );
}