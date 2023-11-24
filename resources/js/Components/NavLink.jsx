import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center text-md leading-5 transition duration-150 ease-in-out focus:outline-none font-bold ' +
                (active
                    ? 'text-gray-800 '
                    : 'border-transparent text-gray-500 hover:text-gray-700 focus:text-gray-700 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
