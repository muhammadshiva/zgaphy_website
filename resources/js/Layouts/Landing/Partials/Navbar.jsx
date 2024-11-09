import { IconShoppingCartFilled } from '@tabler/icons-react';
import { useState } from 'react';
import ApplicationLogo from '../../../Components/ApplicationLogo';
import ArtworkIndex from '../../../Pages/Landing/Artworks/Index';
import HomeIndex from '../../../Pages/Landing/Home/Index';

export default function Navbar({ url, auth }) {
    const [activeNav, setActiveNav] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (navItem) => {
        setActiveNav(navItem);
        setIsMenuOpen(false); // Close the menu after clicking a link
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="fixed start-0 top-0 z-20 w-full bg-[#0D0E25] dark:border-gray-600 dark:bg-gray-900">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <ApplicationLogo isTitle={false} />
                        <span className="hidden self-center whitespace-nowrap text-2xl font-bold text-white lg:block">
                            ZGAPHY WORLD
                        </span>
                    </a>
                    <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                        <div className="flex flex-row gap-x-4">
                            <button
                                type="button"
                                className="text-white hover:text-orange-500 dark:text-gray-400 dark:hover:text-white"
                                aria-label="Cart"
                            >
                                <IconShoppingCartFilled className="h-6 w-6" />
                            </button>
                            <button
                                type="button"
                                className="rounded-lg border border-orange-500 px-2 py-1 text-center text-sm font-medium text-orange-500 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-600 lg:px-4 lg:py-2"
                            >
                                Login
                            </button>
                            <button
                                type="button"
                                className="rounded-lg bg-orange-500 px-2 py-1 text-center text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:px-4 lg:py-2"
                            >
                                Register
                            </button>
                            <button
                                onClick={toggleMenu}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                                aria-controls="navbar-sticky"
                                aria-expanded={isMenuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div
                        className={`w-full items-center justify-between md:order-1 md:flex md:w-auto ${
                            isMenuOpen ? 'block' : 'hidden'
                        }`}
                        id="navbar-sticky"
                    >
                        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-[#0D0E25] md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
                            {['Home', 'List Artworks', 'The Collectors', 'Contact', 'FAQ'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        onClick={() => handleNavClick(item)}
                                        className={`block rounded px-3 py-2 ${
                                            activeNav === item
                                                ? 'bg-transparent font-bold text-orange-500'
                                                : 'text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                                        } md:p-0 md:hover:bg-transparent md:hover:text-orange-400 md:dark:hover:bg-transparent md:dark:hover:text-blue-500`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Render the content based on the activeNav state */}
            <div className="mt-16 p-0">
                {activeNav === 'Home' && <HomeIndex />}
                {activeNav === 'List Artworks' && <ArtworkIndex />}
                {activeNav === 'The Collectors' && <div className="text-white">Meet the Collectors</div>}
                {activeNav === 'Contact' && <div className="text-white">Contact Us</div>}
                {activeNav === 'FAQ' && <div className="text-white">Frequently Asked Questions</div>}
            </div>
        </>
    );
}
