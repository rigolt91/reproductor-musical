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

export default function NewPlaylist({ auth }) {
    const titleInput = useRef();
    const fileInput = useRef();

    const {data, setData, post, errors, processing, reset} = useForm({
        title: '',
        file: '',
    });

    return(
        <AuthenticatedLayout
            user={auth.user}
            header={
                <NavLink href={route('new-playlist')} className="text-white hover:text-gray-300 active:text-gray-300">
                    Nueva lista de reproducción
                </NavLink>
            }

        >
            <Head title="Neva lista de reproducción" />

            <div className="py-8">
                <div className="px-6 mx-auto max-w-12xl sm:px-6 lg:px-6">
                    <div className="grid grid-cols-1 gap-4">
                        <CreateVisualFile />
                        <CreateAudioFile />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
