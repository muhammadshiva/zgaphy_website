import InputError from '@/Components/InputError';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';
import ApplicationLogo from '../../Components/ApplicationLogo';
import { Alert, AlertDescription } from '../../Components/ui/alert';
import { Button } from '../../Components/ui/button';
import { Checkbox } from '../../Components/ui/checkbox';
import { Input } from '../../Components/ui/input';
import { Label } from '../../Components/ui/label';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
            <div className="flex flex-col px-6 py-4">
                <ApplicationLogo size="size-12" />

                <div className="flex flex-col items-center justify-center py-12 lg:py-48">
                    <div className="mx-auto flex w-full flex-col gap-6 lg:w-1/2">
                        <div className="grid gap-2 text-center">
                            {status && (
                                <Alert variant="success">
                                    <AlertDescription>{status}</AlertDescription>
                                </Alert>
                            )}

                            <h1 className="text-3xl font-bold">Login</h1>

                            <p className="text-balance text-muted-foreground">
                                Enter your email below to login to your account.
                            </p>
                        </div>

                        <form onSubmit={onHandleSubmit}>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email" value="Email">
                                        Email
                                    </Label>

                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        placeholder="Enter your email"
                                        onChange={(e) => setData(e.target.name, e.target.value)}
                                    />

                                    {errors.email && <InputError message={errors.email} />}
                                </div>

                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>

                                        {canResetPassword && (
                                            <Link
                                                href={route('password.request')}
                                                className="ml-auto inline-block text-sm underline"
                                            >
                                                Forgot Password ?
                                            </Link>
                                        )}
                                    </div>

                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        autoComplete="new-password"
                                        placeholder="Enter your password"
                                        onChange={(e) => setData(e.target.name, e.target.value)}
                                    />

                                    {errors.password && <InputError message={errors.password} />}
                                </div>

                                <div className="grid gap-2">
                                    <div className="items-top flex space-x-2">
                                        <Checkbox
                                            id="remember"
                                            name="remember"
                                            checked={data.remember}
                                            onCheckedChange={(checked) => setData('remember', checked)}
                                        />

                                        <div className="grid gap-1.5 leading-none">
                                            <Label htmlFor="remember">Remember Me</Label>
                                        </div>
                                    </div>
                                    {errors.remember && <InputError message={errors.remember} />}
                                </div>

                                <Button
                                    type="submit"
                                    variant="orange"
                                    size="xl"
                                    className="w-full"
                                    disabled={processing}
                                >
                                    Login
                                </Button>
                            </div>
                        </form>

                        <div className="mt-4 text-center text-sm">
                            Don't have an account ?{' '}
                            <Link href={route('register')} className="underline">
                                Register
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
    );
}

Login.layout = (page) => <GuestLayout children={page} title="Login" />;
