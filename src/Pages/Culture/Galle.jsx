import React from "react";
import banner from "../../Assets/galleBanner.png";
import one from "../../Assets/galleGallery1.png";
import two from "../../Assets/galleGallery2.png";
import three from "../../Assets/galleGallery3.png";

const Galle = () => {
    return (
        <div className="dark:bg-zinc-900">
            {/* Banner Section */}
            <section className="bg-cover bg-center h-96 flex items-center justify-center" style={{backgroundImage: `url(${banner})`}}>
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold mb-4 shadow-black">Galle, Sri Lanka</h1>
                    <p className="text-lg shadow-black">Explore the historic city of Galle, known for its colonial architecture and vibrant culture.</p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="p-20">
                <div className="container mx-auto py-8">
                    <div className="max-w-6xl mx-auto shadow-lg rounded-lg overflow-hidden">
                        <div className="p-8">
                            <h2 className="text-2xl font-bold mb-4">Colonial Architecture</h2>
                            <p className="mb-4">Galle is renowned for its well-preserved Dutch colonial architecture, which reflects its rich history as a major trading port. Explore the cobblestone streets lined with historic buildings, including the iconic Galle Fort, a UNESCO World Heritage Site.</p>

                            <h2 className="text-2xl font-bold mb-4">Galle Fort</h2>
                            <p className="mb-4">The Galle Fort is a must-visit attraction, offering panoramic views of the Indian Ocean and the surrounding cityscape. Walk along the fortifications and explore the narrow lanes filled with boutique shops, art galleries, and charming cafes.</p>

                            <h2 className="text-2xl font-bold mb-4">Cultural Heritage</h2>
                            <p className="mb-4">Immerse yourself in Galle's cultural heritage by visiting its museums, temples, and traditional markets. Learn about the city's multicultural history and discover the unique customs and traditions of its diverse population.</p>

                            <h2 className="text-2xl font-bold mb-4">Beaches</h2>
                            <p className="mb-4">Galle is also known for its beautiful beaches, where you can relax on golden sands, swim in turquoise waters, and enjoy water sports such as snorkeling and diving. Unwind amidst stunning coastal scenery and breathtaking sunsets.</p>

                            <h2 className="text-2xl font-bold mb-4">Local Cuisine</h2>
                            <p className="mb-4">Indulge in the flavors of Sri Lankan cuisine at Galle's restaurants and street food stalls. Sample delicious seafood dishes, aromatic curries, and sweet treats made from local ingredients. Don't miss the opportunity to try the famous Galle hoppers and other culinary delights.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="p-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <img src={one} alt="Galle Gallery 1" className="rounded-lg shadow-md" />
                        <img src={two} alt="Galle Gallery 2" className="rounded-lg shadow-md" />
                        <img src={three} alt="Galle Gallery 3" className="rounded-lg shadow-md" />
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="dark:bg-zinc-900 p-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="border p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Colonial Architecture</h3>
                            <p>Explore the well-preserved Dutch colonial buildings in Galle Fort.</p>
                        </div>
                        <div className="border p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Cultural Heritage</h3>
                            <p>Discover Galle's multicultural history through its museums and temples.</p>
                        </div>
                        <div className="border p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Beaches</h3>
                            <p>Relax on golden sands and swim in turquoise waters at Galle's beautiful beaches.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Galle;
