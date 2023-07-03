import { Link } from 'react-router-dom';
import profilePic from './../../assets/IMG_6507.png'

const AboutMe = () => {
    return (
        <div className="card lg:card-side bg-gray-100 dark:bg-gray-100 shadow-xl rounded-none">
            <figure className='max-w-lg'>
                <img src={profilePic} alt="Avatar" />
            </figure>
            <div className="card-body mt-20">
                <h2 className="card-title text-4xl text-black dark:text-blak mb-4">Nazmul Hussain</h2>
                <p className='text-black dark:text-gray-900'>Hello! My name is Nazmul Hussain. I am a Junior MERN Stack Developer from Bangladesh.
                    <br />
                    <br />
                    I build robust, scalable and maintainable full-stack websites with great User Interface. To me building website is like an art. Each project I build is like a child to me and I try my best to build them to the best of standards. <br /> <br />
                    There are probably millions of web developers out there ready to serve you. But What sets me apart from them my personal commitment to each of the projects that I build. You can give me a try. Contact me to hire...
                </p>
                <div className="card-actions justify-end">
                    <Link to='/contact' className='btn rounded-full btn-outline border-2 dark:text-black'>Contact</Link>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;