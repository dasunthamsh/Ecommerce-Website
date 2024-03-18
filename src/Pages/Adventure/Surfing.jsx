import React from "react";
import banner from "../../Assets/surfingBanner.png"
import arugambe from "../../Assets/arugambeSurfing.png"
import unawatuna from "../../Assets/unawatunaSurfing.png"
import waligama from "../../Assets/waligamaSurfing.png"

const SurfingPage = () => {
    return (
        <div className="bg-zinc-800">

            <section className="bbg-zinc-800 py-20 px-8 text-white">
                <div className="container mx-auto">
                    <h2 className="text-5xl font-bold mb-4">Ride the Waves</h2>
                    <p className="text-lg mb-8">Embark on an unforgettable journey through the thrilling waves of the ocean.</p>
                    <img src={banner} alt="Surfing Banner"/>
                </div>
            </section>

            {/* Most Common Surfing Destinations Section */}
            <section id="destinations" className="container mx-auto py-12 px-8">
                <h2 className="text-3xl font-bold mb-8">Most Popular Surfing Destinations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Destination 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={arugambe} alt="Surfing Destination 1" className="w-full h-64 object-cover object-center" />
                        <div className="p-4">
                            <h3 className="text-xl text-black font-bold mb-2">Arugam Bay</h3>
                            <p className="text-gray-700 leading-relaxed">Located on the east coast, Arugam Bay is internationally renowned for its consistent waves and laid-back atmosphere.</p>
                        </div>
                    </div>
                    {/* Destination 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={unawatuna} alt="Surfing Destination 2" className="w-full h-64 object-cover object-center" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-black mb-2">Unawatuna</h3>
                            <p className="text-gray-700 leading-relaxed">Located near Galle, Unawatuna Beach is another popular surfing spot on the southwest coast.</p>
                        </div>
                    </div>
                    {/* Destination 3 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={waligama} alt="Surfing Destination 3" className="w-full h-64 object-cover object-center" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-black mb-2">Weligama</h3>
                            <p className="text-gray-700 leading-relaxed">Weligama Bay, also on the southwest coast, is famous for its long, sandy beach and beginner-friendly waves. </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SurfingPage;
