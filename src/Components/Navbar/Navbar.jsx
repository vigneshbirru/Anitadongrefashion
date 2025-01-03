import logo from "../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav>
            <div className="flex items-center justify-between mx-32 ">
                <div className="logo">
                <img src={logo} alt="Logo" />
                </div>
                <div className="icons flex text-2xl space-x-10 ">
                <IoSearch />
                <IoLogoWhatsapp />
                <FaUser />
                <FaShoppingBag />
                <FaHeart />
                </div>
            </div>
            <div className="  mx-28 px-5">
                <ul className="flex  items-center space-x-20  justify-center uppercase ">
                    <li>
                        <a className="" href="#"> Women</a>
                    </li>
                    <li>
                        <a href="#">Men</a>
                    </li>
                    <li>
                        <a href="#">Wedding</a>
                    </li>
                    <li>
                        <a href="#">Jewellry</a>
                    </li>
                    <li>
                        <a href="#">Accessories</a>
                    </li>
                    <li>
                        <a href="#">Gifting</a>
                    </li>
                    <li>
                        <a href="#">Sale</a>
                    </li>
                    <li>
                        <a href="#">about</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
