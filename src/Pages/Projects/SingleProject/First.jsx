import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import image1 from './../../../assets/Project1/img1.jpg'
import image2 from './../../../assets/Project1/img2.jpg'
import image3 from './../../../assets/Project1/img3.jpg'
import image4 from './../../../assets/Project1/img4.jpeg'
import { BsDot } from "react-icons/bs";


const First = () => {
    const images = [
        {
            original: image1,
        },
        {
            original: image2,
        },
        {
            original: image3,
        },
        {
            original: image4,
        },
    ];

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <ReactImageGallery
                    items={images}
                    autoPlay
                    slideInterval={1000}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showNav={false}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold dark:text-white mb-4">
                    The Mediterranean Fork
                </h2>
                <div>
                    <p>This is a single-page website to showcase recipes for Mediterranean dishes.</p>
                    <p className='font-bold dark:text-white my-4'>Main Features:</p>
                    <ul className='ms-4'>
                        <li><BsDot className='inline' />Single-page application.</li>
                        <li><BsDot className='inline' />Built with react router</li>
                        <li><BsDot className='inline' />Secure login and registration</li>
                    </ul>
                    <p className='font-bold dark:text-white my-4'>Technologies:</p>
                    <ul className='ms-4'>
                        <li><BsDot className='inline' />React.js</li>
                        <li><BsDot className='inline' />JavaScript</li>
                        <li><BsDot className='inline' />Firebase</li>
                        <li><BsDot className='inline' />Express.js</li>
                        <li><BsDot className='inline' />Tailwind CSS</li>
                        <li><BsDot className='inline' />DaisyUI</li>
                    </ul>
                </div>
                <div className="card-actions mt-auto">
                    <a className='btn btn-outline btn-xs' href="https://github.com/the-nazzmul/mediterranean-fork-clilent" target='_blank' rel="noopener noreferrer">Client Code</a>
                    <a className='btn btn-outline btn-xs' href="https://github.com/the-nazzmul/mediterranean-fork-server" target='_blank' rel="noopener noreferrer">Server Code</a>
                    <a className='btn btn-outline btn-xs' href="https://the-mediterranean-fork.web.app/" target='_blank' rel="noopener noreferrer">Live Site</a>
                </div>
            </div>
        </div>
    );
};

export default First;