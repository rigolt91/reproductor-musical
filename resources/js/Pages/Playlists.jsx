import DefaultButton from '@/Components/DefaultButton';
import DeleteIcon from '@/Components/Icons/DeleteIcon';
import EditIcon from '@/Components/Icons/EditIcon';
import PlayIcon from '@/Components/Icons/PlayIcon';
import StopIcon from '@/Components/Icons/StopIcon';
import NavLink from '@/Components/NavLink';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from "@inertiajs/react";
import { Card, CardBody, CardHeader, Divider, Tooltip } from '@nextui-org/react';

export default function Playlists({ auth, listFiles }) {
    const {get, post, delete: destroy} = useForm();

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
                        {listFiles.map(({id, title, active}) => (
                            <Card key={id} radius="sm" className="text-white bg-primary">
                                <CardHeader className="w-full h-[200px] bg-gray-50 rounded-lg">

                                </CardHeader>
                                <CardBody>
                                    <div className="flex items-center justify-between mt-2">
                                        <h3 className="font-bold ml-3">
                                            {title}
                                        </h3>
                                        <div className="flex items-center justify-end px-2 gap-2">
                                        <Tooltip showArrow={true} content={active ? 'Detener' : 'Reproducir'}>
                                            <span className="text-lg cursor-pointer text-default-400 active:opacity-50">
                                                <DefaultButton onPress={() => get(`playlists/${id}`)} color={active ? 'success' : 'default'} isIconOnly className="hover:scale-125 transition duration-200">
                                                    {active ? <StopIcon /> : <PlayIcon />}
                                                </DefaultButton>
                                            </span>
                                        </Tooltip>
                                        <Tooltip showArrow={true} content="Editar">
                                            <span className="text-lg cursor-pointer text-default-400 active:opacity-50">
                                                <DefaultButton onPress={() => get(`playlists/${id}/edit`)} isIconOnly className="hover:scale-125 transition duration-200">
                                                    <EditIcon />
                                                </DefaultButton>
                                            </span>
                                        </Tooltip>
                                        <Tooltip showArrow={true} content="Eliminar">
                                            <span className="text-lg cursor-pointer text-default-400 active:opacity-50">
                                                <DefaultButton onPress={() => destroy(`playlists/${id}`)} isIconOnly className="hover:scale-125 transition duration-200">
                                                    <DeleteIcon />
                                                </DefaultButton>
                                            </span>
                                        </Tooltip>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
