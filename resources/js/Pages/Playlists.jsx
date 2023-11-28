import DeleteIcon from '@/Components/Icons/DeleteIcon';
import NavLink from '@/Components/NavLink';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from "@inertiajs/react";
import { Card, CardBody, Divider } from '@nextui-org/react';

export default function Playlists({ auth, listFiles }) {
    console.log(listFiles);

    return(
        <AuthenticatedLayout
            user={auth.user}
            header={
                <NavLink href={route('playlists')} className="text-white hover:text-gray-300 active:text-gray-300">
                    Listas de reproducción
                </NavLink>
            }

        >
            <Head title="Listas de reproducción" />

            <div className="py-8">
                <div className="px-6 mx-auto max-w-12xl sm:px-6 lg:px-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 2xl:grid-cols-4">
                        {listFiles.map(({id, title}) => (
                            <Card key={id} radius="sm" className="text-white bg-primary">
                                <CardBody>
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold">
                                            {title}
                                        </h3>
                                        <div className="flex justify-end px-2 border-l border-white">
                                            <DeleteIcon color="white" className="hover:scale-125" />
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
