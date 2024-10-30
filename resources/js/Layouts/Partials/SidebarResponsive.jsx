import ApplicationLogo from '@/Components/ApplicationLogo';
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
    IconLogout,
    IconPaint,
    IconRoute,
    IconUser,
    IconUsers,
    IconVersions,
} from '@tabler/icons-react';
import NavLinkResponsive from '../../Components/NavLinkResponsive';

export default function SidebarResponsive({ url, auth }) {
    return (
        <nav className="grid gap-6 text-lg font-medium">
            <ApplicationLogo />
            <nav className="grid items-start text-sm font-semibold lg:px-4">
                <div className="px-3 py-2 text-sm font-semibold text-foreground">Dashboard</div>

                <NavLinkResponsive
                    url={route('dashboard')}
                    active={url.startsWith('/dashboard')}
                    title="Dashboard"
                    icon={IconDashboard}
                />

                <div className="px-3 py-2 text-sm font-semibold text-foreground">Statistic</div>

                <NavLinkResponsive url="#" title="Sales Report Statistics" icon={IconChartDots2} />

                <div className="px-3 py-2 text-sm font-semibold text-foreground">Master</div>

                <NavLinkResponsive url="#" title="Categories" icon={IconCategory} />
                <NavLinkResponsive url="#" title="Artworks" icon={IconPaint} />
                <NavLinkResponsive url="#" title="Collectors" icon={IconBoxMultiple} />
                <NavLinkResponsive url="#" title="Users" icon={IconUsers} />

                <div className="px-3 py-2 text-sm font-semibold text-foreground">Roles and Permission</div>

                <NavLinkResponsive url="#" title="Roles" icon={IconCircleKey} />
                <NavLinkResponsive url="#" title="Permissions" icon={IconVersions} />
                <NavLinkResponsive url="#" title="Assign Roles" icon={IconKeyframe} />
                <NavLinkResponsive url="#" title="Assign Permissions" icon={IconLayoutKanban} />
                <NavLinkResponsive url="#" title="Route Access" icon={IconRoute} />

                <div className="px-3 py-2 text-sm font-semibold text-foreground">Transaction</div>

                <NavLinkResponsive url="#" title="Sales" icon={IconCreditCardPay} />

                <div className="px-3 py-2 text-sm font-semibold text-foreground">Others</div>

                <NavLinkResponsive url="#" title="Discount" icon={IconDiscount} />
                <NavLinkResponsive url={route('profile.edit')} title="Profile" icon={IconUser} />
                <NavLinkResponsive url={route('logout')} title="Logout" icon={IconLogout} method='post' as='button' className='w-full'></NavLinkResponsive>
            </nav>
        </nav>
    );
}
