import ReactImageGallery from "react-image-gallery";
import img1 from './../../../assets/Project2/img1.jpeg'
import img2 from './../../../assets/Project2/img2.jpg'
import img3 from './../../../assets/Project2/img3.jpg'
import img4 from './../../../assets/Project2/img4.jpg'
import img5 from './../../../assets/Project2/img5.jpg'
import { BsDot } from "react-icons/bs";


const Second = () => {
    const images = [
        {
            original: img1,
        },
        {
            original: img2,
        },
        {
            original: img3,
        },
        {
            original: img4,
        },
        {
            original: img5,
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
                    Play KiD
                </h2>
                <div>
                    <p>It is a basic online shopping platform for toys. Registered users can post toys.</p>
                    <p className="font-bold dark:text-white my-4">Main Features:</p>
                    <ul className="ms-4">
                        <li><BsDot className='inline' />Single Page application</li>
                        <li><BsDot className='inline' />Secure login and registration</li>
                        <li><BsDot className='inline' />Filter by category</li>
                    </ul>
                    <p className="font-bold dark:text-white my-4">Technologies:</p>
                    <ul className="ms-4">
                        <li><BsDot className='inline' />React.js</li>
                        <li><BsDot className='inline' />JavaScript</li>
                        <li><BsDot className='inline' />Firebase</li>
                        <li><BsDot className='inline' />Express.js</li>
                        <li><BsDot className='inline' />MongoDB</li>
                        <li><BsDot className='inline' />Tailwind CSS</li>
                    </ul>
                </div>
                <div className="card-actions mt-auto">
                    <a className='btn btn-outline btn-xs' href="https://github.com/the-nazzmul/play-kid-client" target='_blank' rel="noopener noreferrer">Client Code</a>
                    <a className='btn btn-outline btn-xs' href="https://github.com/the-nazzmul/play-kid-server" target='_blank' rel="noopener noreferrer">Server Code</a>
                    <a className='btn btn-outline btn-xs' href="https://play-kid-54044.web.app/" target='_blank' rel="noopener noreferrer">Live Site</a>
                </div>
            </div>
        </div>
    );
};

export default Second;