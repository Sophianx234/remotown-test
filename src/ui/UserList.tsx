import UserCard from "./UserCard";

export type userInfo = {
  id: number 
  name: string;
  email: string
}
type userListProps = {
  users: userInfo[]
}
function UserList({users}:userListProps) {
  return (
    <div>
      {users.map((user:userInfo)=><UserCard key={user.id} user={user}/>)}
    </div>
  )
}

export default UserList
