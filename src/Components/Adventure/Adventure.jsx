import React from "react";

import forest from "../../Assets/forest.png";
import hiking from "../../Assets/hiking.png";
import kayaking from "../../Assets/kayaking.png";
import clibing from "../../Assets/mountainClibing.png";
import {Link} from "react-router-dom";
const Adventure = () => {
    return (

        <>
            <div className=" dark:bg-zinc-900">

                <h1 className="text-5xl font-bold flex justify-center p-20 text-amber-50 ">Adventure ideas</h1>
                <div className="flex justify-center gap-6">


                    {/* Second Row */}
                    <div className="w-1/5 p-4 text-center">
                        <img src={forest} alt="Province 6" className="w-full" />
                        <h1 className='pt-6 font-bold text-2xl'>FOREST ADVENTURE</h1>
                        <h6 className=''>Sri Lanka offers diverse forest adventures for outdoor enthusiasts</h6>
                        <button type="button" className="text-black p-20  m-4 hover:scale-110  font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 bg-white "><Link to='/forestadventure'>Explore</Link></button>
                    </div>

                    <div className="w-1/5 p-4 text-center">
                        <img src={clibing} alt="Province 7" className="w-full" />
                        <h1 className='pt-6 font-bold text-2xl'>MOUNTAIN CLIMBING</h1>
                        <h6 className=''>Mountain climbing enthusiasts will find several opportunities in Sri Lanka</h6>
                        <button type="button" className="text-black p-20  m-4 hover:scale-110  font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 bg-white "> Explore</button>
                    </div>

                    <div className="w-1/5 p-4 text-center">
                        <img src={hiking} alt="Province 8" className="w-full" />
                        <h1 className='pt-6 font-bold text-2xl'>HIKING</h1>
                        <h6 className=''>Hiking in Sri Lanka offers a variety of scenic trails breathtaking landscapes</h6>
                        <button type="button" className="text-black p-20  m-4 hover:scale-110  font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 bg-white "> Explore</button>
                    </div>

                    <div className="w-1/5 p-4 text-center">
                        <img src={kayaking} alt="Province 9" className="w-full" />
                        <h1 className='pt-6 font-bold text-2xl'>KAYAKING</h1>
                        <h6 className=''>Kayaking in Sri Lanka explores coastal, river, and inland waters.</h6>
                        <button type="button" className="text-black p-20  m-4 hover:scale-110  font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 bg-white "> Explore</button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Adventure;
