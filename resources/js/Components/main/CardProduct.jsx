// CardProduct.jsx
export default function CardProduct({ onViewDetails }) {
    return (
        <div className="w-[300px] max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 lg:w-[290px]">
            <div className="group relative block overflow-hidden rounded-t-lg">
                <img
                    className="p-4 transition-transform duration-300 group-hover:scale-105"
                    src="/images/landing/ilustration-artwork.png"
                    alt="product image"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button onClick={onViewDetails} className="rounded-md bg-[#FF8520] px-4 py-2 font-bold text-white">
                        View Details
                    </button>
                </div>
            </div>
            <div className="px-5 pb-5">
                <h4 className="pb-3 text-lg font-semibold tracking-tight text-gray-900 dark:text-white lg:text-xl">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                </h4>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl">$599</span>
                    <button className="rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
