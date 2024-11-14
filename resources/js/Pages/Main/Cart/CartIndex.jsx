import CardShippingType from '../../../components/main/CardShippingType';
import { Input } from '../../../Components/ui/input';
import { Label } from '../../../Components/ui/label';
import { Select, SelectContent, SelectTrigger, SelectValue } from '../../../Components/ui/select';
import { Textarea } from '../../../Components/ui/textarea';
import CartItem from './CartItem';

export default function CartIndex() {
    return (
        <div className="w-screen bg-white">
            <div className="mx-auto max-w-screen-xl p-10">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between">
                        <div className="flex w-full flex-col">
                            <p className="pb-5 text-[20px] font-semibold text-indigo-950">Items purchased</p>

                            <CartItem />
                            <CartItem />
                            <CartItem />

                            {/* Divider */}
                            <div className="mt-3 h-[1px] w-full bg-[#C6C6C6]" />
                        </div>
                    </div>

                    <div className="flex w-full max-w-screen-xl flex-row justify-between">
                        <div className="flex w-full max-w-[600px] flex-col">
                            {/* Delivery Address */}
                            <div className="flex flex-col">
                                <p className="pt-5 text-[20px] font-semibold text-indigo-950">Delivery Address</p>
                                <p className="text-[14px] text-indigo-950">Input the correct delivery address.</p>

                                <div className="mt-3 flex flex-col gap-y-4">
                                    <div className="flex flex-col gap-y-2">
                                        <Label htmlFor="name">Name</Label>

                                        <Input
                                            name="name"
                                            id="name"
                                            type="text"
                                            placeholder="Input name"
                                            // value={data.name}
                                            // onChange={}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-y-2">
                                        <Label htmlFor="phone">Phone</Label>

                                        <Input
                                            name="phone"
                                            id="phone"
                                            type="number"
                                            placeholder="Input phone"
                                            // value={data.name}
                                            // onChange={}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-y-2">
                                        <Label htmlFor="name">Full Address</Label>

                                        <Textarea
                                            name="description"
                                            id="description"
                                            placeholder="Input description"

                                            // value={data.name}
                                            // onChange={}
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-y-2">
                                            <Label htmlFor="category_id">Province</Label>
                                            <Select
                                            // defaultValue={data.category_id}
                                            // onValueChange={(value) => setData('category_id', value)}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue>
                                                        {/* {props.page_data.categories.find(
                                                            (category) => category.value == data.category_id,
                                                        )?.label ?? 'Choose a category'} */}
                                                        {'Choose a Province'}
                                                    </SelectValue>
                                                </SelectTrigger>

                                                <SelectContent>
                                                    {/* {props.page_data.categories.map((category, index) => (
                                                        <SelectItem key={index} value={category.value}>
                                                            {category.label}
                                                        </SelectItem>
                                                    ))} */}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="flex flex-col gap-y-2">
                                            <Label htmlFor="category_id">City</Label>
                                            <Select
                                            // defaultValue={data.category_id}
                                            // onValueChange={(value) => setData('category_id', value)}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue>
                                                        {/* {props.page_data.categories.find(
                                                            (category) => category.value == data.category_id,
                                                        )?.label ?? 'Choose a category'} */}
                                                        {'Choose a City'}
                                                    </SelectValue>
                                                </SelectTrigger>

                                                <SelectContent>
                                                    {/* {props.page_data.categories.map((category, index) => (
                                                        <SelectItem key={index} value={category.value}>
                                                            {category.label}
                                                        </SelectItem>
                                                    ))} */}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="flex flex-col gap-y-2">
                                            <Label htmlFor="name">Subdistrict</Label>

                                            <Input
                                                name="name"
                                                id="name"
                                                type="text"
                                                placeholder="Input name"
                                                // value={data.name}
                                                // onChange={}
                                            />
                                        </div>

                                        <div className="flex flex-col gap-y-2">
                                            <Label htmlFor="name">Postal Code</Label>

                                            <Input
                                                name="postalCode"
                                                id="postalCode"
                                                type="number"
                                                placeholder="Input Postal Code"
                                                // value={data.name}
                                                // onChange={}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="mt-6 h-[570px] w-[1px] bg-[#C6C6C6]"></div>

                        <div className="max-w-screen flex w-[550px] flex-col">
                            {/* Shipping Cards */}
                            <div className="max-w-[600px]">
                                <div className="flex flex-col">
                                    <p className="pt-5 text-[20px] font-semibold text-indigo-950">Shipping Type</p>
                                    <p className="text-[14px] text-indigo-950">
                                        Chosse list of shipping type provided.
                                    </p>

                                    {/* Horizontal Scroll Wrapper */}
                                    <div className="mt-5 flex flex-nowrap space-x-2 overflow-x-auto">
                                        <CardShippingType />
                                        <CardShippingType />
                                        <CardShippingType />
                                        <CardShippingType />
                                        <CardShippingType />
                                        <CardShippingType />
                                    </div>
                                </div>
                            </div>

                            <p className="pt-5 text-[20px] font-semibold text-indigo-950">Purchase Summary</p>
                            <p className="text-[14px] text-indigo-950">Input the correct delivery address.</p>

                            <div className="mt-5 flex flex-col gap-y-2 rounded-lg border border-[#C6C6C6] p-5">
                                <div className="flex flex-row justify-between">
                                    {' '}
                                    <p>Total Price (3 items)</p> <p>Rp. 50.000</p>
                                </div>

                                <div className="flex flex-row justify-between">
                                    {' '}
                                    <p>Shipping Cost</p> <p>Rp. 70.000</p>
                                </div>

                                <div className="h-[1px] w-full bg-[#C6C6C6]" />

                                <div className="flex flex-row justify-between">
                                    {' '}
                                    <p className="font-bold">Total</p> <p className="font-bold">Rp. 120.000</p>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="mt-5 rounded-lg bg-orange-500 px-2 py-1 text-center text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:px-4 lg:py-2"
                            >
                                Continue Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
