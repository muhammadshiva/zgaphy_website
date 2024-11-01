import InputError from '@/Components/InputError';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';
import ApplicationLogo from '../../Components/ApplicationLogo';
import { Button } from '../../Components/ui/button';
import { Input } from '../../Components/ui/input';
import { Label } from '../../Components/ui/label';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div>
            <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
                <div className="flex flex-col px-6 py-4">
                    <ApplicationLogo size="size-12" />

                    <div className="flex flex-col items-center justify-center py-12 lg:py-48">
                        <div className="mx-auto flex w-full flex-col gap-6 lg:w-1/2">
                            <div className="grid gap-2 text-center">
                                <h1 className="text-3xl font-bold">Register</h1>

                                <p className="text-balance text-muted-foreground">
                                    enter your details to create a new account
                                </p>
                            </div>

                            <form onSubmit={onHandleSubmit}>
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <div>
                                            <Label htmlFor="name" value="name">
                                                Name
                                            </Label>

                                            <Input
                                                id="name"
                                                name="name"
                                                value={data.name}
                                                className="mt-1 block w-full"
                                                placeholder="Enter your name"
                                                onChange={(e) => setData('name', e.target.value)}
                                                required
                                            />

                                            {errors.name && <InputError message={errors.name} />}
                                        </div>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="name" value="name">
                                            Email
                                        </Label>

                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            autoComplete="username"
                                            placeholder="Enter your email"
                                            onChange={(e) => setData('email', e.target.value)}
                                            required
                                        />

                                        {errors.email && <InputError message={errors.email} />}
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="name" value="name">
                                            Password
                                        </Label>

                                        <Input
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            className="mt-1 block w-full"
                                            autoComplete="new-password"
                                            placeholder="Enter your password"
                                            onChange={(e) => setData('password', e.target.value)}
                                            required
                                        />

                                        {errors.password && <InputError message={errors.password} />}
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="name" value="name">
                                            Confirm Password
                                        </Label>

                                        <Input
                                            id="password_confirmation"
                                            type="password"
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            className="mt-1 block w-full"
                                            autoComplete="new-password"
                                            placeholder="Enter your confirm password"
                                            onChange={(e) => setData('password_confirmation', e.target.value)}
                                            required
                                        />

                                        {errors.password_confirmation && (
                                            <InputError message={errors.password_confirmation} />
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        variant="orange"
                                        size="xl"
                                        className="w-full"
                                        disabled={processing}
                                    >
                                        Register
                                    </Button>
                                </div>
                            </form>
                            <div className="mt-4 text-center text-sm">
                                Already Register ?{' '}
                                <Link href={route('login')} className="underline">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden bg-muted lg:block">
                    <img
                        src="/images/login.png"
                        alt="login"
                        className="lg:min-w-screen object-fill dark:brightness-[0.4] dark:grayscale lg:min-h-screen"
                    />
                </div>
            </div>
        </div>
    );
}

Register.layout = (page) => <GuestLayout children={page} title="Register" />;
