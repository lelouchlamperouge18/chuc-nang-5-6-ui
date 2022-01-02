import { FaUserFriends, FaDumbbell } from "react-icons/fa";

const ClassItem = ({ classname, exercises, members, icon, dateCreate }) => {
  return (
    <div className="w-fit p-4 m-4 justify-center items-center bg-white shadow-xl rounded-2xl overflow-hidden relative">
      <div className="flex items-center px-4">
        <img className="w-20 h-20" src={icon} alt="" />
        <p className="text-3xl px-4 font-bold">{classname}</p>
      </div>
        <div className="flex m-4">
          <div className="w-1/2 flex items-center mx-4">
            <FaDumbbell className="h-10 w-10 mr-4" />
            <p className="text-2xl pr-2 font-medium">{exercises}</p>
            <p className="text-2xl font-medium">exercises</p>
          </div>
          <div className="flex w-1/2 items-center">
            <FaUserFriends className="h-10 w-10 mr-4"/>
            <p className="text-2xl pr-2 font-medium">{members}</p>
            <p className="text-2xl font-medium">members</p>
          </div>
      </div>
      <div className="flex ">
        <p className="text-2xl  pr-2 font-light">Create at </p>
        <p className="text-2xl font-light">{dateCreate}</p>
      </div>
    </div>
  );
};

export default ClassItem;
