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
import NavLink from '../../../components/inertia/NavLink';

export default function Sidebar({ url, auth }) {
    return (
        <nav className="grid items-start px-2 text-sm font-semibold lg:px-4">
            <div className="px-3 py-2 text-sm font-semibold text-foreground">Dashboard</div>

            <NavLink
                url={route('dashboard')}
                active={url.startsWith('/dashboard')}
                title="Dashboard"
                icon={IconDashboard}
            />

            <div className="px-3 py-2 text-sm font-semibold text-foreground">Statistic</div>

            <NavLink url="#" title="Sales Report Statistics" icon={IconChartDots2} />

            <div className="px-3 py-2 text-sm font-semibold text-foreground">Master</div>

            <NavLink
                url={route('admin.categories.index')}
                active={url.startsWith('/admin/categories')}
                title="Categories"
                icon={IconCategory}
            />
            <NavLink
                url={route('admin.artworks.index')}
                active={url.startsWith('/admin/artworks')}
                title="Artworks"
                icon={IconPaint}
            />
            <NavLink
                url={route('admin.collectors.index')}
                active={url.startsWith('/admin/collectors')}
                title="Collectors"
                icon={IconBoxMultiple}
            />
            <NavLink
                url={route('admin.users.index')}
                active={url.startsWith('/admin/users')}
                title="Users"
                icon={IconUsers}
            />

            <div className="px-3 py-2 text-sm font-semibold text-foreground">Roles and Permission</div>

            <NavLink url="#" title="Roles" icon={IconCircleKey} />
            <NavLink url="#" title="Permissions" icon={IconVersions} />
            <NavLink url="#" title="Assign Roles" icon={IconKeyframe} />
            <NavLink url="#" title="Assign Permissions" icon={IconLayoutKanban} />
            <NavLink url="#" title="Route Access" icon={IconRoute} />

            <div className="px-3 py-2 text-sm font-semibold text-foreground">Transaction</div>

            <NavLink url="#" title="Sales" icon={IconCreditCardPay} />

            <div className="px-3 py-2 text-sm font-semibold text-foreground">Others</div>

            <NavLink url="#" title="Discount" icon={IconDiscount} />
            <NavLink url={route('profile.edit')} title="Profile" icon={IconUser} />
            <NavLink
                url={route('logout')}
                title="Logout"
                icon={IconLogout}
                method="post"
                as="button"
                className="w-full"
            />
        </nav>
    );
}
