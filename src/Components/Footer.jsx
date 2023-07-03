import { Link } from "react-router-dom";
import { FaGithub,FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-gray-900 dark:bg-gray-700 text-white rounded">
            <div className="grid grid-flow-col gap-4">
                <Link>About</Link>
                <Link>Contact</Link>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                   <a className="text-2xl" href="https://github.com/the-nazzmul" target="_blank" rel="noopener noreferrer"><FaGithub></FaGithub></a>
                   <a className="text-2xl" href="https://web.facebook.com/nazzmul.hussain.utchchash" target="_blank" rel="noopener noreferrer"><FaFacebook></FaFacebook></a>
                </div>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by Nazmul Hussain</p>
            </div>
        </footer>
    );
};

export default Footer;