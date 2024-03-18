import React from "react";
import banner from "../../Assets/DaladaTemple.jpg"
import one from "../../Assets/daladaGalaery1.png"
import two from "../../Assets/daladaGalaery2.png"
import three from "../../Assets/daladaGalaery3.png"

const Dalada = () => {
    return (
        <div className=" dark:bg-zinc-900">
            {/* Banner Section */}
            <section className="bg-cover bg-center h-96 flex items-center justify-center" style={{backgroundImage: `url(${banner})`}}>
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold mb-4 shadow-black">Dalada Malaligawa</h1>
                    <p className="text-lg shadow-black">Discover the sacred Dalada Temple, home to the Temple of the Tooth Relic.</p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="p-20">
                <div className="container mx-auto py-8">
                    <div className="max-w-6xl mx-auto shadow-lg rounded-lg overflow-hidden">
                        <div className="p-8">
                            <h2 className="text-2xl font-bold mb-4">History</h2>
                            <p className="mb-4">Dalada Maligawa, commonly known as the Temple of the Tooth, is a sacred Buddhist temple located in Kandy, Sri Lanka. It houses the relic of the tooth of the Buddha, making it one of the most revered religious sites in the country. The temple's history dates back to the 4th century AD when the tooth relic was brought to Sri Lanka from India. Over the centuries, the relic became a symbol of sovereignty and a focal point of veneration for Buddhist devotees.</p>

                            <h2 className="text-2xl font-bold mb-4">Architecture</h2>
                            <p className="mb-4">The architecture of Dalada Maligawa reflects a blend of Sri Lankan, South Indian, and Indo-Chinese influences. The temple complex features traditional Kandyan architecture with intricate wood carvings, gilded roofs, and elaborately painted walls. The main shrine, where the tooth relic is enshrined, is adorned with exquisite craftsmanship and surrounded by ornate decorations.</p>

                            <h2 className="text-2xl font-bold mb-4">Rituals and Ceremonies</h2>
                            <p className="mb-4">Dalada Maligawa is a center of religious devotion and cultural significance, hosting daily rituals and ceremonies performed by Buddhist monks. The most notable ceremony is the daily 'Pooja' (offering) rituals, where the sacred tooth relic is venerated amidst chanting, drumming, and traditional offerings. Visitors can witness these rituals and experience the spiritual ambiance of the temple.</p>

                            <h2 className="text-2xl font-bold mb-4">Esala Perahera</h2>
                            <p className="mb-4">One of the highlights of Dalada Maligawa is the annual Esala Perahera, a grand procession held to honor the sacred tooth relic. This cultural extravaganza features richly adorned elephants, traditional dancers, drummers, and flag bearers parading through the streets of Kandy. The Esala Perahera attracts thousands of spectators and is a vibrant celebration of Sri Lankan heritage and Buddhist traditions.</p>

                            <h2 className="text-2xl font-bold mb-4">UNESCO World Heritage Site</h2>
                            <p className="mb-4">Dalada Maligawa was declared a UNESCO World Heritage Site in 1988, recognizing its cultural significance and architectural splendor. It stands as a testament to Sri Lanka's Buddhist heritage and serves as a focal point of religious pilgrimage and cultural heritage preservation.</p>

                            <h2 className="text-2xl font-bold mb-4">Visiting Dalada Maligawa</h2>
                            <p className="mb-4">Visitors to Dalada Maligawa can explore the temple complex, participate in rituals, and pay homage to the sacred tooth relic. Modest attire and respectful behavior are expected inside the temple premises. Guided tours are available for those interested in learning more about the temple's history and significance. Dalada Maligawa welcomes visitors of all faiths to experience its spiritual ambiance and cultural richness.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="p-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <img src={one} alt="daladawa Gallery 1" className="rounded-lg shadow-md" />
                        <img src={two} alt="daladawa Gallery 2" className="rounded-lg shadow-md" />
                        <img src={three} alt="daladawa Gallery 3" className="rounded-lg shadow-md" />
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="dark:bg-zinc-900 p-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="border p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Ancient Ruins</h3>
                            <p>Explore the ancient ruins of the royal palace and fortress complex.</p>
                        </div>
                        <div className="border p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Frescoes</h3>
                            <p>Admire the vibrant frescoes depicting celestial maidens on the rock face.</p>
                        </div>
                        <div className=" p-6 border rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Lion's Paw</h3>
                            <p>See the giant lion's paw carved into the rock, giving Sigiriya its name.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dalada;
