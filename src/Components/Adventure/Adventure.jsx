import React from "react";

import imgOne from "../../Assets/one.png";
import imgTwo from "../../Assets/two.png";
import imgThree from "../../Assets/three.png";
import imgFour from "../../Assets/four.png";
import {Link} from "react-router-dom";
const Adventure = () => {
    return (

        <>
            <div className=" dark:bg-zinc-900">

                <h1 className="text-5xl font-bold flex justify-center p-20 text-amber-50 ">Adventure ideas</h1>
                <div className="flex justify-center gap-6">


                    {/* Second Row */}
                    <div className="w-1/5 p-4 text-center">
                        <img src={imgOne} alt="Province 6" className="w-full" />
                        <h1 className='pt-6 font-bold text-2xl'>FOREST ADVENTURE</h1>
                        <h6 className=''>efefe fee ewff wefwfewf wef wef wef wf wef eefeef ef ef ef ef ef ef   w</h6>
                        <button type="button" className="text-black p-20  m-4 hover:scale-110  font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 bg-white "><Link to='/forestadventure'>Explore</Link></button>
                    </div>

                    <div className="w-1/5 p-4 text-center">
                        <img src={imgTwo} alt="Province 7" className="w-full" />
                        <h1 className='pt-6 font-bold text-2xl'>MOUNTAIN CLIMBING</h1>
                        <h6 className=''>efefe fee ewff wefwfewf wef wef wef wf wef eefeef ef ef ef ef ef ef   w</h6>
                        <button type="button" className="text-black p-20  m-4 hover:scale-110  font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 bg-white "> Explore</button>
                    </div>

                    <div className="w-1/5 p-4 text-center">
                        <img src={imgThree} alt="Province 8" className="w-full" />
                        <h1 className='pt-6 font-bold text-2xl'>HIKING</h1>
                        <h6 className=''>efefe fee ewff wefwfewf wef wef wef wf wef eefeef ef ef ef ef ef ef   w</h6>
                        <button type="button" className="text-black p-20  m-4 hover:scale-110  font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 bg-white "> Explore</button>
                    </div>

                    <div className="w-1/5 p-4 text-center">
                        <img src={imgFour} alt="Province 9" className="w-full" />
                        <h1 className='pt-6 font-bold text-2xl'>KAYAKING</h1>
                        <h6 className=''>efefe fee ewff wefwfewf wef wef wef wf wef eefeef ef ef ef ef ef ef   w</h6>
                        <button type="button" className="text-black p-20  m-4 hover:scale-110  font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 bg-white "> Explore</button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Adventure;
