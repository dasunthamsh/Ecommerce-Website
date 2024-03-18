import React from "react";

import galle from "../../Assets/galle.jpeg";
import sigiriya from "../../Assets/sigiriya.jpg";
import daladaTemple from "../../Assets/DaladaTemple.jpg";
import elephent from "../../Assets/elep2.jpg";
import nineArch from "../../Assets/nineaech.jpg";
import unawatuna from "../../Assets/mathara.jpg";
import {Link} from "react-router-dom";


const Culture = () => {
    return (

        <>

            <div className=" dark:bg-zinc-900">

                <h1 className="text-5xl font-bold flex justify-center p-32  ">Top Places To Visit In Sri Lanka</h1>

                <section id="destinations" className="container mx-auto p-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Destination 1 */}
                        <div className="dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                            <Link to='/sigiriya'>
                            <img src={sigiriya} alt="Surfing Destination 1" className="w-full h-64 object-cover object-center" />
                            </Link>
                            <div className="p-4">
                                <h3 className="text-xl text-white font-bold mb-2">Sigiriya The Ancient Rock Fortress</h3>
                                <h6 className="pt-3 pb-3">Ancient Ruins</h6>
                                <p className="text-gray-400 leading-relaxed">Sigiriya, also known as Lion Rock, is an ancient rock fortress located in the central Matale District of Sri Lanka. It is one of the island nation's most iconic landmarks and is a UNESCO World Heritage Site. Here are some key points about Sigiriya</p>
                            </div>
                        </div>
                        {/* Destination 2 */}
                        <div className="dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                            <img src={daladaTemple} alt="Surfing Destination 2" className="w-full h-64 object-cover object-center" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-white mb-2">Temple of the Sacred Tooth Relic</h3>
                                <h6 className="pt-3 pb-3">Ancient Ruins</h6>
                                <p className="text-gray-400 leading-relaxed">The Temple of the Sacred Tooth Relic, also known as Sri Dalada Maligawa, is a Buddhist temple located in the city of Kandy, Sri Lanka. It is one of the most sacred places of worship for Buddhists around the world, as it houses the relic of the tooth of the Buddha</p>
                            </div>
                        </div>
                        {/* Destination 3 */}
                        <div className="dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                            <img src={elephent} alt="Surfing Destination 3" className="w-full h-64 object-cover object-center" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-white mb-2">Udawalawe National Park</h3>
                                <p className="text-gray-400 leading-relaxed">Udawalawe National Park is one of the most renowned national parks in Sri Lanka, situated in the southern part of the country. It spans over 30,000 hectares and is primarily known for its large population of wild Asian elephants. The park was established in 1972..... </p>
                            </div>
                        </div>
                        {/* Destination 4 */}
                        <div className="dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                            <img src={nineArch} alt="Surfing Destination 3" className="w-full h-64 object-cover object-center" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-white mb-2">Nine Arches Bridge</h3>
                                <h6 className="pt-3 pb-3">Points of Interest & Landmarks</h6>
                                <p className="text-gray-400 leading-relaxed">The Nine Arches Bridge, affectionately known as the Bridge in the Sky, stands as an iconic testament to both Sri Lanka's rich colonial history and its stunning natural beauty. Situated in the picturesque town of Ella, nestled amidst the verdant hills of Sri Lanka's central.... </p>
                            </div>
                        </div>
                        {/* Destination 5 */}
                        <div className="dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                            <img src={unawatuna} alt="Surfing Destination 3" className="w-full h-64 object-cover object-center" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-white mb-2">Unawatuna Beach</h3>
                                <h6 className="pt-3 pb-3">Points of Interest & Landmarks</h6>
                                <h6 className="pt-3 pb-3">Beaches</h6>
                                <p className="text-gray-400 leading-relaxed">Unawatuna Beach, often hailed as one of Sri Lanka's most stunning coastal destinations, boasts a combination of natural beauty, vibrant atmosphere, and a wide array of recreational activities. Situated just a short distance from the historic city of Galle in the southern part...... </p>
                            </div>
                        </div>
                        {/* Destination 5 */}
                        <div className="dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                            <img src={galle} alt="Surfing Destination 3" className="w-full h-64 object-cover object-center" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-white mb-2">Galle Fort</h3>
                                <h6 className="pt-3 pb-3">Points of Interest & Landmarks</h6>
                                <h6 className="pt-3 pb-3">Historic Sites</h6>
                                <p className="text-gray-400 leading-relaxed"> Galle is a historic coastal city located in the Southern Province of Sri Lanka. Here's an overview of Galle and its attractions</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </>
    )
}

export default Culture;
