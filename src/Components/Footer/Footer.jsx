import React from "react";

const Footer = () => {
    return (
        <div className='flex justify-center text-center'>
            <div className='grid gap-10'>
                <div>
                    <img src={footer_logo}/>
                    <p className='text-center'> Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Incidunt consequuntur amet culpa
                        cum itaque neque.</p>
                </div>
                <div>
                    <ul className='flex gap-5'>
                        <li>Company</li>
                        <li>Products</li>
                        <li>Office</li>
                        <li>About</li>
                        <li>Content</li>
                    </ul>
                </div>

                <div>
                    <p>Copyright @ 2024 - All Right Reserved</p>
                </div>
                <div className='flex gap-2 mt-32 '>
                    <div>
                        <img className='scale-75' src={instagram_icon}/>
                    </div>
                    <div>
                        <img className='scale-75' src={pintester_icon}/>
                    </div>
                    <div>
                        <img className='scale-75' src={whatsapp_icon}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;
