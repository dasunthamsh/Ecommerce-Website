import React from "react";
import banner from "../../Assets/ninearchBanner.png";
import one from "../../Assets/ninearchGallery1.png";
import two from "../../Assets/ninearchGallery2.png";
import three from "../../Assets/ninearchGallery3.png";

const NineArch = () => {
    return (
        <div className=" dark:bg-zinc-900">
            {/* Banner Section */}
            <section className="bg-cover bg-center h-96 flex items-center justify-center" style={{backgroundImage: `url(${banner})`}}>
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold mb-4 shadow-black">Nine Arch Bridge</h1>
                    <p className="text-lg shadow-black">Explore the iconic Nine Arch Bridge in Ella, Sri Lanka.</p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="p-20">
                <div className="container mx-auto py-8">
                    <div className="max-w-6xl mx-auto shadow-lg rounded-lg overflow-hidden">
                        <div className="p-8">
                            <h2 className="text-2xl font-bold mb-4">History</h2>
                            <p className="mb-4">The Nine Arch Bridge, also known as the Bridge in the Sky, is a marvel of colonial-era engineering located in Ella, Sri Lanka. Built during the British colonial period, the bridge spans a lush valley and connects two railway stations on the scenic Kandy-Ella railway line. Its distinctive arches and solid stone construction have made it a beloved landmark and popular tourist attraction.</p>

                            <h2 className="text-2xl font-bold mb-4">Architecture</h2>
                            <p className="mb-4">The Nine Arch Bridge is renowned for its unique architecture and stunning natural setting. The bridge is made entirely of solid stone, with nine massive arches supporting the railway tracks above. Its construction without the use of steel or concrete is a testament to the craftsmanship and ingenuity of the builders. The bridge blends seamlessly into the surrounding landscape, offering panoramic views of the Ella countryside.</p>

                            <h2 className="text-2xl font-bold mb-4">Scenic Beauty</h2>
                            <p className="mb-4">Visitors to the Nine Arch Bridge are captivated by its scenic beauty and tranquil ambiance. The lush greenery of the Ella valley, coupled with the gentle sound of passing trains, creates a serene atmosphere ideal for relaxation and photography. Watching a train cross the bridge against the backdrop of verdant hills is a memorable experience that draws travelers from around the world.</p>

                            <h2 className="text-2xl font-bold mb-4">Exploration</h2>
                            <p className="mb-4">Exploring the Nine Arch Bridge and its surroundings is a must-do activity for visitors to Ella. Walking along the railway tracks offers stunning views of the bridge and the surrounding countryside. Adventurous travelers can hike down to the base of the valley for a closer look at the bridge's architecture and enjoy picnics by the tranquil stream below.</p>

                            <h2 className="text-2xl font-bold mb-4">Visiting Nine Arch Bridge</h2>
                            <p className="mb-4">The Nine Arch Bridge is accessible via a short walk from Ella town, making it a convenient destination for day trips. Visitors can enjoy panoramic views of the bridge from viewpoints along the railway tracks or opt for guided tours that provide insights into the history and significance of this architectural marvel. The bridge is particularly popular during sunrise and sunset, offering photographers the perfect opportunity to capture its beauty in different lighting conditions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="p-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <img src={one} alt="Nine Arch Gallery 1" className="rounded-lg shadow-md" />
                        <img src={two} alt="Nine Arch Gallery 2" className="rounded-lg shadow-md" />
                        <img src={three} alt="Nine Arch Gallery 3" className="rounded-lg shadow-md" />
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="dark:bg-zinc-900 p-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="border p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Colonial-era Engineering</h3>
                            <p>Marvel at the solid stone construction and nine massive arches of the bridge.</p>
                        </div>
                        <div className="border p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Scenic Beauty</h3>
                            <p>Enjoy panoramic views of the Ella valley and surrounding hills from the bridge.</p>
                        </div>
                        <div className="border p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Tranquil Ambiance</h3>
                            <p>Experience the serene atmosphere and gentle sound of passing trains at the bridge.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NineArch;
