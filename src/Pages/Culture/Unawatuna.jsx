import React from "react";
import banner from "../../Assets/unawatunaBanner.png";
import one from "../../Assets/unawatunaGallery1.png";
import two from "../../Assets/unawatunaGallery2.png";
import three from "../../Assets/unawatunaGallery3.png";

const Unawatuna = () => {
    return (
        <div className="dark:bg-zinc-900">
            {/* Banner Section */}
            <section className="bg-cover bg-center h-96 flex items-center justify-center" style={{backgroundImage: `url(${banner})`}}>
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold mb-4 shadow-black">Unawatuna, Sri Lanka</h1>
                    <p className="text-lg shadow-black">Discover the picturesque beaches and vibrant culture of Unawatuna.</p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="p-20">
                <div className="container mx-auto py-8">
                    <div className="max-w-6xl mx-auto shadow-lg rounded-lg overflow-hidden">
                        <div className="p-8">
                            <h2 className="text-2xl font-bold mb-4">Beaches</h2>
                            <p className="mb-4">Unawatuna is renowned for its pristine beaches, offering golden sands and crystal-clear waters perfect for swimming and sunbathing. Jungle-covered cliffs frame the coastline, creating a picturesque backdrop for beach activities and relaxation.</p>

                            <h2 className="text-2xl font-bold mb-4">Coral Reefs</h2>
                            <p className="mb-4">The coral reefs off the coast of Unawatuna are teeming with marine life, making it an ideal destination for snorkeling and scuba diving enthusiasts. Explore vibrant coral gardens inhabited by colorful fish, sea turtles, and other fascinating creatures.</p>

                            <h2 className="text-2xl font-bold mb-4">Cultural Attractions</h2>
                            <p className="mb-4">In addition to its natural beauty, Unawatuna boasts a rich cultural heritage with ancient temples, colonial-era buildings, and traditional villages waiting to be explored. Visit the iconic Japanese Peace Pagoda for panoramic views of the coastline and surrounding landscape.</p>

                            <h2 className="text-2xl font-bold mb-4">Water Sports</h2>
                            <p className="mb-4">Thrill-seekers can enjoy a variety of water sports in Unawatuna, including jet skiing, windsurfing, and banana boat rides. Experienced surfers can catch some waves at nearby surf breaks, while beginners can take lessons from local instructors.</p>

                            <h2 className="text-2xl font-bold mb-4">Nightlife and Dining</h2>
                            <p className="mb-4">As the sun sets, Unawatuna comes alive with a vibrant nightlife scene, offering beachfront bars, live music venues, and seafood restaurants serving delicious Sri Lankan cuisine. Enjoy fresh seafood dishes and tropical cocktails while listening to the sounds of the ocean.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="p-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <img src={one} alt="Unawatuna Gallery 1" className="rounded-lg shadow-md" />
                        <img src={two} alt="Unawatuna Gallery 2" className="rounded-lg shadow-md" />
                        <img src={three} alt="Unawatuna Gallery 3" className="rounded-lg shadow-md" />
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="dark:bg-zinc-900 p-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="border p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Pristine Beaches</h3>
                            <p>Enjoy golden sands and crystal-clear waters perfect for swimming and sunbathing.</p>
                        </div>
                        <div className="border p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Coral Reefs</h3>
                            <p>Explore vibrant coral gardens inhabited by colorful fish, sea turtles, and other fascinating creatures.</p>
                        </div>
                        <div className="border p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Cultural Attractions</h3>
                            <p>Visit ancient temples, colonial-era buildings, and traditional villages.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Unawatuna;
