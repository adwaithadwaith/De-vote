import React from 'react'
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
        <nav className=" bg-blue-600 border-gray-200 px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link to="/" className="flex items-center text-white text-2xl font-bold">
                    <img className=' h-[40px] w-[40px] m-3 align-middle' src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3262425/how-to-vote-icon-sm.png" alt=""  />
                    
                    De-Vote
                </Link>
                <div className="flex items-center lg:order-2">
                    <Link
                        to="/"
                        className="text-gray-800 bg-indigo-100 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        Log Out
                    </Link>
                    <Link
                        to="#"
                        className="text-gray-800 bg-indigo-100 hover:bg-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        Profile
                    </Link>
                </div>
                <div
                    className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                    id="mobile-menu-2"
                >
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        
                    <li>
                            <NavLink
                                to='/dashboard'
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                    ${isActive? ' text-white':'text-grey-700'} lg:hover:bg-transparent lg:border-0 hover:text-gray-300 lg:p-0`
                                }
                            >
                                Dashboard
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to='/elections'
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                    ${isActive? 'text-white':'text-grey-700'} lg:hover:bg-transparent lg:border-0 hover:text-gray-300 lg:p-0`
                                }
                            >
                                Elections
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/voters'
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                    ${isActive? 'text-white':'text-grey-700'} lg:hover:bg-transparent lg:border-0 hover:text-gray-300 lg:p-0`
                                }
                            >
                                Voters
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/candidate'
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                    ${isActive? 'text-white':'text-grey-700'} lg:hover:bg-transparent lg:border-0 hover:text-gray-300 lg:p-0`
                                }
                            >
                                Candidates
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/results'
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                    ${isActive? 'text-white':'text-grey-700'} lg:hover:bg-transparent lg:border-0 hover:text-gray-300 lg:p-0`
                                }
                            >
                                Results
                            </NavLink>
                        </li>
                        
                        
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);
}

export default Header
