// CardProduct.jsx
export default function CardCollectorUser({ title, subtitle, onViewDetails }) {
    return (
        <div className="flex flex-col items-center gap-y-3">
            <img
                className="p-3 transition-transform duration-300 group-hover:scale-105"
                src="/images/landing/ilustration-artwork.png"
                alt="product image"
            />

            <div className="flex flex-col">
                <p className="text-center text-[26px] font-extrabold text-[#3D3D3D]">{title}</p>
                <p className="text-center text-[20px] font-semibold text-[#3D3D3D]">{subtitle}</p>
            </div>
        </div>
    );
}
