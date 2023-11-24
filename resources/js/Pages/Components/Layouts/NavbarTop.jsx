import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { useForm } from "@inertiajs/react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Navbar } from "@nextui-org/react";
import { useState } from "react";

export default function NavbarTop({ user }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const {post} = useForm();

    return (
        <Navbar className="shadow-md rounded-lg bg-primary flex justify-between mt-1" maxWidth="full">
            <NavLink href={route('dashboard')} className="text-white hover:text-gray-300 active:text-gray-300">
                Home
            </NavLink>

            <div className="hidden sm:flex sm:items-center sm:ms-6">
                <div className="ms-3">
                    <Dropdown placement="top-end" radius="sm">
                        <DropdownTrigger>
                            <Button color="primary" className="text-white text-md" radius="sm">
                                {user.name}

                                <svg
                                    className="ms-2 -me-0.5 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Button>
                        </DropdownTrigger>

                        <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
                            <DropdownItem
                                key="profile"
                                href={route('profile.edit')}
                            >
                                Profile
                            </DropdownItem>
                            <DropdownItem
                                key="logout"
                                onClick={() => post('logout')}
                            >
                                Logout
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>

            <div className="-me-2 flex items-center sm:hidden relative">
                <button
                    onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path
                            className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        <path
                            className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden bg-white absolute top-0 right-[45px] rounded-md shadow-lg'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Home
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">{user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    );
}
