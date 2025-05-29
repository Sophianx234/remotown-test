import type { userInfo } from "./UserList";

type userCardProps = {
  user: userInfo;
};
function UserCard({ user }: userCardProps) {
  return (
    <div className="user-card" >
      <div className="user-container">

      <div className="title">{user.name}</div>
      <div className="email">{user.email}</div>
      <button className="btn-primary" onClick={()=>alert(user.name)}>show info</button>
      </div>
    </div>
  );
}

export default UserCard;
