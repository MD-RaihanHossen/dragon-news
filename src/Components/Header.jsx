import Marquee from 'react-fast-marquee';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import moment from 'moment';


const Header = () => {
    return (
        <div className='text-center'>
            <div className='my-2 flex justify-center'>
                <img src={logo} alt="" />
            </div>
            <div>
                <h2>Journalism Without Fear Or Favour</h2>
                <h3 className='p-3'>
                    {moment().format("dddd, MMMM Do YYYY, h:mm:ss ")}
                </h3>
            </div>
            <div className='flex gap-5 p-4 my-3 w-11/12 bg-gray-200 mx-auto'>

                <div>
                    <Link className='bg-pink-700 p-3 px-5 text-white'>Latest</Link>
                </div>
                <div>
                    <Marquee pauseOnHover>
                        <h1>
                            Reiciendis amet, corporis aperiam rem fugit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet, corporis aperiam corporis rem fugit in the
                        </h1>
                    </Marquee>
                </div>
                <div>
                    <Marquee pauseOnHover>
                        <h1>
                            Reiciendis amet, corporis aperiam rem fugit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet, corporis aperiam corporis rem fugit in the
                        </h1>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Header;