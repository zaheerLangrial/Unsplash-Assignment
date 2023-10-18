import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="p-3 max-w-7xl mx-auto md:flex justify-between items-center md:py-5">
      <h1 className="text-3xl text-yellow-500 font-bold sm:mb-3 md:py-0 sm:py-3">Unsplash</h1>
      <div className="flex md:space-x-3">
        <Link to={"/mycollection"}>
          <button className="text-white md:text-xl bg-purple-800 px-4 md:py-2  py-1 rounded-lg hover:bg-purple-600 transition-colors duration-300  mx-auto block">
            My Collection
          </button>
        </Link>
        <input
          className=" focus:outline-none bg-transparent border border-yellow-500 px-2 py-1 cursor-pointer placeholder:text-black text-black rounded-md"
          placeholder="Search...."
        />
      </div>
    </nav>
  );
}

export default Nav;
