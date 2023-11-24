import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CardLista from './Components/Dashboard/CardLista';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
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
