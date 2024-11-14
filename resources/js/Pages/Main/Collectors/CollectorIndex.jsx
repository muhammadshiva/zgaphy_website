import { useState } from 'react';
import CardCollector from '../../../components/main/CardCollector';
import InputSearch from '../../../components/main/InputSearch';
import CollectorDetail from './CollectorDetail';

export default function CollectorIndex() {
    const [isOpen, setIsOpen] = useState(false);

    const renderListArtworks = () => {
        return (
            <div className="max-w-screen bg-white px-5 lg:px-40">
                <div className="flex flex-row items-center justify-between p-10">
                    <div className="flex flex-col">
                        <h2 class="text-outline mb-2 font-poppins text-3xl font-extrabold leading-none tracking-tight text-orange-500 dark:text-white md:text-5xl">
                            List Collectors
                        </h2>
                        <h3 className="text-[18px] text-indigo-950">Get the best artwork you deserve</h3>
                    </div>

                    <InputSearch title={'artworks'} />
                </div>

                <div class="container mx-auto p-10">
                    {/* <!-- ZGAPHY WARRIOR Section --> */}
                    <h2 class="mb-6 text-2xl font-bold">ZGAPHY WARRIOR</h2>
                    <div class="grid grid-cols-2 gap-10 pb-10 lg:grid-cols-4">
                        {/* <!-- Card Product --> */}
                        <CardCollector onViewDetails={() => setIsOpen(true)} title={'FIGHT AGAINTS A.I'} />
                        <CardCollector
                            onViewDetails={() => setIsOpen(true)}
                            title={'Noteworthy technology acquisitions 2021'}
                        />
                        <CardCollector onViewDetails={() => setIsOpen(true)} title={'FIGHT AGAINTS A.I'} />
                        <CardCollector
                            onViewDetails={() => setIsOpen(true)}
                            title={'Noteworthy technology acquisitions 2021'}
                        />
                    </div>

                    {/* <!-- ZGAPHY MACHINE Section --> */}
                    <h2 class="mb-4 mt-10 text-2xl font-bold">ZGAPHY MACHINE</h2>
                    <div class="grid grid-cols-2 gap-10 pb-10 lg:grid-cols-4">
                        {/* <!-- Card Product --> */}
                        <CardCollector onViewDetails={() => setIsOpen(true)} title={'FIGHT AGAINTS A.I'} />
                        <CardCollector
                            onViewDetails={() => setIsOpen(true)}
                            title={'Noteworthy technology acquisitions 2021'}
                        />
                        <CardCollector onViewDetails={() => setIsOpen(true)} title={'FIGHT AGAINTS A.I'} />
                        <CardCollector
                            onViewDetails={() => setIsOpen(true)}
                            title={'Noteworthy technology acquisitions 2021'}
                        />
                    </div>

                    {/* <!-- ZGAPHY MACHINE Section --> */}
                    <h2 class="mb-4 mt-10 text-2xl font-bold">ZGAPHY MACHINE</h2>
                    <div class="grid grid-cols-2 gap-10 pb-10 lg:grid-cols-4">
                        {/* <!-- Card Product --> */}
                        <CardCollector onViewDetails={() => setIsOpen(true)} title={'FIGHT AGAINTS A.I'} />
                        <CardCollector
                            onViewDetails={() => setIsOpen(true)}
                            title={'Noteworthy technology acquisitions 2021'}
                        />
                        <CardCollector onViewDetails={() => setIsOpen(true)} title={'FIGHT AGAINTS A.I'} />
                        <CardCollector
                            onViewDetails={() => setIsOpen(true)}
                            title={'Noteworthy technology acquisitions 2021'}
                        />
                    </div>
                </div>
            </div>
        );
    };

    return <>{isOpen ? <CollectorDetail setIsOpen={setIsOpen} /> : renderListArtworks()};</>;
}
