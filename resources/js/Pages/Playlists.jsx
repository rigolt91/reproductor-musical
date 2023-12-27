import DefaultButton from '@/Components/DefaultButton';
import DeleteIcon from '@/Components/Icons/DeleteIcon';
import EditIcon from '@/Components/Icons/EditIcon';
import PlayIcon from '@/Components/Icons/PlayIcon';
import PlusIcon from '@/Components/Icons/PlusIcon';
import StopIcon from '@/Components/Icons/StopIcon';
import NavLink from '@/Components/NavLink';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ListFile from '@/Pages/Partials/Playlist/ListFile';
import { Head, useForm } from "@inertiajs/react";
import { Card, CardBody, CardHeader, Image, Tooltip, useDisclosure } from '@nextui-org/react';

export default function Playlists({ auth, listFiles }) {
    const {get, delete: destroy, processing} = useForm();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    function playAndStop(id) {
        get(`playlists/${id}`);
    }

    return(
        <AuthenticatedLayout
            user={auth.user}
            header={
                <NavLink href={route('playlists.index')} className="text-white hover:text-gray-300 active:text-gray-300">
                    Listas de reproducción
                </NavLink>
            }

        >
            <Head title="Listas de reproducción" />

            <div className="py-8">
                <div className="px-6 mx-auto max-w-12xl sm:px-6 lg:px-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 2xl:grid-cols-4">
                        {listFiles.length > 0
                            && listFiles.map(({id, title, active, visual_files}) => (
                                <Card key={id} radius="sm" className="text-white">
                                    <div className="w-full h-[180px] bg-gray-500">
                                        {visual_files ?
                                            visual_files.extension == 'png' || visual_files.extension == 'jpg' || visual_files.extension == 'jpeg'
                                                ?  <Image
                                                        alt="NextUI hero Image"
                                                        radius="none"
                                                        className="border bg-primary w-full rounded-t-lg"
                                                        src={`../../storage/images/${visual_files.file}`}
                                                    />
                                                : <video
                                                    src={`../../storage/videos/${visual_files.file}`}
                                                    className="w-full rounded-t-lg"
                                                    preload="metadata"
                                                    muted
                                                ></video>
                                            : ''
                                        }
                                    </div>
                                    <CardBody className="bg-primary z-50 border-t-2">
                                        <div className="flex items-center justify-between h-[55px]">
                                            <h3 className="font-bold ml-3">
                                                {title}
                                            </h3>
                                            <div className="flex items-center justify-end px-2 gap-2">
                                            <Tooltip showArrow={true} content={active ? 'Detener' : 'Reproducir'}>
                                                <span className="text-lg cursor-pointer text-default-400 active:opacity-50">
                                                    <DefaultButton
                                                        isIconOnly
                                                        onPress={() => playAndStop(id)}
                                                        color={active ? 'success' : 'default'}
                                                        disabled={processing}
                                                        className="hover:scale-125 transition duration-200"
                                                    >
                                                        {active ? <StopIcon /> : <PlayIcon />}
                                                    </DefaultButton>
                                                </span>
                                            </Tooltip>
                                            <Tooltip showArrow={true} content="Editar">
                                                <span className="text-lg cursor-pointer text-default-400 active:opacity-50">
                                                    <DefaultButton
                                                        isIconOnly
                                                        onPress={() => get(`playlists/${id}/edit`)}
                                                        disabled={processing}
                                                        className="hover:scale-125 transition duration-200"
                                                    >
                                                        <EditIcon />
                                                    </DefaultButton>
                                                </span>
                                            </Tooltip>
                                            <Tooltip showArrow={true} content="Eliminar">
                                                <span className="text-lg cursor-pointer text-default-400 active:opacity-50">
                                                    <DefaultButton
                                                        isIconOnly
                                                        onPress={() => destroy(`playlists/${id}`)}
                                                        disabled={processing}
                                                        className="hover:scale-125 transition duration-200"
                                                    >
                                                        <DeleteIcon />
                                                    </DefaultButton>
                                                </span>
                                            </Tooltip>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))
                        }
                    </div>
                    {listFiles.length == 0 &&
                        <PrimaryButton onPress={onOpen} className="py-10 border lg:w-[300px] h-[200px] w-full flex items-center justify-center rounded-lg shadow-sm gap-2 bg-gray-200">
                            <PlusIcon height="28" width="28" color="gray" />

                        </PrimaryButton>
                    }
                    <ListFile isOpen={isOpen} onOpenChange={onOpenChange} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
