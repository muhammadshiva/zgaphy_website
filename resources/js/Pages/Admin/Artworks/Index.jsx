import { Link, router } from '@inertiajs/react';
import { AlertDialogTitle } from '@radix-ui/react-alert-dialog';
import { IconArrowsDownUp, IconPaint, IconPencil, IconPlus, IconRefresh, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';
import { toast } from 'sonner';
import HeaderTitle from '../../../Components/HeaderTitle';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger,
} from '../../../Components/ui/alert-dialog';
import { Avatar, AvatarFallback, AvatarImage } from '../../../Components/ui/avatar';
import { Button } from '../../../Components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../../../Components/ui/card';
import { Input } from '../../../Components/ui/input';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '../../../Components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../Components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../Components/ui/table';
import { UseFilter } from '../../../hooks/UseFilter';
import AppLayout from '../../../Layouts/AppLayout';
import flashMessage from '../../../lib/utils';

export default function index(props) {
    const { data: artworks, meta } = props.artworks;

    const [params, setParams] = useState(props.state);

    const onSortable = (field) => {
        setParams({
            ...params,
            field: field,
            direction: params.direction === 'asc' ? 'desc' : 'asc',
        });
    };

    UseFilter({
        route: route('admin.artworks.index'),
        values: params,
        only: ['artworks'],
    });

    return (
        <div className="flex w-full flex-col pb-32">
            <div className="mb-8 flex flex-col items-start justify-between gap-y-4 lg:flex-row lg:items-center">
                <HeaderTitle
                    title={props.page_settings.title}
                    subtitle={props.page_settings.subtitle}
                    icon={IconPaint}
                />

                <Button variant="orange" size="lg" asChild>
                    <Link href={route('admin.artworks.create')}>
                        <IconPlus className="size-4" />
                        Add
                    </Link>
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center">
                        <Input
                            className="w-full sm:w-1/4"
                            placeholder="Search..."
                            value={params?.search}
                            onChange={(e) => setParams((prev) => ({ ...prev, search: e.target.value }))}
                        />

                        <Select value={params?.load} onValueChange={(e) => setParams({ ...params, load: e })}>
                            <SelectTrigger className="w-full sm:w-24">
                                <SelectValue placeholder="Load" />
                            </SelectTrigger>

                            <SelectContent>
                                {[10, 25, 50, 75, 100].map((number, index) => (
                                    <SelectItem key={index} value={number}>
                                        {number}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Button variant="red" onClick={() => setParams(props.state)} size="xl">
                            <IconRefresh className="size-4" />
                            Refresh
                        </Button>
                    </div>
                </CardHeader>

                <CardContent className="px-0 py-0 [&-td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6">
                    <Table className="w-full">
                        <TableHeader>
                            <TableRow>
                                <TableHead>
                                    <Button
                                        variant="ghost"
                                        className="group inline-flex"
                                        onClick={() => onSortable('id')}
                                    >
                                        #
                                        <span className="ml-2 flex-none rounded text-muted-foreground">
                                            <IconArrowsDownUp className="size-4 text-muted-foreground" />
                                        </span>
                                    </Button>
                                </TableHead>
                                <TableHead>Artwork Code</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Slug</TableHead>
                                <TableHead>Cover</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Series</TableHead>
                                <TableHead>Frame Width</TableHead>
                                <TableHead>Frame Height</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>QR Code URL</TableHead>
                                <TableHead>QR Code Image</TableHead>
                                <TableHead>Created At</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {artworks.map((artwork, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1 + (meta.current_page - 1) * meta.per_page}</TableCell>
                                    <TableCell>{artwork.artwork_code}</TableCell>
                                    <TableCell>{artwork.title}</TableCell>
                                    <TableCell>{artwork.slug}</TableCell>
                                    <TableCell>
                                        <Avatar>
                                            <AvatarImage src={artwork.cover} />
                                            <AvatarFallback>{artwork.title.substring(0, 1)}</AvatarFallback>
                                        </Avatar>
                                    </TableCell>
                                    <TableCell>{artwork.description}</TableCell>
                                    <TableCell>{artwork.price}</TableCell>
                                    <TableCell>{artwork.series}</TableCell>
                                    <TableCell>{artwork.frame_width}</TableCell>
                                    <TableCell>{artwork.frame_height}</TableCell>
                                    <TableCell>{artwork.category_id}</TableCell>
                                    <TableCell>{artwork.qr_code_url}</TableCell>
                                    <TableCell>
                                        <Avatar>
                                            <AvatarImage src={artwork.qr_code_image} />
                                            <AvatarFallback>QR</AvatarFallback>
                                        </Avatar>
                                    </TableCell>
                                    <TableCell>{artwork.created_at}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-x-1">
                                            <Button variant="blue" size="sm" asChild>
                                                <Link href={route('admin.artworks.edit', [artwork])}>
                                                    <IconPencil className="size-4" />
                                                </Link>
                                            </Button>

                                            <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <Button variant="red" size="sm">
                                                        <IconTrash className="size-4" />
                                                    </Button>
                                                </AlertDialogTrigger>

                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>Delete</AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            Once you delete this artwork, all of its resources and data
                                                            will be permanently deleted. Are you sure you want to delete
                                                            this artwork?
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>

                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                        <AlertDialogAction
                                                            onClick={() =>
                                                                router.delete(
                                                                    route('admin.artworks.destroy', [artwork]),
                                                                    {
                                                                        preserveScroll: true,
                                                                        preserveState: true,
                                                                        onSuccess: (success) => {
                                                                            const flash = flashMessage(success);

                                                                            if (flash) toast[flash.type](flash.message);
                                                                        },
                                                                    },
                                                                )
                                                            }
                                                        >
                                                            Continue
                                                        </AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="flex w-full flex-col items-center justify-between border-t py-2 lg:flex-row">
                    <p className="mb-2 text-sm text-muted-foreground">
                        Showing <span className="font-medium text-orange-500">{meta.from ?? 0}</span> from {meta.total}{' '}
                        artworks
                    </p>

                    <div className="overflow-x-auto">
                        {meta.has_pages && (
                            <Pagination>
                                <PaginationContent className="flex flex-wrap justify-center lg:justify-end">
                                    {meta.links.map((link, index) => (
                                        <PaginationItem key={index} className="mx-1 mb-1 lg:mb-0">
                                            <PaginationLink href={link.url} isActive={link.active}>
                                                {link.label}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}
                                </PaginationContent>
                            </Pagination>
                        )}
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

index.layout = (page) => <AppLayout children={page} title={page.props.page_settings.title} />;
