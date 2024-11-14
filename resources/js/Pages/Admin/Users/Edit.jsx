import { Link, useForm } from '@inertiajs/react';
import { IconArrowLeft, IconUsersGroup } from '@tabler/icons-react';
import { useRef } from 'react';
import { toast } from 'sonner';
import HeaderTitle from '../../../components/inertia/HeaderTitle';
import InputError from '../../../components/inertia/InputError';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import AppLayout from '../../../layouts/Admin/AppLayout';
import flashMessage from '../../../lib/utils';

export default function Edit(props) {
    const fileInputAvatar = useRef(null);

    const { data, setData, reset, post, processing, errors } = useForm({
        name: props.user.name ?? '',
        email: props.user.email ?? '',
        password: '',
        password_confirmation: '',
        avatar: null,
        gender: props.user.gender ?? null,
        date_of_birth: props.user.date_of_birth ?? '',
        address: props.user.address ?? '',
        phone: props.user.phone ?? '',
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
        fileInputAvatar.current.value = null;
    };

    return (
        <div className="flex w-full flex-col pb-32">
            <div className="mb-8 flex flex-col items-start justify-between gap-y-4 lg:flex-row lg:items-center">
                <HeaderTitle
                    title={props.page_settings.title}
                    subtitle={props.page_settings.subtitle}
                    icon={IconUsersGroup}
                />

                <Button variant="orange" size="lg" asChild>
                    <Link href={route('admin.users.index')}>
                        <IconArrowLeft className="size-4" />
                        Back to Users
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
                                placeholder="Input name"
                                value={data.name}
                                onChange={onHandleChange}
                            />

                            {errors.name && <InputError message={errors.name} />}
                        </div>

                        <div className="5 grid w-full items-center gap-1">
                            <Label htmlFor="email">Email</Label>

                            <Input
                                name="email"
                                id="email"
                                type="email"
                                placeholder="Input email"
                                value={data.email}
                                onChange={onHandleChange}
                            />

                            {errors.email && <InputError message={errors.email} />}
                        </div>

                        <div className="5 grid w-full items-center gap-1">
                            <Label htmlFor="password">Password</Label>

                            <Input
                                name="password"
                                id="password"
                                type="password"
                                placeholder="Input password"
                                value={data.password}
                                onChange={onHandleChange}
                            />

                            {errors.password && <InputError message={errors.password} />}
                        </div>

                        <div className="5 grid w-full items-center gap-1">
                            <Label htmlFor="password_confirmation">Confirm Password</Label>

                            <Input
                                name="password_confirmation"
                                id="password_confirmation"
                                type="password"
                                placeholder="Input password confirmation"
                                value={data.password_confirmation}
                                onChange={onHandleChange}
                            />

                            {errors.password_confirmation && <InputError message={errors.password_confirmation} />}
                        </div>

                        <div className="5 grid w-full items-center gap-1">
                            <Label htmlFor="phone">Phone Number</Label>

                            <Input
                                name="phone"
                                id="phone"
                                type="text"
                                placeholder="Input phone number"
                                value={data.phone}
                                onChange={onHandleChange}
                            />

                            {errors.phone && <InputError message={errors.phone} />}
                        </div>

                        <div className="5 grid w-full items-center gap-1">
                            <Label htmlFor="address">Address</Label>

                            <Input
                                name="address"
                                id="address"
                                type="text"
                                placeholder="Input address number"
                                value={data.address}
                                onChange={onHandleChange}
                            />

                            {errors.address && <InputError message={errors.address} />}
                        </div>

                        <div className="5 grid w-full items-center gap-1">
                            <Label htmlFor="avatar">Avatar</Label>

                            <Input
                                name="avatar"
                                id="avatar"
                                type="file"
                                onChange={(e) => setData(e.target.name, e.target.files[0])}
                                ref={fileInputAvatar}
                            />

                            {errors.avatar && <InputError message={errors.avatar} />}
                        </div>

                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="gender">Gender</Label>
                            <Select defaultValue={data.gender} onValueChange={(value) => setData('gender', value)}>
                                <SelectTrigger>
                                    <SelectValue>
                                        {props.genders.find((gender) => gender.value == data.gender)?.label ??
                                            'Choose a gender'}
                                    </SelectValue>
                                </SelectTrigger>

                                <SelectContent>
                                    {props.genders.map((gender, index) => (
                                        <SelectItem key={index} value={gender.value}>
                                            {gender.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            {errors.gender && <InputError message={errors.gender} />}
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

Edit.layout = (page) => <AppLayout children={page} title={page.props.page_settings.title} />;
