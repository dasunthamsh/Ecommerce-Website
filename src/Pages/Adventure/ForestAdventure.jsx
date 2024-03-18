import React from "react";
import banner from "../../Assets/forestAdventureBanner.png"
import sinharaja from "../../Assets/sinharaja.png"
import kanneliya from "../../Assets/kanneliya.png"
import hortan from "../../Assets/hortan.png"

const ForestAdventurePage = () => {
    return (
        <div className="bg-zinc-800">

            <section className="bbg-zinc-800 py-20 px-8 text-white">
                <div className="container mx-auto">
                    <h2 className="text-5xl font-bold mb-4">Explore the Wilderness</h2>
                    <p className="text-lg mb-8">Embark on an unforgettable journey through the enchanting forests of the world.</p>
                    <img src={banner}/>
                </div>
            </section>

            {/* Most Common Adventure Forest Places Section */}
            <section id="places" className="container mx-auto py-12 px-8">
                <h2 className="text-3xl font-bold mb-8">Most Common Adventure Forest Places</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Place 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={sinharaja} alt="Forest Adventure Place 1" className="w-full h-64 object-cover object-center" />
                        <div className="p-4">
                            <h3 className="text-xl text-black font-bold mb-2">Sinharaja Forest Reserve</h3>
                            <p className="text-gray-700 leading-relaxed">Sinharaja Forest Reserve is a UNESCO World Heritage Site and one of the last remaining rainforests in Sri Lanka</p>
                        </div>
                    </div>
                    {/* Place 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={hortan} alt="Forest Adventure Place 2" className="w-full h-64 object-cover object-center" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-black mb-2">Horton Plains National Park</h3>
                            <p className="text-gray-700 leading-relaxed">orton Plains National Park is a unique ecosystem situated in the central highlands of Sri Lanka.</p>
                        </div>
                    </div>
                    {/* Place 3 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={kanneliya} alt="Forest Adventure Place 3" className="w-full h-64 object-cover object-center" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-black mb-2">Kanneliya-Dediyagala-Nakiyadeniya </h3>
                            <p className="text-gray-700 leading-relaxed">Kanneliya-Dediyagala-Nakiyadeniya (KDN) Forest Reserve is a biodiversity hotspot located near Galle</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ForestAdventurePage;
