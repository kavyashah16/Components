import Link from "next/link";

const Header = () => {
  return (
    <>
      <div class="flex flex-col">
      <header className="flex items-center justify-between ">
        <Link className="text-primary font-semibold text-3xl uppercase" href={"/"}>Flourish</Link>
        <nav className="flex items-center gap-4 uppercase ">
          <Link class="hover:text-primary " href={""}>Home</Link>
          <Link class="hover:text-primary" href={""}>Menu</Link>
          <Link class="hover:text-primary" href={""}>About</Link>
          <Link class="hover:text-primary " href={""}>Contact Us</Link>
          <input type="text" placeholder="Search" class=" px-3 py-1 leading-normal rounded-full border text-gray-700 focus:outline-none focus:shadow-outline"></input>
            </nav>
      </header>
      <form action="">
        <h1 className=" text-center text-primary font-bold text-3xl ml-10 mt-40 mr-10" href={""}>LOGIN</h1>
        <div className="input-box ml-72 mt-5 mr-72">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="hover:shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-normal focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
        </div>
        <div className="input-box ml-72 mt-3 mr-72">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="hover:shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-normal focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Password"></input>
        </div>
        <div className="flex item-center justify-between ml-72 mt-5 mr-72">
            <label><input type="checkbox"/>Remember me</label>
            <a href={"#"} class='hover:text-blue-500'>Forgot Password</a>
        </div>
        <div className=" py-1 ml-72 mt-5 mr-72 text-white rounded bg-sky-500 border hover:bg-sky-700 text-center hover:text-white hover:shadow-lg ">
        <button type="submit">Login</button>
        </div>
        <div className="flex item-center justify-between ml-72 mt-5 mr-72">
            <p>Don't have an account?</p>
            <a href={"#"} class='hover:text-blue-500 underline' >Register</a>
        </div>

        </form>
        </div>
    </>
  );
};


export default Header;