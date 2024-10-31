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
import NavLink from '../../Components/NavLink';

export default function Sidebar({ url, auth }) {
    return (
        <nav className="grid items-start px-2 text-sm font-semibold lg:px-4">
            <div className="px-3 py-2 text-sm font-semibold text-foreground">Dashboard</div>

            <NavLink
                url={route('dashboard')}
                active={url.startsWith('/dashboard')}
                title="Dashboard"
                icon={IconDashboard}
            ></NavLink>

            <div className="px-3 py-2 text-sm font-semibold text-foreground">Statistic</div>

            <NavLink url="#" title="Sales Report Statistics" icon={IconChartDots2}></NavLink>

            <div className="px-3 py-2 text-sm font-semibold text-foreground">Master</div>

            <NavLink url="#" title="Categories" icon={IconCategory}></NavLink>
            <NavLink url="#" title="Artworks" icon={IconPaint}></NavLink>
            <NavLink url="#" title="Collectors" icon={IconBoxMultiple}></NavLink>
            <NavLink url="#" title="Users" icon={IconUsers}></NavLink>

            <div className="px-3 py-2 text-sm font-semibold text-foreground">Roles and Permission</div>

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
            <NavLink
                url={route('logout')}
                title="Logout"
                icon={IconLogout}
                method="post"
                as="button"
                className="w-full"
            ></NavLink>
        </nav>
    );
}
