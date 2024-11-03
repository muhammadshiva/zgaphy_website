import InputError from '@/Components/InputError';
import { Link, useForm } from '@inertiajs/react';
import { IconArrowLeft, IconCategory } from '@tabler/icons-react';
import { useRef } from 'react';
import { toast } from 'sonner';
import HeaderTitle from '../../../Components/HeaderTitle';
import { Button } from '../../../Components/ui/button';
import { Card, CardContent } from '../../../Components/ui/card';
import { Input } from '../../../Components/ui/input';
import { Label } from '../../../Components/ui/label';
import { Textarea } from '../../../Components/ui/textarea';
import AppLayout from '../../../Layouts/AppLayout';
import flashMessage from '../../../lib/utils';

export default function Create(props) {
    const fileInputCover = useRef(null);

    const { data, setData, reset, post, processing, errors } = useForm({
        name: '',
        description: '',
        cover: null,
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
    };

    return (
        <div className="flex w-full flex-col pb-32">
            <div className="mb-8 flex flex-col items-start justify-between gap-y-4 lg:flex-row lg:items-center">
                <HeaderTitle
                    title={props.page_settings.title}
                    subtitle={props.page_settings.subtitle}
                    icon={IconCategory}
                />

                <Button variant="orange" size="lg" asChild>
                    <Link href={route('admin.categories.index')}>
                        <IconArrowLeft className="size-4" />
                        Back to Categories
                    </Link>
                </Button>
            </div>

            <Card>
                <CardContent className="p-6">
                    <form className="space-y-6" onSubmit={onHandleSubmit}>
                        <div className="5 grid w-full items-center gap-1">
                            <Label htmlFor="name">Name</Label>

                            <Input
                                name="name"
                                id="name"
                                type="text"
                                placeholder="Input category name"
                                value={data.name}
                                onChange={onHandleChange}
                            />

                            {errors.name && <InputError message={errors.name} />}
                        </div>

                        <div className="5 grid w-full items-center gap-1">
                            <Label htmlFor="description">Description</Label>

                            <Textarea
                                name="description"
                                id="description"
                                placeholder="Input category description"
                                value={data.description}
                                onChange={onHandleChange}
                            ></Textarea>

                            {errors.description && <InputError message={errors.description} />}
                        </div>

                        <div className="5 grid w-full items-center gap-1">
                            <Label htmlFor="cover">Cover</Label>

                            <Input
                                name="cover"
                                id="cover"
                                type="file"
                                onChange={(e) => setData(e.target.name, e.target.files[0])}
                                ref={fileInputCover}
                            />

                            {errors.cover && <InputError message={errors.cover} />}
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