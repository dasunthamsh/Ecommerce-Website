import React from "react";
import banner from "../../Assets/hikingBanner.png";
import ellaRock from "../../Assets/ellaRockHiking.png";
import knuckles from "../../Assets/KnucklesHiking.png";
import pidurangala from "../../Assets/piduruthalagalaHiking.png";

const Hiking = () => {
    return (
        <div className="bg-zinc-800">
            <section className="bbg-zinc-800 py-20 px-8 text-white">
                <div className="container mx-auto">
                    <h2 className="text-5xl font-bold mb-4">Explore the Trails</h2>
                    <p className="text-lg mb-8">Embark on an unforgettable journey through the scenic trails and mountains.</p>
                    <img src={banner} alt="Hiking Banner" />
                </div>
            </section>

            {/* Most Common Hiking Destinations Section */}
            <section id="places" className="container mx-auto py-12 px-8">
                <h2 className="text-3xl font-bold mb-8">Most Common Hiking Destinations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Destination 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={ellaRock} alt="Ella Rock Hiking" className="w-full h-64 object-cover object-center" />
                        <div className="p-4">
                            <h3 className="text-xl text-black font-bold mb-2">Ella Rock</h3>
                            <p className="text-gray-700 leading-relaxed">Ella Rock offers breathtaking views of the surrounding landscape, making it a popular hiking destination in Sri Lanka.</p>
                        </div>
                    </div>
                    {/* Destination 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={knuckles} alt="Knuckles Mountain Range" className="w-full h-64 object-cover object-center" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-black mb-2">Knuckles Mountain Range</h3>
                            <p className="text-gray-700 leading-relaxed">The Knuckles Mountain Range boasts diverse flora and fauna, offering hikers a unique and adventurous experience.</p>
                        </div>
                    </div>
                    {/* Destination 3 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={pidurangala} alt="Pidurangala Rock Hiking" className="w-full h-64 object-cover object-center" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-black mb-2">Pidurangala Rock</h3>
                            <p className="text-gray-700 leading-relaxed">Pidurangala Rock provides stunning panoramic views of the Sigiriya Rock Fortress and the surrounding landscape.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hiking;
