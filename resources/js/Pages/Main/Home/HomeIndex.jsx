import { useState } from 'react';
import CardProduct from '../../../components/main/CardProduct';
import ArtworkDetail from '../Artworks/ArtworkDetail';

export default function HomeIndex() {
    const [isOpen, setIsOpen] = useState(false);

    const renderHome = () => {
        return (
            <section>
                <div className="flex flex-col">
                    {/* Hero 1 */}
                    <div className="max-w-screen relative bg-[#0D0E25]">
                        <div className="mx-auto max-w-screen-xl">
                            <div className="mx-auto mb-8 rounded-lg p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12">
                                <div className="flex flex-col-reverse items-center gap-x-4 lg:flex-row">
                                    <div className="flex flex-col justify-center">
                                        <a
                                            href="#"
                                            className="mb-2 inline-flex w-fit items-center rounded-md bg-white px-2.5 py-0.5 text-xs font-medium text-gray-500"
                                        >
                                            <svg
                                                className="me-1 h-3.5 w-3.5"
                                                aria-hidden="true"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M17.5 12C17.1022 12 16.7206 11.842 16.4393 11.5607C16.158 11.2794 16 10.8978 16 10.5C16 10.1022 16.158 9.72064 16.4393 9.43934C16.7206 9.15804 17.1022 9 17.5 9C17.8978 9 18.2794 9.15804 18.5607 9.43934C18.842 9.72064 19 10.1022 19 10.5C19 10.8978 18.842 11.2794 18.5607 11.5607C18.2794 11.842 17.8978 12 17.5 12ZM14.5 8C14.1022 8 13.7206 7.84196 13.4393 7.56066C13.158 7.27936 13 6.89782 13 6.5C13 6.10218 13.158 5.72064 13.4393 5.43934C13.7206 5.15804 14.1022 5 14.5 5C14.8978 5 15.2794 5.15804 15.5607 5.43934C15.842 5.72064 16 6.10218 16 6.5C16 6.89782 15.842 7.27936 15.5607 7.56066C15.2794 7.84196 14.8978 8 14.5 8ZM9.5 8C9.10218 8 8.72064 7.84196 8.43934 7.56066C8.15804 7.27936 8 6.89782 8 6.5C8 6.10218 8.15804 5.72064 8.43934 5.43934C8.72064 5.15804 9.10218 5 9.5 5C9.89782 5 10.2794 5.15804 10.5607 5.43934C10.842 5.72064 11 6.10218 11 6.5C11 6.89782 10.842 7.27936 10.5607 7.56066C10.2794 7.84196 9.89782 8 9.5 8ZM6.5 12C6.10218 12 5.72064 11.842 5.43934 11.5607C5.15804 11.2794 5 10.8978 5 10.5C5 10.1022 5.15804 9.72064 5.43934 9.43934C5.72064 9.15804 6.10218 9 6.5 9C6.89782 9 7.27936 9.15804 7.56066 9.43934C7.84196 9.72064 8 10.1022 8 10.5C8 10.8978 7.84196 11.2794 7.56066 11.5607C7.27936 11.842 6.89782 12 6.5 12ZM12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21C12.3978 21 12.7794 20.842 13.0607 20.5607C13.342 20.2794 13.5 19.8978 13.5 19.5C13.5 19.11 13.35 18.76 13.11 18.5C12.88 18.23 12.73 17.88 12.73 17.5C12.73 17.1022 12.888 16.7206 13.1693 16.4393C13.4506 16.158 13.8322 16 14.23 16H16C17.3261 16 18.5979 15.4732 19.5355 14.5355C20.4732 13.5979 21 12.3261 21 11C21 6.58 16.97 3 12 3Z"
                                                    fill="#FF8520"
                                                />
                                            </svg>
                                            <p>
                                                Get the best{' '}
                                                <span className="font-semibold text-[#FF8520]">Artwork</span> you
                                                deserve
                                            </p>
                                        </a>
                                        <h1 class="text-outline font-lighttext-white mb-4 text-3xl dark:text-white md:text-5xl lg:text-8xl">
                                            <span class="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text font-blaka text-transparent">
                                                Zgaphy World Where Collectors Gather
                                            </span>
                                        </h1>

                                        <p className="dark:text-white-400 mb-6 text-lg font-normal text-white">
                                            We provide a variety of beautiful artworks that can make your life more
                                            colorful.
                                        </p>
                                        <a
                                            href="#"
                                            className="inline-flex w-fit items-center justify-center rounded-lg bg-orange-500 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                        >
                                            How to get Collector Code ?
                                            <svg
                                                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                            </svg>
                                        </a>
                                    </div>

                                    <img
                                        src="/images/landing/ilustration-header.png"
                                        alt="Ilustration"
                                        className="w-[550px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hero 2 */}
                    <div class="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
                        <div class="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12">
                            <div className="flex flex-col items-center gap-x-12 lg:flex-row">
                                <div className="flex max-w-sm flex-col justify-around pb-5">
                                    <h1 class="text-outline mb-4 font-blaka text-3xl font-extrabold text-orange-500 dark:text-orange-500 md:text-7xl">
                                        Introducing Zgaphy Your New Cosmic Companion!
                                    </h1>
                                    <p class="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400">
                                        Static websites are now used to bootstrap lots of websites and are becoming the
                                        basis for a variety of tools that even influence both web designers and
                                        developers.
                                    </p>
                                    <a
                                        href="#"
                                        class="inline-flex items-center justify-center rounded-lg bg-orange-500 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                    >
                                        Load more products
                                        <svg
                                            class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                            />
                                        </svg>
                                    </a>
                                </div>

                                {/* Card Product */}
                                <div className="flex flex-row gap-x-6">
                                    <CardProduct onViewDetails={() => setIsOpen(true)} />
                                    <CardProduct onViewDetails={() => setIsOpen(true)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    return <>{isOpen ? <ArtworkDetail setIsOpen={setIsOpen} /> : renderHome()}</>;
}
