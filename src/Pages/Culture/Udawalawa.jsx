import React from "react";
import banner from "../../Assets/elep2.jpg";
import one from "../../Assets/udawalawaGallery1.png";
import two from "../../Assets/udawalawaGallery2.png";
import three from "../../Assets/udawalawaGallery3.png";

const Udawalawa = () => {
    return (
        <div className=" dark:bg-zinc-900">
            {/* Banner Section */}
            <section className="bg-cover bg-center h-96 flex items-center justify-center" style={{backgroundImage: `url(${banner})`}}>
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold mb-4 shadow-black">Udawalawa, Sri Lanka</h1>
                    <p className="text-lg shadow-black">Explore the wildlife and natural beauty of Udawalawa National Park.</p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="p-20">
                <div className="container mx-auto py-8">
                    <div className="max-w-6xl mx-auto shadow-lg rounded-lg overflow-hidden">
                        <div className="p-8">
                            <h2 className="text-2xl font-bold mb-4">Overview</h2>
                            <p className="mb-4">Udawalawa National Park is one of the premier wildlife sanctuaries in Sri Lanka, located in the Sabaragamuwa and Uva provinces. It is renowned for its large population of Sri Lankan elephants, making it an ideal destination for wildlife enthusiasts and nature lovers. The park is home to diverse flora and fauna, including endemic species, and offers opportunities for safari tours, birdwatching, and eco-tourism activities.</p>

                            <h2 className="text-2xl font-bold mb-4">Wildlife</h2>
                            <p className="mb-4">The star attraction of Udawalawa National Park is its elephant population, which can be observed in their natural habitat during safari tours. In addition to elephants, visitors may encounter other wildlife such as sambar deer, wild boar, water buffalo, and various species of birds. The park's diverse ecosystems, including grasslands, forests, and wetlands, provide habitats for a wide range of species.</p>

                            <h2 className="text-2xl font-bold mb-4">Safari Tours</h2>
                            <p className="mb-4">Safari tours are the best way to explore Udawalawa National Park and witness its abundant wildlife. Experienced guides lead visitors on thrilling jeep safaris through the park, providing insights into the behavior and habitats of the animals. Morning and evening safaris offer different perspectives of the park's landscapes and wildlife, ensuring memorable experiences for visitors.</p>

                            <h2 className="text-2xl font-bold mb-4">Conservation</h2>
                            <p className="mb-4">Udawalawa National Park plays a crucial role in the conservation of Sri Lanka's natural heritage, particularly its elephant population. Conservation efforts within the park aim to protect and preserve the biodiversity of the region while promoting sustainable tourism practices. Visitors are encouraged to support conservation initiatives and adhere to park regulations to minimize their impact on the environment.</p>

                            <h2 className="text-2xl font-bold mb-4">Visiting Udawalawa</h2>
                            <p className="mb-4">Udawalawa National Park is open to visitors throughout the year, although the best time for wildlife sightings is during the dry season from May to September. Entry permits and safari tours can be arranged through authorized tour operators or at the park entrance. Visitors are advised to bring sunscreen, hats, and binoculars for an enjoyable safari experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="p-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <img src={one} alt="Udawalawa Gallery 1" className="rounded-lg shadow-md" />
                        <img src={two} alt="Udawalawa Gallery 2" className="rounded-lg shadow-md" />
                        <img src={three} alt="Udawalawa Gallery 3" className="rounded-lg shadow-md" />
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="dark:bg-zinc-900 p-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="border p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Rich Wildlife</h3>
                            <p>Encounter diverse wildlife including elephants, deer, and birds in their natural habitat.</p>
                        </div>
                        <div className="border p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Safari Tours</h3>
                            <p>Embark on thrilling jeep safaris led by experienced guides to explore the park.</p>
                        </div>
                        <div className="border p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Conservation Efforts</h3>
                            <p>Support conservation initiatives aimed at preserving the park's natural heritage.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Udawalawa;
