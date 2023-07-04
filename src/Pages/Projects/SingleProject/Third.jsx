import ReactImageGallery from "react-image-gallery";
import img1 from './../../../assets/Project3/img1.jpeg'
import img2 from './../../../assets/Project3/img2.jpg'
import img3 from './../../../assets/Project3/img3.jpg'
import img4 from './../../../assets/Project3/img4.jpg'
import img5 from './../../../assets/Project3/img5.jpg'
import img6 from './../../../assets/Project3/img6.jpg'
import img7 from './../../../assets/Project3/img7.jpg'
import img8 from './../../../assets/Project3/img8.jpg'
import img9 from './../../../assets/Project3/img9.jpg'
import img10 from './../../../assets/Project3/img10.jpg'
import img11 from './../../../assets/Project3/img11.jpg'
import { BsDot } from "react-icons/bs";


const Third = () => {
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
        {
            original: img6,
        },
        {
            original: img7,
        },
        {
            original: img8,
        },
        {
            original: img9,
        },
        {
            original: img10,
        },
        {
            original: img11,
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
                    The Taste Pot
                </h2>
                <div>
                    <p>It is an online based culinary school. Registered students can enroll to their desired classes. Instructors can add classes and edit them. Admin controls users and classes.</p>
                    <p className="font-bold dark:text-white my-4">Main Features:</p>
                    <ul className="ms-4">
                        <li><BsDot className='inline' />Single Page application</li>
                        <li><BsDot className='inline' />Secure login and registration</li>
                        <li><BsDot className='inline' />Secure user dashboard</li>
                        <li><BsDot className='inline' />Payment system implemented</li>
                    </ul>
                    <p className="font-bold dark:text-white my-4">Technologies:</p>
                    <ul className="ms-4">
                        <li><BsDot className='inline' />React.js</li>
                        <li><BsDot className='inline' />JavaScript</li>
                        <li><BsDot className='inline' />Firebase</li>
                        <li><BsDot className='inline' />Express.js</li>
                        <li><BsDot className='inline' />MongoDB</li>
                        <li><BsDot className='inline' />JWT</li>
                        <li><BsDot className='inline' />React Query</li>
                        <li><BsDot className='inline' />Stripe</li>
                        <li><BsDot className='inline' />Tailwind CSS</li>
                    </ul>
                </div>
                <div className="card-actions mt-8">
                    <a className='btn btn-outline btn-xs' href="https://github.com/the-nazzmul/the-taste-pot-client" target='_blank' rel="noopener noreferrer">Client Code</a>
                    <a className='btn btn-outline btn-xs' href="https://github.com/the-nazzmul/the-taste-pot-server" target='_blank' rel="noopener noreferrer">Server Code</a>
                    <a className='btn btn-outline btn-xs' href="https://the-taste-pot.web.app/" target='_blank' rel="noopener noreferrer">Live Site</a>
                </div>
            </div>
        </div>
    );
};

export default Third;