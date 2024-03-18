import React from "react";

import galle from "../../Assets/galle.jpeg";
import sigiriya from "../../Assets/sigiriya.jpg";
import daladaTemple from "../../Assets/DaladaTemple.jpg";
import elephent from "../../Assets/elep2.jpg";
import nineArch from "../../Assets/nineaech.jpg";
import unawatuna from "../../Assets/mathara.jpg";


const Culture = () => {
    return (

        <>

            <div className=" dark:bg-zinc-900">

                <h1 className="text-5xl font-bold flex justify-center p-20  ">Top Things To Do In Sri Lanka</h1>

                <div className="flex flex-wrap justify-center">
                    {/* First Row */}
                    <div>
                        <div>
                            <div className="max-w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
                                <a href="#">
                                    <img className="rounded-t-lg" src={sigiriya} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sigiriya The Ancient Rock Fortress</h5>
                                    </a>
                                    <h6 className="pt-3 pb-3">Ancient Ruins</h6>
                                    <h6>Sigiriya, also known as Lion Rock, is an ancient rock fortress located in the central Matale District of Sri Lanka. It is one of the island nation's most iconic landmarks and is a UNESCO World Heritage Site. Here are some key points about Sigiriya:</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className="max-w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
                                <a href="#">
                                    <img className="rounded-t-lg" src={daladaTemple} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Temple of the Sacred Tooth Relic</h5>
                                    </a>
                                    <h6 className="pt-3 pb-3">Ancient Ruins</h6>
                                    <h6>
                                        The Temple of the Sacred Tooth Relic, also known as Sri Dalada Maligawa, is a Buddhist temple located in the city of Kandy, Sri Lanka. It is one of the most sacred places of worship for Buddhists around the world, as it houses the relic of the tooth of the Buddha.</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className="max-w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
                                <a href="#">
                                    <img className="rounded-t-lg" src={elephent} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Udawalawe National Park</h5>
                                    </a>
                                    <h6 className="pt-3 pb-3">National Parks</h6>
                                    <h6>Udawalawe National Park is one of the most renowned national parks in Sri Lanka, situated in the southern part of the country. It spans over 30,000 hectares and is primarily known for its large population of wild Asian elephants. The park was established in 1972.....</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-wrap justify-center mt-5">
                    {/* second Row */}
                    <div>
                        <div>
                            <div className="max-w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
                                <a href="#">
                                    <img className="rounded-t-lg" src={nineArch} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nine Arches Bridge</h5>
                                    </a>
                                    <h6 className="pt-3 pb-3">Points of Interest & Landmarks</h6>
                                    <h6>The Nine Arches Bridge, affectionately known as the Bridge in the Sky, stands as an iconic testament to both Sri Lanka's rich colonial history and its stunning natural beauty. Situated in the picturesque town of Ella, nestled amidst the verdant hills of Sri Lanka's central.....</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className="max-w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
                                <a href="#">
                                    <img className="rounded-t-lg" src={unawatuna} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Unawatuna Beach</h5>
                                    </a>
                                    <h6 className="pt-3 pb-3">Beaches</h6>
                                    <h6>Unawatuna Beach, often hailed as one of Sri Lanka's most stunning coastal destinations, boasts a combination of natural beauty, vibrant atmosphere, and a wide array of recreational activities. Situated just a short distance from the historic city of Galle in the southern part.....</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className="max-w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
                                <a href="#">
                                    <img className="rounded-t-lg" src={galle} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Galle Fort</h5>
                                    </a>
                                    <h6 className="pt-3 pb-3">Historic Sites</h6>
                                    <h6>Galle is a historic coastal city located in the Southern Province of Sri Lanka. Here's an overview of Galle and its attractions:</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Culture;
