import React from "react";
import banner from "../../Assets/kayakongBanner.png";
import maduRever from "../../Assets/maduReverKyaking.png";
import KluGagaRever from "../../Assets/kalugagaKyaking.png";
import Kalpitiya from "../../Assets/kalpitiyaKyaking.png";

const Kayaking = () => {
    return (
        <div className="bg-zinc-800">
            <section className="bbg-zinc-800 py-20 px-8 text-white">
                <div className="container mx-auto">
                    <h2 className="text-5xl font-bold mb-4">Madu River</h2>
                    <p className="text-lg mb-8">Located in the southern region of Sri Lanka near Bentota, Madu River is a tranquil water body surrounded by mangrove forests.</p>
                    <img src={banner} alt="Kayaking Banner" />
                </div>
            </section>

            {/* Most Common Kayaking Destinations Section */}
            <section id="places" className="container mx-auto py-12 px-8">
                <h2 className="text-3xl font-bold mb-8">Most Common Kayaking Destinations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Destination 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={maduRever} alt="Kayaking Destination 1" className="w-full h-64 object-cover object-center" />
                        <div className="p-4">
                            <h3 className="text-xl text-black font-bold mb-2">River Adventure</h3>
                            <p className="text-gray-700 leading-relaxed">Paddle through the thrilling rapids and serene stretches of this beautiful river.</p>
                        </div>
                    </div>
                    {/* Destination 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={Kalpitiya} alt="Kayaking Destination 2" className="w-full h-64 object-cover object-center" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-black mb-2">Kalpitiya River</h3>
                            <p className="text-gray-700 leading-relaxed">Situated on the northwest coast of Sri Lanka, Kalpitiya Lagoon is renowned for its scenic beauty and calm waters, perfect for kayaking.</p>
                        </div>
                    </div>
                    {/* Destination 3 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={KluGagaRever} alt="Kayaking Destination 3" className="w-full h-64 object-cover object-center" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-black mb-2">Kalugaga</h3>
                            <p className="text-gray-700 leading-relaxed">Flowing through the Ratnapura District in the Sabaragamuwa Province, the Kalu Ganga River offers thrilling kayaking experiences with sections of rapids and calm stretches amidst scenic landscapes.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Kayaking;
