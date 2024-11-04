import InputError from '@/Components/InputError';
import { Link, useForm } from '@inertiajs/react';
import { IconArrowLeft, IconPaint } from '@tabler/icons-react';
import { useRef } from 'react';
import { toast } from 'sonner';
import HeaderTitle from '../../../Components/HeaderTitle';
import { Button } from '../../../Components/ui/button';
import { Card, CardContent } from '../../../Components/ui/card';
import { Input } from '../../../Components/ui/input';
import { Label } from '../../../Components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../Components/ui/select';
import { Textarea } from '../../../Components/ui/textarea';
import AppLayout from '../../../Layouts/AppLayout';
import flashMessage from '../../../lib/utils';

export default function Create(props) {
    const fileInputCover = useRef(null);
    const fileInputQRCode = useRef(null);

    const { data, setData, reset, post, processing, errors } = useForm({
        artwork_code: '',
        title: '',
        cover: null,
        description: '',
        price: 0,
        series: '',
        frame_width: 0,
        frame_height: 0,
        category_id: null,
        qr_code_url: '',
        qr_code_image: null,
        _method: props.page_settings.method,
    });

    const onHandleChange = (e) => setData(e.target.name, e.target.value);

    const onHandleSubmit = (e) => {
        e.preventDefault();

        post(props.page_settings.action, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: (success) => {
                const flash = flashMessage(success);
                if (flash) toast[flash.type](flash.message);
            },
        });
    };

    const onHandleReset = () => {
        reset();
        fileInputCover.current.value = null;
        fileInputQRCode.current.value = null;
    };

    return (
        <div className="flex w-full flex-col pb-32">
            <div className="mb-8 flex flex-col items-start justify-between gap-y-4 lg:flex-row lg:items-center">
                <HeaderTitle
                    title={props.page_settings.title}
                    subtitle={props.page_settings.subtitle}
                    icon={IconPaint}
                />

                <Button variant="orange" size="lg" asChild>
                    <Link href={route('admin.artworks.index')}>
                        <IconArrowLeft className="size-4" />
                        Back to Artworks
                    </Link>
                </Button>
            </div>

            <Card>
                <CardContent className="p-6">
                    <form className="space-y-6" onSubmit={onHandleSubmit}>
                        <div className="grid w-full items-center gap-1">
                            <Label htmlFor="artwork_code">Artwork Code</Label>
                            <Input
                                name="artwork_code"
                                id="artwork_code"
                                type="text"
                                placeholder="Enter artwork code"
                                value={data.artwork_code}
                                onChange={onHandleChange}
                            />
                            {errors.artwork_code && <InputError message={errors.artwork_code} />}
                        </div>

                        <div className="grid w-full items-center gap-1">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                name="title"
                                id="title"
                                type="text"
                                placeholder="Enter title"
                                value={data.title}
                                onChange={onHandleChange}
                            />
                            {errors.title && <InputError message={errors.title} />}
                        </div>

                        <div className="grid w-full items-center gap-1">
                            <Label htmlFor="cover">Cover</Label>
                            <Input
                                name="cover"
                                id="cover"
                                type="file"
                                onChange={(e) => setData('cover', e.target.files[0])}
                                ref={fileInputCover}
                            />
                            {errors.cover && <InputError message={errors.cover} />}
                        </div>

                        <div className="grid w-full items-center gap-1">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                name="description"
                                id="description"
                                placeholder="Enter description"
                                value={data.description}
                                onChange={onHandleChange}
                            ></Textarea>
                            {errors.description && <InputError message={errors.description} />}
                        </div>

                        <div className="grid w-full items-center gap-1">
                            <Label htmlFor="price">Price</Label>
                            <Input
                                name="price"
                                id="price"
                                type="number"
                                placeholder="Enter price"
                                value={data.price}
                                onChange={onHandleChange}
                            />
                            {errors.price && <InputError message={errors.price} />}
                        </div>

                        <div className="grid w-full items-center gap-1">
                            <Label htmlFor="series">Series</Label>
                            <Input
                                name="series"
                                id="series"
                                type="text"
                                placeholder="Enter series"
                                value={data.series}
                                onChange={onHandleChange}
                            />
                            {errors.series && <InputError message={errors.series} />}
                        </div>

                        <div className="grid w-full items-center gap-1">
                            <Label htmlFor="frame_width">Frame Width</Label>
                            <Input
                                name="frame_width"
                                id="frame_width"
                                type="number"
                                placeholder="Enter frame width"
                                value={data.frame_width}
                                onChange={onHandleChange}
                            />
                            {errors.frame_width && <InputError message={errors.frame_width} />}
                        </div>

                        <div className="grid w-full items-center gap-1">
                            <Label htmlFor="frame_height">Frame Height</Label>
                            <Input
                                name="frame_height"
                                id="frame_height"
                                type="number"
                                placeholder="Enter frame height"
                                value={data.frame_height}
                                onChange={onHandleChange}
                            />
                            {errors.frame_height && <InputError message={errors.frame_height} />}
                        </div>

                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="category_id">Category</Label>
                            <Select defaultValue={data.category_id} onValueChange={(value) => setData('category_id', value)}>
                                <SelectTrigger>
                                    <SelectValue>
                                        {props.page_data.categories.find(
                                            (category) => category.value == data.category_id,
                                        )?.label ?? 'Choose a category'}
                                    </SelectValue>
                                </SelectTrigger>

                                <SelectContent>
                                    {props.page_data.categories.map((category, index) => (
                                        <SelectItem key={index} value={category.value}>
                                            {category.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            {errors.category_id && <InputError message={errors.category_id} />}
                        </div>

                        <div className="grid w-full items-center gap-1">
                            <Label htmlFor="stock">Stock</Label>
                            <Input
                                name="stock"
                                id="stock"
                                type="number"
                                placeholder="Enter total stock"
                                min="0"
                                value={data.stock}
                                onChange={onHandleChange}
                            />
                            {errors.stock && <InputError message={errors.stock} />}
                        </div>

                        <div className="grid w-full items-center gap-1">
                            <Label htmlFor="qr_code_url">QR Code URL</Label>
                            <Input
                                name="qr_code_url"
                                id="qr_code_url"
                                type="text"
                                placeholder="Enter QR code URL"
                                value={data.qr_code_url}
                                onChange={onHandleChange}
                            />
                            {errors.qr_code_url && <InputError message={errors.qr_code_url} />}
                        </div>

                        <div className="grid w-full items-center gap-1">
                            <Label htmlFor="qr_code_image">QR Code Image</Label>
                            <Input
                                name="qr_code_image"
                                id="qr_code_image"
                                type="file"
                                onChange={(e) => setData('qr_code_image', e.target.files[0])}
                                ref={fileInputQRCode}
                            />
                            {errors.qr_code_image && <InputError message={errors.qr_code_image} />}
                        </div>

                        <div className="flex justify-end gap-x-2">
                            <Button type="button" variant="ghost" size="lg" onClick={onHandleReset}>
                                Reset
                            </Button>

                            <Button type="submit" variant="orange" size="lg" disabled={processing}>
                                Save
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

Create.layout = (page) => <AppLayout children={page} title={page.props.page_settings.title} />;
