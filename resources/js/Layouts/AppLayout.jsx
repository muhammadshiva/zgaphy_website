import ApplicationLogo from '@/Components/ApplicationLogo';
import { Toaster } from '@/Components/ui/Toaster';
import { Button } from '@/Components/ui/button';
import { Head, Link } from '@inertiajs/react';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import {
    IconBoxMultiple,
    IconCategory,
    IconChartDots2,
    IconCircleKey,
    IconCreditCardPay,
    IconDashboard,
    IconDiscount,
    IconKeyframe,
    IconLayoutKanban,
    IconLayoutSidebar,
    IconLogout,
    IconPaint,
    IconRoute,
    IconUser,
    IconUsers,
    IconVersions,
} from '@tabler/icons-react';
import {
    Avatar,
    AvatarFallback,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '..';
import NavLink from '../Components/NavLink';
import NavLinkResponsive from '../Components/NavLinkResponsive';

export default function AppLayout({ title, children }) {
    return (
        <>
            <Head title={title} />

            <Toaster position="top-center" richColors />

            {/* Full Screen */}
            <div className="flex min-h-screen w-full flex-row">
                {/* Sidebar */}
                <div className="hidden w-1/5 border-r lg:block">
                    {/* Sidebar Content */}
                    <div className="flex h-full min-h-screen flex-col gap-2">
                        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                            <ApplicationLogo />
                        </div>

                        <div className="flex-1">
                            <nav className="grid items-start px-2 text-sm font-semibold lg:px-4">
                                <div className="px-3 py-2 text-sm font-semibold text-foreground">Dashboard</div>

                                <NavLink url="#" title="Dashboard" icon={IconDashboard}></NavLink>

                                <div className="px-3 py-2 text-sm font-semibold text-foreground">Statistic</div>

                                <NavLink url="#" title="Sales Report Statistics" icon={IconChartDots2}></NavLink>

                                <div className="px-3 py-2 text-sm font-semibold text-foreground">Master</div>

                                <NavLink url="#" title="Categories" icon={IconCategory}></NavLink>
                                <NavLink url="#" title="Artworks" icon={IconPaint}></NavLink>
                                <NavLink url="#" title="Collectors" icon={IconBoxMultiple}></NavLink>
                                <NavLink url="#" title="Users" icon={IconUsers}></NavLink>

                                <div className="px-3 py-2 text-sm font-semibold text-foreground">
                                    Roles and Permission
                                </div>

                                <NavLink url="#" title="Roles" icon={IconCircleKey}></NavLink>
                                <NavLink url="#" title="Permissions" icon={IconVersions}></NavLink>
                                <NavLink url="#" title="Assign Roles" icon={IconKeyframe}></NavLink>
                                <NavLink url="#" title="Assign Permissions" icon={IconLayoutKanban}></NavLink>
                                <NavLink url="#" title="Route Access" icon={IconRoute}></NavLink>

                                <div className="px-3 py-2 text-sm font-semibold text-foreground">Transaction</div>

                                <NavLink url="#" title="Sales" icon={IconCreditCardPay}></NavLink>

                                <div className="px-3 py-2 text-sm font-semibold text-foreground">Others</div>

                                <NavLink url="#" title="Discount" icon={IconDiscount}></NavLink>
                                <NavLink url={route('profile.edit')} title="Profile" icon={IconUser}></NavLink>
                                <NavLink url="#" title="Logout" icon={IconLogout}></NavLink>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex w-full flex-col lg:w-4/5">
                    <header className="flex h-12 items-center justify-between gap-4 border-b px-4 lg:h-[60px] lg:justify-end lg:px-6">
                        {/* Sidebar Responsive */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                                    <IconLayoutSidebar className="size-5" />
                                </Button>
                            </SheetTrigger>

                            <SheetContent side="left" className="flex max-h-screen flex-col overflow-y-auto">
                                <SheetHeader>
                                    <SheetTitle>
                                        <VisuallyHidden.Root>Sidebar Responsive</VisuallyHidden.Root>
                                    </SheetTitle>

                                    <SheetDescription>
                                        <VisuallyHidden.Root>Sidebar Responsive</VisuallyHidden.Root>
                                    </SheetDescription>
                                </SheetHeader>

                                {/* Sidebar Menu Responsive */}
                                <nav className="grid gap-6 text-lg font-medium">
                                    <ApplicationLogo />
                                    <nav className="grid items-start text-sm font-semibold lg:px-4">
                                        <div className="px-3 py-2 text-sm font-semibold text-foreground">Dashboard</div>

                                        <NavLinkResponsive url="#" title="Dashboard" icon={IconDashboard} />

                                        <div className="px-3 py-2 text-sm font-semibold text-foreground">Statistic</div>

                                        <NavLinkResponsive
                                            url="#"
                                            title="Sales Report Statistics"
                                            icon={IconChartDots2}
                                        />

                                        <div className="px-3 py-2 text-sm font-semibold text-foreground">Master</div>

                                        <NavLinkResponsive url="#" title="Categories" icon={IconCategory} />
                                        <NavLinkResponsive url="#" title="Artworks" icon={IconPaint} />
                                        <NavLinkResponsive url="#" title="Collectors" icon={IconBoxMultiple} />
                                        <NavLinkResponsive url="#" title="Users" icon={IconUsers} />

                                        <div className="px-3 py-2 text-sm font-semibold text-foreground">
                                            Roles and Permission
                                        </div>

                                        <NavLinkResponsive url="#" title="Roles" icon={IconCircleKey} />
                                        <NavLinkResponsive url="#" title="Permissions" icon={IconVersions} />
                                        <NavLinkResponsive url="#" title="Assign Roles" icon={IconKeyframe} />
                                        <NavLinkResponsive url="#" title="Assign Permissions" icon={IconLayoutKanban} />
                                        <NavLinkResponsive url="#" title="Route Access" icon={IconRoute} />

                                        <div className="px-3 py-2 text-sm font-semibold text-foreground">
                                            Transaction
                                        </div>

                                        <NavLinkResponsive url="#" title="Sales" icon={IconCreditCardPay} />

                                        <div className="px-3 py-2 text-sm font-semibold text-foreground">Others</div>

                                        <NavLinkResponsive url="#" title="Discount" icon={IconDiscount} />
                                        <NavLinkResponsive
                                            url={route('profile.edit')}
                                            title="Profile"
                                            icon={IconUser}
                                        />
                                        <NavLinkResponsive url="#" title="Logout" icon={IconLogout} />
                                    </nav>
                                </nav>
                            </SheetContent>
                        </Sheet>

                        {/* Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex gap-x-2">
                                    <span>Hi, Zgaphy</span>
                                    <Avatar>
                                        <AvatarFallback>B</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem>Profile</DropdownMenuItem>

                                <DropdownMenuItem asChild>
                                    <Link href="#">Logout</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </header>

                    <main className="w-full">
                        <div className="relative">
                            <div
                                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                                aria-hidden="true"
                            >
                                <div
                                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange-100 to-orange-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                                    style={{
                                        clipPath:
                                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                    }}
                                />
                            </div>

                            <div className="gap-4 p-4 lg:gap-6">{children}</div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
