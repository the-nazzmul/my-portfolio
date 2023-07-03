import { Link } from 'react-router-dom';
import profile from './../../assets/IMG_6506.jpg'
import resume from './../../assets/resume/Nazmul_Hussain_resume.pdf'

const Banner = () => {
    const handleDownload = () => {
        window.open(resume)
    }
    return (
        <div className="hero min-h-[600px]">
            <div className="hero-content flex-col lg:flex-row justify-center gap-12">
                <div className="avatar">
                    <div className="w-72 rounded-3xl ring-8 ring-white ring-offset-base-100 ring-offset-2">
                        <img className='hover:scale-105 ease-linear transition-transform' src={profile} />
                    </div>
                </div>
                <div>
                    <h4 className='text-gray-500'>MERN Stack Developer</h4>
                    <h1 className="text-5xl font-bold my-4">Nazmul Hussain</h1>
                    <h2 className='max-w-md text-gray-500'>Hello! I am Nazmul Hussain. I am a MERN Stack Developer. I build robust, scalable and maintainable websites with great User Interface.</h2>
                    <div className='flex gap-4 mt-4'>
                        <a className='btn rounded-full btn-outline border-blue-500 border-2' href={resume} download="Nazmul_Hussain_resume.pdf">
                            Download Resume
                        </a>
                        <Link to='/contact' className='btn rounded-full btn-outline border-2'>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;