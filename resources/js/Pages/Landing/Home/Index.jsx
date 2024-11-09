import Welcome from '../../Welcome';

export default function HomeIndex() {
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
                                            Get the best <span className="font-semibold text-[#FF8520]">Artwork</span>{' '}
                                            you deserve
                                        </p>
                                    </a>
                                    <h1 className="mb-2 font-blaka text-3xl font-light text-orange-500 dark:text-orange-500 md:text-8xl">
                                        Zgaphy World Where Collectors Gather
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
                                    basis for a variety of tools that even influence both web designers and developers.
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
                                <div class="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                                    <a href="#">
                                        <img
                                            class="rounded-t-lg p-8"
                                            src="/images/landing/ilustration-artwork.png"
                                            alt="product image"
                                        />
                                    </a>
                                    <div class="px-5 pb-5">
                                        <a href="#">
                                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                                            </h5>
                                        </a>
                                        <div class="mb-5 mt-2.5 flex items-center">
                                            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                                <svg
                                                    class="h-4 w-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    class="h-4 w-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    class="h-4 w-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    class="h-4 w-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    class="h-4 w-4 text-gray-200 dark:text-gray-600"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            </div>
                                            <span class="ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                                                5.0
                                            </span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                            <a
                                                href="#"
                                                class="rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                Add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                                    <a href="#">
                                        <img
                                            class="rounded-t-lg p-8"
                                            src="/images/landing/ilustration-artwork.png"
                                            alt="product image"
                                        />
                                    </a>
                                    <div class="px-5 pb-5">
                                        <a href="#">
                                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                                            </h5>
                                        </a>
                                        <div class="mb-5 mt-2.5 flex items-center">
                                            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                                <svg
                                                    class="h-4 w-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    class="h-4 w-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    class="h-4 w-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    class="h-4 w-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    class="h-4 w-4 text-gray-200 dark:text-gray-600"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            </div>
                                            <span class="ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                                                5.0
                                            </span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                            <a
                                                href="#"
                                                class="rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                Add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        // <section>
        //     <div className="bg-orange-500 pb-48">
        //         {/* Hero */}
        //         <div className="max-w-screen relative bg-[#0D0E25] pb-12">
        //             <div className="mx-auto max-w-screen-xl">
        //                 <div className="mx-auto mb-8 rounded-lg p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12">
        //                     <div className="flex flex-row gap-x-4">
        //                         <div className="flex flex-col justify-center">
        //                             <a
        //                                 href="#"
        //                                 className="mb-2 inline-flex w-fit items-center rounded-md bg-white px-2.5 py-0.5 text-xs font-medium text-gray-500"
        //                             >
        //                                 <svg
        //                                     className="me-1 h-3.5 w-3.5"
        //                                     aria-hidden="true"
        //                                     viewBox="0 0 24 24"
        //                                     fill="none"
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                 >
        //                                     <path
        //                                         d="M17.5 12C17.1022 12 16.7206 11.842 16.4393 11.5607C16.158 11.2794 16 10.8978 16 10.5C16 10.1022 16.158 9.72064 16.4393 9.43934C16.7206 9.15804 17.1022 9 17.5 9C17.8978 9 18.2794 9.15804 18.5607 9.43934C18.842 9.72064 19 10.1022 19 10.5C19 10.8978 18.842 11.2794 18.5607 11.5607C18.2794 11.842 17.8978 12 17.5 12ZM14.5 8C14.1022 8 13.7206 7.84196 13.4393 7.56066C13.158 7.27936 13 6.89782 13 6.5C13 6.10218 13.158 5.72064 13.4393 5.43934C13.7206 5.15804 14.1022 5 14.5 5C14.8978 5 15.2794 5.15804 15.5607 5.43934C15.842 5.72064 16 6.10218 16 6.5C16 6.89782 15.842 7.27936 15.5607 7.56066C15.2794 7.84196 14.8978 8 14.5 8ZM9.5 8C9.10218 8 8.72064 7.84196 8.43934 7.56066C8.15804 7.27936 8 6.89782 8 6.5C8 6.10218 8.15804 5.72064 8.43934 5.43934C8.72064 5.15804 9.10218 5 9.5 5C9.89782 5 10.2794 5.15804 10.5607 5.43934C10.842 5.72064 11 6.10218 11 6.5C11 6.89782 10.842 7.27936 10.5607 7.56066C10.2794 7.84196 9.89782 8 9.5 8ZM6.5 12C6.10218 12 5.72064 11.842 5.43934 11.5607C5.15804 11.2794 5 10.8978 5 10.5C5 10.1022 5.15804 9.72064 5.43934 9.43934C5.72064 9.15804 6.10218 9 6.5 9C6.89782 9 7.27936 9.15804 7.56066 9.43934C7.84196 9.72064 8 10.1022 8 10.5C8 10.8978 7.84196 11.2794 7.56066 11.5607C7.27936 11.842 6.89782 12 6.5 12ZM12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21C12.3978 21 12.7794 20.842 13.0607 20.5607C13.342 20.2794 13.5 19.8978 13.5 19.5C13.5 19.11 13.35 18.76 13.11 18.5C12.88 18.23 12.73 17.88 12.73 17.5C12.73 17.1022 12.888 16.7206 13.1693 16.4393C13.4506 16.158 13.8322 16 14.23 16H16C17.3261 16 18.5979 15.4732 19.5355 14.5355C20.4732 13.5979 21 12.3261 21 11C21 6.58 16.97 3 12 3Z"
        //                                         fill="#FF8520"
        //                                     />
        //                                 </svg>
        //                                 <p>
        //                                     Get the best <span className="font-semibold text-[#FF8520]">Artwork</span>{' '}
        //                                     you deserve
        //                                 </p>
        //                             </a>
        //                             <h1 className="mb-2 font-blaka text-3xl font-light text-orange-500 dark:text-orange-500 md:text-8xl">
        //                                 Zgaphy World Where Collectors Gather
        //                             </h1>
        //                             <p className="dark:text-white-400 mb-6 text-lg font-normal text-white">
        //                                 We provide a variety of beautiful artworks that can make your life more
        //                                 colorful.
        //                             </p>
        //                             <a
        //                                 href="#"
        //                                 className="inline-flex w-fit items-center justify-center rounded-lg bg-orange-500 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        //                             >
        //                                 How to get Collector Code ?
        //                                 <svg
        //                                     className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
        //                                     aria-hidden="true"
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     fill="none"
        //                                     viewBox="0 0 14 10"
        //                                 >
        //                                     <path
        //                                         stroke="currentColor"
        //                                         stroke-linecap="round"
        //                                         stroke-linejoin="round"
        //                                         stroke-width="2"
        //                                         d="M1 5h12m0 0L9 1m4 4L9 9"
        //                                     />
        //                                 </svg>
        //                             </a>
        //                         </div>

        //                         <img
        //                             src="/images/landing/ilustration-header.png"
        //                             alt="Ilustration"
        //                             className="w-[550px]"
        //                         />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         {/* Floating Container */}
        //         <div className="absolute top-[700px] w-screen">
        //             <div className="flex items-center justify-center">
        //                 {/* <div className="h-[256px] w-[512px] rounded-lg bg-white"></div> */}

        //                 {/* <div className="mx-auto max-w-screen-xl rounded-lg bg-blue-500 p-12">
        //                  */}

        //                 <div class="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12">
        //                     <a
        //                         href="#"
        //                         class="mb-2 inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-gray-700 dark:text-blue-400"
        //                     >
        //                         <svg
        //                             class="me-1.5 h-2.5 w-2.5"
        //                             aria-hidden="true"
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             fill="currentColor"
        //                             viewBox="0 0 20 14"
        //                         >
        //                             <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
        //                         </svg>
        //                         Tutorial
        //                     </a>
        //                     <h1 class="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
        //                         How to quickly deploy a static website
        //                     </h1>
        //                     <p class="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400">
        //                         Static websites are now used to bootstrap lots of websites and are becoming the basis
        //                         for a variety of tools that even influence both web designers and developers.
        //                     </p>
        //                     <a
        //                         href="#"
        //                         class="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        //                     >
        //                         Read more
        //                         <svg
        //                             class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
        //                             aria-hidden="true"
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             fill="none"
        //                             viewBox="0 0 14 10"
        //                         >
        //                             <path
        //                                 stroke="currentColor"
        //                                 stroke-linecap="round"
        //                                 stroke-linejoin="round"
        //                                 stroke-width="2"
        //                                 d="M1 5h12m0 0L9 1m4 4L9 9"
        //                             />
        //                         </svg>
        //                     </a>
        //                 </div>

        //                 {/* </div> */}
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
}

HomeIndex.layout = (page) => <Welcome children={page} title="Home" />;
