import { Link } from '@inertiajs/react';
import {cn} from '@/lib/utils';

export default function NavLink({active = false, url = '#', title, icon: Icon, ...props}) {
    return (
        <Link
            {...props}

            href={url}

            className={cn(
                active ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-orange-500 font-semibold text-white hover:text-white' : 'text-muted-foreground hover:text-orange-500',
                'flex items-center gap-3 rounded-lg font-medium transition-all'
            )}
        >
            <Icon className='w-4 h-4'/>
            {title}
        </Link>
    )
}
