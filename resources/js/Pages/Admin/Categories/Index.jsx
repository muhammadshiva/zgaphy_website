import { Link, router } from '@inertiajs/react';
import { AlertDialogTitle } from '@radix-ui/react-alert-dialog';
import { IconCategory, IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../Components/ui/table';
import { UseFilter } from '../../../hooks/UseFilter';
import AppLayout from '../../../Layouts/AppLayout';
import flashMessage from '../../../lib/utils';

export default function index(props) {
    const { data: categories, meta } = props.categories;

    const [params, setParams] = useState(props.state);

    UseFilter({
        route: route('admin.categories.index'),
        values: params,
        only: ['categories'],
    });

    return (
        <div className="flex w-full flex-col pb-32">
            <div className="mb-8 flex flex-col items-start justify-between gap-y-4 lg:flex-row lg:items-center">
                <HeaderTitle
                    title={props.page_settings.title}
                    subtitle={props.page_settings.subtitle}
                    icon={IconCategory}
                />

                <Button variant="orange" size="lg" asChild>
                    <Link href={route('admin.categories.create')}>
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
                    </div>
                </CardHeader>

                <CardContent className="px-0 py-0 [&-td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6">
                    <Table className="w-full">
                        <TableHeader>
                            <TableRow>
                                <TableHead>#</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Slug</TableHead>
                                <TableHead>Cover</TableHead>
                                <TableHead>Created at</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {categories.map((category, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1 + (meta.current_page - 1) * meta.per_page}</TableCell>
                                    <TableCell>{category.name}</TableCell>
                                    <TableCell>{category.slug}</TableCell>
                                    <TableCell>
                                        <Avatar>
                                            <AvatarImage src={category.cover} />
                                            <AvatarFallback>{category.name.substring(0, 1)}</AvatarFallback>
                                        </Avatar>
                                    </TableCell>
                                    <TableCell>{category.created_at}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-x-1">
                                            <Button variant="blue" size="sm" asChild>
                                                <Link href={route('admin.categories.edit', [category])}>
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
                                                            Once you delete this category, all of its resources and data
                                                            will be permanently deleted. Are you sure you want to delete
                                                            this category?
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>

                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Cancel</AlertDialogCancel>

                                                        <AlertDialogAction
                                                            onClick={() =>
                                                                router.delete(
                                                                    route('admin.categories.destroy', [category]),
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
                        categories
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
