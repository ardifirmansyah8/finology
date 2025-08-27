import EmptyState from "./ui/EmptyState";
import UserCard from "./UserCard";

import type { User } from "../types";

interface Props {
  users: User[];
}

const UserGrid = ({ users }: Props) => {
  if (users.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserGrid;
