import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CardLista from './Partials/Dashboard/CardLista';
import NavLink from '@/Components/NavLink';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <NavLink href={route('dashboard')} className="text-white hover:text-gray-300 active:text-gray-300">
                    Home
                </NavLink>
            }
        >
            <Head title="Home" />

            <div className="py-8">
                <div className="max-w-12xl mx-auto px-6 sm:px-6 lg:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <CardLista
                            title="Title"
                            description="Description"
                            handleClick=""
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
