import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';
import ApplicationLogo from '../../Components/ApplicationLogo';
import { Alert, AlertDescription } from '../../Components/ui/alert';
import { Button } from '../../Components/ui/button';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const onHandleSubmit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
            <div className="flex flex-col px-6 py-4">
                <ApplicationLogo size="size-12" />

                <div className="flex flex-col items-center justify-center py-12 lg:py-48">
                    <div className="mx-auto flex w-full flex-col gap-6 lg:w-1/2">
                        <div className="grid gap-2 text-center">
                            {status === 'verification-link-sent' && (
                                <Alert variant="success">
                                    <AlertDescription>
                                        A new verification link has been sent to the email address you provided during
                                        registration.
                                    </AlertDescription>
                                </Alert>
                            )}
                            <h1 className="text-3xl font-bold">Verify Email</h1>
                            <p className="text-balance text-muted-foreground">
                                Thanks for signing up! Before getting started, could you verify your email address by
                                clicking on the link we just emailed to you? If you didn't receive the email, we will
                                gladly send you another.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={onHandleSubmit}>
                            <div className="grid gap-4">
                                <Button
                                    type="submit"
                                    variant="orange"
                                    size="xl"
                                    className="w-full"
                                    disabled={processing}
                                >
                                    Verify Email Address
                                </Button>
                            </div>
                        </form>

                        <div className="mt-4 text-center text-sm">
                            <Link href={route('logout')} method="post" as="button" className="underline">
                                Logout
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

VerifyEmail.layout = (page) => <GuestLayout children={page} title="Register" />;
