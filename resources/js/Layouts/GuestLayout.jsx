import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { Card, CardBody } from '@nextui-org/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[#027DA2]">
            <div className="mb-4">
                <Link href="/">
                    <ApplicationLogo className="fill-current text-gray-500 w-[149px] h-[53px]" />
                </Link>
            </div>

            <Card className="lg:w-[400px] w-full rounded-none md:rounded-lg">
                <CardBody>
                    {children}
                </CardBody>
            </Card>
        </div>

    );
}
