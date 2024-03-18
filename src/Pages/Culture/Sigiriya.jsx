import React from "react";
import sigiriya from "../../Assets/sigiriya.jpg"
import one from "../../Assets/sigiriyaGallery1.png"
import two from "../../Assets/sigiriyaGallery2.png"
import three from "../../Assets/sigiriyaGallery3.png"

const SigiriyaPage = () => {
    return (
        <div className=" dark:bg-zinc-900">
            {/* Banner Section */}
            <section className="bg-cover bg-center h-96 flex items-center justify-center" style={{backgroundImage: `url(${sigiriya})`}}>
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">Explore Sigiriya</h1>
                    <p className="text-lg">Discover the ancient rock fortress of Sigiriya, a UNESCO World Heritage Site.</p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="p-20">
                <div className="container mx-auto py-8">
                    <div className="max-w-6xl mx-auto shadow-lg rounded-lg overflow-hidden">
                        <div className="p-8">
                            <h2 className="text-2xl font-bold mb-4">History</h2>
                            <p className="mb-4">Sigiriya dates back to the 5th century AD when it was established as a royal citadel by King Kasyapa I. The king chose the site for its strategic location atop a massive rock formation rising 200 meters above the surrounding plains. After King Kasyapa's death, Sigiriya was abandoned and later served as a Buddhist monastery until the 14th century.</p>

                            <h2 className="text-2xl font-bold mb-4">Architecture</h2>
                            <p className="mb-4">The fortress complex at Sigiriya includes the remnants of a royal palace, extensive gardens, and intricate water features. The most striking feature of Sigiriya is the massive rock plateau, which is accessed via a series of staircases and terraces carved into the rock itself. At the summit of Sigiriya, visitors can see the remains of the palace complex, including foundations of buildings, cisterns, and a large throne platform.</p>

                            <h2 className="text-2xl font-bold mb-4">The Lion Gate and Frescoes</h2>
                            <p className="mb-4">The entrance to Sigiriya is through the famous Lion Gate, which was once flanked by two enormous lion paws. Today, only the paws remain, but they still serve as a remarkable architectural feature. Along the climb to the summit, visitors can admire the Sigiriya Frescoes, a series of ancient paintings depicting celestial maidens. These frescoes are renowned for their beauty and vibrant colors.</p>

                            <h2 className="text-2xl font-bold mb-4">Sigiriya Rock Paintings</h2>
                            <p className="mb-4">The Mirror Wall, located near the frescoes, once displayed polished plaster that reflected the images of those passing by. Today, visitors can see ancient graffiti and inscriptions on the wall, providing insight into the experiences of past visitors.</p>

                            <h2 className="text-2xl font-bold mb-4">UNESCO World Heritage Site</h2>
                            <p className="mb-4">Sigiriya was designated as a UNESCO World Heritage Site in 1982, recognizing its outstanding universal value as a cultural and archaeological site. It is one of Sri Lanka's most visited tourist attractions, drawing visitors from around the world to marvel at its historical significance and stunning natural beauty.</p>

                            <h2 className="text-2xl font-bold mb-4">Tourism</h2>
                            <p className="mb-4">Visitors to Sigiriya can explore the site at their own pace, climbing the stairs to the summit and taking in the panoramic views of the surrounding landscape. Guided tours are available for those interested in learning more about the history and architecture of Sigiriya from knowledgeable guides. The site is open to visitors year-round, although it can get crowded during peak tourist seasons. Sigiriya remains an enduring symbol of Sri Lanka's ancient civilization and architectural ingenuity, attracting visitors with its breathtaking scenery and rich cultural heritage.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="p-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <img src={one} alt="Sigiriya Gallery 1" className="rounded-lg shadow-md" />
                        <img src={two} alt="Sigiriya Gallery 2" className="rounded-lg shadow-md" />
                        <img src={three} alt="Sigiriya Gallery 3" className="rounded-lg shadow-md" />
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

export default SigiriyaPage;
