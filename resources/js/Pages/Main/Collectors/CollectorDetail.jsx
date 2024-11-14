import { useState } from 'react';
import CardCollectorUser from '../../../components/main/CardCollectorUser';

export default function CollectorIndex() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="max-w-screen bg-white px-5 lg:px-40">
            <div className="flex flex-col items-center">
                <h1 class="text-outline mt-10 font-blaka text-3xl font-extrabold text-orange-500 dark:text-orange-500 md:text-7xl">
                    I'm Collector!!!
                </h1>

                <div class="mx-auto grid grid-cols-2 gap-10 p-10 pb-10 lg:grid-cols-4">
                    {/* <!-- Card Product --> */}
                    <CardCollectorUser title={'JI98KXF4'} subtitle={'David, Yogyakarta ID'} />
                    <CardCollectorUser title={'JI98KXF4'} subtitle={'David, Yogyakarta ID'} />
                    <CardCollectorUser title={'JI98KXF4'} subtitle={'David, Yogyakarta ID'} />
                    <CardCollectorUser title={'JI98KXF4'} subtitle={'David, Yogyakarta ID'} />

                    <CardCollectorUser title={'JI98KXF4'} subtitle={'David, Yogyakarta ID'} />
                    <CardCollectorUser title={'JI98KXF4'} subtitle={'David, Yogyakarta ID'} />
                    <CardCollectorUser title={'JI98KXF4'} subtitle={'David, Yogyakarta ID'} />
                    <CardCollectorUser title={'JI98KXF4'} subtitle={'David, Yogyakarta ID'} />

                    <CardCollectorUser title={'JI98KXF4'} subtitle={'David, Yogyakarta ID'} />
                    <CardCollectorUser title={'JI98KXF4'} subtitle={'David, Yogyakarta ID'} />
                </div>
            </div>
        </div>
    );
}
