export default function CartItem() {
    return (
        <div className="flex flex-row items-center justify-between px-5">
            <div class="flex items-center gap-x-4">
                <input
                    checked
                    id="checkbox"
                    type="checkbox"
                    value=""
                    class="h-6 w-6 rounded border-gray-300 bg-gray-100 text-orange-500 focus:ring-2 focus:ring-orange-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-orange-600"
                />
                <img
                    className="h-[120px] w-[120px] p-4 transition-transform duration-300 group-hover:scale-105"
                    src="/images/landing/ilustration-artwork.png"
                    alt="product image"
                />
                <div className="flex flex-col">
                    <p className="text-[18px]">Art Warrior</p>
                    <p className="text-[18px] font-semibold">$37.55</p>
                </div>
            </div>

            <div className="flex gap-x-10">
                {/* <!-- Quantity controls --> */}
                <div class="flex items-center gap-x-4 space-x-2">
                    <button class="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-orange-500">
                        -
                    </button>
                    <div class="text-lg font-semibold">1</div>
                    <button class="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-orange-500">
                        +
                    </button>
                </div>

                <p className="font-medium text-red-500">Delete</p>
            </div>
        </div>
    );
}
