import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from "@inertiajs/react";
import VisualFile from './VisualFile';
import AudioFile from './AudioFile';

export default function Playlist({ auth, listFile, visualListFile, audioListFile }) {
    return(
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h3 className="font-normal text-white">
                    {listFile.title}
                </h3>
            }

        >
            <Head title="Neva lista de reproducción" />

            <div className="py-8">
                <div className="px-6 mx-auto max-w-12xl">
                    <div className="grid grid-cols-1 gap-4">
                        <VisualFile listFile={listFile.id} visualListFile={visualListFile} />
                        <AudioFile listFile={listFile.id} audioListFile={audioListFile} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
