import React, { useEffect, useState } from "react";
import { users } from "../../data/users";
import UserCard from "../cards/UserCard";
import Pagination from "../teams/Pagination";
import { fetchAllUser } from "../../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const UsersCom = () => {
  const userList = useSelector((state) => state.auth.usersList);
  const [defaultUser, setDefaultUser] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUser());
  }, []);
  useEffect(() => {
    setDefaultUser(userList);
  }, [userList]);

  return (
    <div className="row">
      {userList?.map((user) => (
        <UserCard user={user} key={user?._id} />
      ))}
      <Pagination className={"crancy-pagination__v3"} />
    </div>
  );
};

export default UsersCom;
