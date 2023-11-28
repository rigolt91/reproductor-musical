import DefaultButton from '@/Components/DefaultButton';
import FileInput from '@/Components/FileInput';
import DeleteIcon from '@/Components/Icons/DeleteIcon';
import FileIcon from '@/Components/Icons/FileIcon';
import SoundIcon from '@/Components/Icons/SoundIcon';
import NavLink from '@/Components/NavLink';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from "@inertiajs/react";
import { Card, CardBody, CardHeader, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from '@nextui-org/react';
import { useRef } from 'react';
import CreateVisualFile from './Partials/NewPlaylist/CreateVisualFile';
import CreateAudioFile from './Partials/NewPlaylist/CreateAudioFile';

export default function NewPlaylist({ auth, listFile }) {
    const titleInput = useRef();
    const fileInput = useRef();

    const {data, setData, post, errors, processing, reset} = useForm({
        title: '',
        file: '',
    });

    console.log(listFile);

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
                        <CreateVisualFile />
                        <CreateAudioFile />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
