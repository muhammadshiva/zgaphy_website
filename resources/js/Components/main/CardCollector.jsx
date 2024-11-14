// CardProduct.jsx
export default function CardCollector({ title, onViewDetails }) {
    return (
        <div className="flex flex-col items-center gap-y-3">
            <div className="group relative block overflow-hidden rounded-t-lg lg:w-[300px]">
                <img
                    className="p-3 transition-transform duration-300 group-hover:scale-105"
                    src="/images/landing/ilustration-artwork.png"
                    alt="product image"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button onClick={onViewDetails} className="rounded-md bg-[#FF8520] px-4 py-2 font-bold text-white">
                        View Collectors
                    </button>
                </div>
            </div>
            <p className="text-gray-indigo950 text-center text-xl font-bold">{title}</p>
        </div>
    );
}
