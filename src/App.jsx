import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { deleteUser, fetchUser, fetchUsers, newUser, updateUser } from "./rtkit/slice/userSlice";

function App() {
  const dispatch = useDispatch();
  const { users, user } = useSelector((state) => {
    return state.users;
  });
  console.log(users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      {users && (
        <div>
          {users?.map((user) => (
            <div key={user?.id}>{user?.name}</div>
          ))}
        </div>
      )}
      <button onClick={() => dispatch(deleteUser(3))}>Delete User</button>
      <button onClick={() => dispatch(updateUser(4))}>Update User</button>
      <button onClick={() => dispatch(fetchUser(5))}>Fetch User</button>
      <button onClick={() => dispatch(newUser(5))}>New User</button>
      {user && <div>{user.name}</div>}
    </>
  );
}

export default App;
