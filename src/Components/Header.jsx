
import { Link } from 'react-router-dom'
import { useState } from "react";
import { Body } from './Body';
import { Button } from './Button';


function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>

            <div className="w-100 min-h-24 bg-[#BD9DEA]">
                <div className="flex items-center justify-between border-b border-gray-400 py-8">
                    <Link to='/'>
                        <h1 className='text-white text-3xl pl-36 font-al-veshion'>KittyStore </h1>
                    </Link>
                    <nav>
                        <section className="MOBILE-MENU flex lg:hidden ">
                            <div
                                className="HAMBURGER-ICON space-y-2 cursor-pointer pr-28 "
                                onClick={() => setIsNavOpen((prev) => !prev)}
                            >
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            </div>

                            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                                <div
                                    className="absolute top-0 right-0 px-8 py-8 "
                                    onClick={() => setIsNavOpen(false)}
                                >
                                    <svg
                                        className="h-8 w-8 text-gray-600 cursor-pointer"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </div>
                                <ul className="flex flex-col items-center justify-between min-h-[250px] ">
                                    <li className="border-b border-gray-400 my-8 uppercase">
                                        <Link to="/boxes" >Boxes</Link>
                                    </li>
                                    <li className="border-b border-gray-400 my-8 uppercase">
                                        <Link to="/clothes">Clothes</Link>
                                    </li>
                                    {/* <li className="border-b border-gray-400 my-8 uppercase">
                                        <Link to="/sinks">Sinks</Link>
                                    </li>
                                    <li className="border-b border-gray-400 my-8 uppercase">
                                        <Link to="/space" >Space</Link>
                                    </li>
                                    <li className="border-b border-gray-400 my-8 uppercase">
                                        <Link to="/sunglasses" >Sunglasses</Link>
                                    </li>
                                    <li className="border-b border-gray-400 my-8 uppercase">
                                        <Link to="/ties" >Ties</Link>
                                    </li>
                                    <li className="border-b border-gray-400 my-8 uppercase">
                                        <Link to="/hats" >Hats</Link>
                                    </li> */}
                                </ul>
                            </div>
                        </section>

                        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex pr-28">
                            <li>
                                <Link to="/boxes" className='text-white'>Boxes</Link>
                            </li>
                            <li>
                                <Link to="/clothes" className='text-white'>Clothes</Link>
                            </li>
                            {/* <li>
                                <Link to="/sinks" className='text-white'>Sinks</Link>
                            </li>
                            <li>
                                <Link to="/space" className='text-white'>Space</Link>
                            </li>
                            <li>
                                <Link to="/sunglasses" className='text-white'>Sunglasses</Link>
                            </li>
                            <li>
                                <Link to="/ties" className='text-white'>Ties</Link>
                            </li>
                            <li>
                                <Link to="/hats" className='text-white'>Hats</Link>
                            </li> */}
                        </ul>
                    </nav>
                    <style>{`
                                .hideMenuNav {
                                    display: none;
                                }
                                .showMenuNav {
                                    display: block;
                                    position: absolute;
                                    width: 100%;
                                    height: 100vh;
                                    top: 0;
                                    left: 0;
                                    background: white;
                                    z-index: 10;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: space-evenly;
                                    align-items: center;
                                }
                                `}</style>
                </div>

            </div>
        </>
    )
}

export { Header }