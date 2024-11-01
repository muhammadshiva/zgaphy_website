import { Link } from '@inertiajs/react';

export default function ApplicationLogo({ url = '#', size = 'size-9', isTitle = true }) {
    return (
        <Link href={url} className="flex items-center gap-2">
            <img src="/images/icons/ic_zgaphy.png" alt="ic_zgaphy" className={size} />

            {isTitle && (
                <div className="flex flex-col gap-y-1">
                    <span className="font-bold leading-none text-foreground">Zgaphy</span>
                    <span className="text-xs font-medium text-muted-foreground">Where The World Gather</span>
                </div>
            )}
        </Link>
    );
}
