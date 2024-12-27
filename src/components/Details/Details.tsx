import { useState, useEffect } from "react";
import { User } from "../../types";
import classes from "./details.module.css";

type DetailsProps = {
  userId: number | null;
};

export const Details = ({ userId }: DetailsProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userId) {
      return;
    }

    const fetchDetails = async () => {
      setLoading(true);
      try {
        // const response = await fetch(`${import.meta.env.VITE_HOST}/${userId}.json`);
        const response = await fetch(
          `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${userId}.json`
        );
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data: User = await response.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? (
    <div className={classes["user-info"]}>
      <div className={classes["user-img"]}>
        <img src={user.avatar} alt={`${user.name}'s avatar`} />
      </div>
      <div className={classes["user-name"]}>{user.name}</div>
      <div className={classes["user-city"]}>City: {user.details.city}</div>
      <div className={classes["user-company"]}>
        Company: {user.details.company}
      </div>
      <div className={classes["user-position"]}>
        Position: {user.details.position}
      </div>
    </div>
  ) : (
    <div></div>
  );
};
