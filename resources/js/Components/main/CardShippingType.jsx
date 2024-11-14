export default function CardShippingType() {
    return (
        <div class="flex min-w-[180px] flex-col items-center gap-y-1 rounded-md border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="flex flex-col items-center gap-y-[4px] p-2">
                <a href="#">
                    <p class="text-center text-[16px] font-medium text-indigo-950 dark:text-white">
                        Pos Indonesia (POS)
                    </p>
                </a>
                <p class="text-[14px] font-bold text-gray-600 dark:text-gray-400">Rp 80.000</p>
                <p class="text-[12px] font-semibold text-gray-600 dark:text-gray-400">1 - 2 Hari</p>
                <p class="text-[12px] font-semibold text-gray-600 dark:text-gray-400">Paket Kilat Khusus</p>
            </div>

            <a
                href="#"
                class="mt-1 inline-flex w-full justify-center bg-orange-500 px-3 py-2 text-[12px] text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-500 dark:focus:ring-orange-600"
            >
                Add as Shipping
            </a>
        </div>
    );
}
