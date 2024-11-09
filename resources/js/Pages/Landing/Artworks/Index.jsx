import { Input } from '../../../Components/ui/input';

export default function ArtworkIndex() {
    return (
        <div className="max-w-screen bg-white">
            <div className="flex flex-col items-center p-20">
                <Input
                    className="w-[10px] sm:w-1/4"
                    placeholder="Search..."
                    // value={}
                    // value={params?.search}
                    // onChange={(e) => setParams((prev) => ({ ...prev, search: e.target.value }))}
                />

                <div class="container mx-auto p-10">
                    {/* <!-- ZGAPHY WARRIOR Section --> */}
                    <h2 class="mb-6 text-2xl font-bold">ZGAPHY WARRIOR</h2>
                    <div class="grid grid-cols-2 gap-10 pb-10 lg:grid-cols-4">
                        {/* <!-- Card Product --> */}
                        <div class="w-[300px] max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 lg:w-[325px]">
                            <a href="#" class="group relative block overflow-hidden rounded-t-lg">
                                <img
                                    class="p-8 transition-transform duration-300 group-hover:scale-105"
                                    src="/images/landing/ilustration-artwork.png"
                                    alt="product image"
                                />

                                <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <button
                                        class="rounded-md bg-[#FF8520] px-4 py-2 font-bold text-white"
                                        onclick="location.href='{{ route('detail-artwork') }}'"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </a>
                            <div class="px-5 pb-5">
                                <a href="#">
                                    <h4 class="pb-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                                    </h4>
                                </a>
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

                        <div class="w-[300px] max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 lg:w-[325px]">
                            <a href="#">
                                <img
                                    class="rounded-t-lg p-8"
                                    src="/images/landing/ilustration-artwork.png"
                                    alt="product image"
                                />
                            </a>
                            <div class="px-5 pb-5">
                                <a href="#">
                                    <h4 class="pb-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                                    </h4>
                                </a>
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

                        <div class="w-[300px] max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 lg:w-[325px]">
                            <a href="#">
                                <img
                                    class="rounded-t-lg p-8"
                                    src="/images/landing/ilustration-artwork.png"
                                    alt="product image"
                                />
                            </a>
                            <div class="px-5 pb-5">
                                <a href="#">
                                    <h4 class="pb-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                                    </h4>
                                </a>
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

                        <div class="w-[300px] max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 lg:w-[325px]">
                            <a href="#">
                                <img
                                    class="rounded-t-lg p-8"
                                    src="/images/landing/ilustration-artwork.png"
                                    alt="product image"
                                />
                            </a>
                            <div class="px-5 pb-5">
                                <a href="#">
                                    <h4 class="pb-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                                    </h4>
                                </a>
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

                    {/* <!-- ZGAPHY MACHINE Section --> */}
                    <h2 class="mb-4 mt-10 text-2xl font-bold">ZGAPHY MACHINE</h2>
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {/* <!-- Card Product --> */}
                        <div class="w-[300px] max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 lg:w-[325px]">
                            <a href="#">
                                <img
                                    class="rounded-t-lg p-8"
                                    src="/images/landing/ilustration-artwork.png"
                                    alt="product image"
                                />
                            </a>
                            <div class="px-5 pb-5">
                                <a href="#">
                                    <h4 class="pb-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                                    </h4>
                                </a>
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
                        {/* <!-- Salin card di atas untuk mengulang beberapa item dalam grid ini --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
