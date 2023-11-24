import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { Card, CardBody } from '@nextui-org/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[#027DA2]">
            <div className="mb-4">
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <Card className="lg:w-[400px] w-full" radius="sm">
                <CardBody>
                    {children}
                </CardBody>
            </Card>
        </div>

    );
}
