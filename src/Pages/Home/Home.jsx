import Banner from "./Banner";
import Exploring from "./Exploring";
import Skills from "./Skills";


const Home = () => {
    return (
        <div className="min-h-screen px-4">
            <Banner></Banner>
            <Skills></Skills>
            <Exploring></Exploring>
        </div>
    );
};

export default Home;