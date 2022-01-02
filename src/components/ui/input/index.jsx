import {FaSearch}  from "react-icons/fa";
const InputText = ({ placeholder }) => {
  return (
    <div className="m-4 h-30">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5" viewBox="0 0 20 20">
          </svg>
        </span>
        <input
          className="text-2xl placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-md 
          py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm"
          placeholder={placeholder}
          type="text"
          name="search"
        />
      </label>
    </div>
  );
};

export default InputText;
