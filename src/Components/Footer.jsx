import { Link } from "react-router-dom";
import { FaGithub, FaFacebook, FaPhoneVolume, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    const url = "https://wa.me/+8801705610615"
    const mailtoLink = 'mailto:nazmul.hussain.utchash@gmail.com'
    return (
        <footer className="footer footer-center p-10 bg-gray-900 dark:bg-gray-700 text-white rounded">
            <div className="grid grid-flow-col gap-4">
                <Link to='/about-me'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>

            <div>
                <div className="grid grid-flow-col gap-4">
                    <a className="text-2xl" onClick={() => { window.open('tel:+8801705610615') }}><FaPhoneVolume></FaPhoneVolume></a>
                    <a className="text-2xl" onClick={() => { window.open(url, '_blank') }}><FaWhatsapp></FaWhatsapp></a>
                    <a className="text-2xl" href="https://github.com/the-nazzmul" target="_blank" rel="noopener noreferrer"><FaGithub></FaGithub></a>
                    <a className="text-2xl" href="https://web.facebook.com/nazzmul.hussain.utchchash" target="_blank" rel="noopener noreferrer"><FaFacebook></FaFacebook></a>
                    <a className="text-2xl" onClick={() => { window.location.href = mailtoLink }}><HiOutlineMail></HiOutlineMail></a>
                </div>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by Nazmul Hussain</p>
            </div>
        </footer>
    );
};

export default Footer;