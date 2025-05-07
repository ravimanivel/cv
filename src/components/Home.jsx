import React, { useEffect } from 'react';
import some from '../assets/image.webp'
import Mypdf from '../assets/Jesmin Chakma.pdf'
import { Tooltip } from 'react-tooltip'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Home = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
        });
        Aos.refresh();
    }, []);


    return (
        <div id='home' className='mt-30 md:w-[1100px]'>
            <div className='flex flex-col md:flex-row gap-10 items-center justify-around'>
                <div className='w-100 flex flex-col gap-7'>
                    <div data-aos='fade-down' data-aos-duration='1000'  >
                        <h4 className="text-center mb-2 md:text-start text-4xl font-bold">
                            Hi ,I am
                        </h4>
                        <h2 className=" text-center md:text-start text-emerald-500 text-5xl font-bold">
                            Jesmin Chakma
                        </h2>
                        <p>Enthusiastic and highly motivated full-stack web developer, well-versed in react.js, node.js and mongodb.</p>
                    </div>
                    <div data-aos='zoom-in' data-aos-duration='1500' className='flex gap-4 '>
                        <a href={Mypdf} className=' btn w-40 px-2 py-2 rounded bg-gray-800 text-white border-2 
                        border-gray-800 hover:bg-transparent hover:text-gray-800 hover:border-gray-800'  download target='_blank'>Download Resume</a>
                        <a className='my-anchor-element btn  px-2 py-2 rounded-full bg-gray-800 text-white border-2 
                        border-gray-800 hover:bg-transparent hover:text-gray-800 hover:border-gray-800' href="https://www.linkedin.com/in/jesmin-chakma-a92250246/">Linkdin</a>
                        <Tooltip anchorSelect='.my-anchor-element' place='bottom'>Linkdin Profile</Tooltip>
                        <a className='my-anchor-element-two btn px-2 py-2 rounded-full bg-gray-800 text-white border-2 
                        border-gray-800 hover:bg-transparent hover:text-gray-800 hover:border-gray-800' href="https://github.com/Nobleman78">Github </a>
                        <Tooltip anchorSelect='.my-anchor-element-two' place='bottom'>Github Profile</Tooltip>
                    </div>
                </div>
                <div className=''>
                    <img className='w-80 h-80' src={some} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Home;