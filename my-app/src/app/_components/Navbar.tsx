import Link from "next/link";

const navbar = () => {
    const isLoggedIn = false;
    return(
        <nav className="p-2 hover:underline">
            <div>
                {isLoggedIn ? (<Link href="/login">Logout</Link>) : (<> <Link className="m-3" href="/">Home</Link> <Link className="m-3" href="/login">Login</Link> <Link className="m-3" href="/register">Register</Link></>)}
                
            </div>
        </nav>
);
}
export default navbar;