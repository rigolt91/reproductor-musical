import FileInput from '@/Components/FileInput';
import NavLink from '@/Components/NavLink';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from "@inertiajs/react";
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { useRef } from 'react';

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
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <Card radius="sm" shadow="sm" className="w-full">
                            <CardHeader className="border-b bg-primary">
                                <h3 className="font-bold text-white text-md">Archivos Visuales</h3>
                            </CardHeader>
                            <CardBody>
                                <div className="mb-2">
                                    <TextInput
                                        id="title"
                                        label="Título"
                                        baseRef={titleInput}
                                        value={data.title}
                                        type="text"
                                        autoComplete="title"
                                        errorMessage={errors.title}
                                    />
                                </div>
                                <div className="mb-2">
                                    <FileInput
                                        id="file_upload"
                                        label="Subir archivo"
                                        value={data.file}
                                        className="file:border-0"
                                        errorMessage={errors.title}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
