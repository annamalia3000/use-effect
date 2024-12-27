import { useState, useEffect } from "react";
import { UserListItem } from "../../types";
import classes from './list.module.css';

type ListProps = {
  onSelect: (userId: number) => void;
};

export function List({ onSelect }: ListProps) {
  const [users, setUsers] = useState<UserListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // const response = await fetch(`${import.meta.env.VITE_HOST}/users.json`);
        const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data: UserListItem[] = await response.json();
        console.log(data)
        setUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <ul className={classes['users-list']}>
      {users.map((user) => (
        <li 
        className={classes['user-item']}
        key={user.id} 
        onClick={() => onSelect(user.id)}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}
