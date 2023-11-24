import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start ps-3 pe-4 py-2 ${
                active
                    ? 'text-gray-800 focus:text-primary'
                    : ' text-gray-600 hover:text-gray-800 hover:bg-gray-50  focus:text-gray-800 focus:bg-gray-50'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
