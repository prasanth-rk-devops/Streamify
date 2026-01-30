import { useEffect, useState } from "react";
import { getProfiles } from "../services/api";

export default function Profile() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    getProfiles().then(setProfiles);
  }, []);

  return (
    <>
      <h2>Profiles</h2>
      {profiles.map(p => (
        <div key={p.id}>{p.name}</div>
      ))}
    </>
  );
}
