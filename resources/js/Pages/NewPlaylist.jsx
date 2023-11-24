import NavLink from '@/Components/NavLink';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from "@inertiajs/react";
import { Card, CardBody, CardHeader } from '@nextui-org/react';

export default function NewPlaylist({ auth }) {
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
                <div className="max-w-12xl mx-auto px-6 sm:px-6 lg:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <Card radius="sm" shadow="sm" className="w-full">
                            <CardHeader className="border-b">
                                <h3 className="text-md font-bold text-gray-800">Archivos Visuales</h3>
                            </CardHeader>
                            <CardBody>
                                dd
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
