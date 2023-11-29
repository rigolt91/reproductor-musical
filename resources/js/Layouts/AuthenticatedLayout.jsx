import ApplicationLogo from '@/Components/ApplicationLogo';
import { useForm } from '@inertiajs/react';
import { Button, Divider, Link, Navbar, ScrollShadow, useDisclosure } from '@nextui-org/react';
import TextInput from '@/Components/TextInput';
import ApplicationLogoSm from '@/Components/ApplicationLogoSm';
import NavbarTop from '@/Pages/Partials/Layouts/NavBarTop';
import Footer from '@/Pages/Partials/Layouts/Footer';
import ListFile from '@/Pages/Partials/Playlist/ListFile';
import { useState } from 'react';
import PlusIcon from '@/Components/Icons/PlusIcon';
import ListIcon from '@/Components/Icons/ListIcon';
import CubeIcon from '@/Components/Icons/CubeIcon';
import NavLink from '@/Components/NavLink';

export default function Authenticated({ user, header, children }) {
    const {data, setData, get} = useForm({
        search: ''
    });
    const screenY = document.documentElement.scrollHeight - 136;
    const [openModalCreateListFile, setOpenModalCreateListFile] = useState(false);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    function handleClickOpenModalCreateListFile() {
        setOpenModalCreateListFile(! openModalCreateListFile);
    }

    return (
        <div className="flex justify-center bg-gray-100">
            <Navbar className="w-[60px] lg:w-[322px] 2xl:w-[310px] z-50 bg-primary shadow-sm min-h-screen">
                <div className="fixed top-4 w-[60px] lg:w-[210px] -mx-4 lg:mx-0 flex justify-center">
                    <div className="top-0 flex-row justify-between w-full">
                        <div className="flex-row items-center w-full">
                            <div className="flex items-center shrink-0">
                                <Link href="/">
                                    <ApplicationLogo className="hidden w-auto text-gray-800 fill-current lg:block h-9" />
                                    <ApplicationLogoSm className="block w-auto text-gray-800 fill-current lg:hidden h-9" />
                                </Link>
                            </div>

                            <Divider className="bg-white/30 my-2 w-[36px] lg:w-full" />

                            <div className="flex-row items-center hidden lg:block">
                                <div className="mt-8">
                                    <Button href={route('dashboard')} as={Link} fullWidth={false} className="flex items-center justify-start w-full bg-gray-100 shadow-sm hover:shadow-lg hover:bg-white/90" radius="sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none">
                                            <path d="M12.1695 5.32271L4.16732 11.9134V19.0267C4.16732 19.2109 4.24048 19.3875 4.37072 19.5177C4.50095 19.648 4.67758 19.7211 4.86176 19.7211L9.72548 19.7086C9.90905 19.7076 10.0848 19.6341 10.2143 19.5039C10.3438 19.3738 10.4165 19.1977 10.4164 19.0141V14.86C10.4164 14.6759 10.4896 14.4992 10.6198 14.369C10.7501 14.2388 10.9267 14.1656 11.1109 14.1656H13.8887C14.0728 14.1656 14.2495 14.2388 14.3797 14.369C14.51 14.4992 14.5831 14.6759 14.5831 14.86V19.0111C14.5828 19.1025 14.6006 19.193 14.6354 19.2775C14.6701 19.362 14.7212 19.4388 14.7857 19.5035C14.8503 19.5682 14.9269 19.6196 15.0113 19.6546C15.0957 19.6897 15.1862 19.7077 15.2776 19.7077L20.1395 19.7211C20.3237 19.7211 20.5004 19.648 20.6306 19.5177C20.7608 19.3875 20.834 19.2109 20.834 19.0267V11.9086L12.8335 5.32271C12.7395 5.24689 12.6223 5.20555 12.5015 5.20555C12.3807 5.20555 12.2635 5.24689 12.1695 5.32271ZM24.8097 9.80231L21.1812 6.81142V0.799703C21.1812 0.661569 21.1263 0.529093 21.0287 0.431418C20.931 0.333743 20.7985 0.27887 20.6604 0.27887H18.2298C18.0917 0.27887 17.9592 0.333743 17.8615 0.431418C17.7639 0.529093 17.709 0.661569 17.709 0.799703V3.95118L13.8231 0.75413C13.4502 0.447263 12.9823 0.279483 12.4993 0.279483C12.0164 0.279483 11.5485 0.447263 11.1756 0.75413L0.189019 9.80231C0.136279 9.8459 0.0926449 9.89945 0.0606102 9.95991C0.0285755 10.0204 0.00876769 10.0866 0.00231864 10.1547C-0.0041304 10.2228 0.00290567 10.2915 0.0230248 10.3569C0.043144 10.4223 0.0759519 10.4831 0.119574 10.5358L1.22634 11.8813C1.26985 11.9342 1.32336 11.978 1.38381 12.0102C1.44426 12.0424 1.51047 12.0623 1.57864 12.0689C1.64681 12.0755 1.71561 12.0685 1.7811 12.0485C1.84659 12.0284 1.90748 11.9957 1.96029 11.952L12.1695 3.54319C12.2635 3.46738 12.3807 3.42604 12.5015 3.42604C12.6223 3.42604 12.7395 3.46738 12.8335 3.54319L23.0432 11.952C23.0959 11.9957 23.1567 12.0285 23.2221 12.0486C23.2875 12.0687 23.3562 12.0758 23.4243 12.0693C23.4924 12.0629 23.5586 12.043 23.6191 12.011C23.6795 11.979 23.7331 11.9353 23.7767 11.8826L24.8835 10.5371C24.927 10.4841 24.9597 10.423 24.9796 10.3573C24.9995 10.2916 25.0062 10.2227 24.9993 10.1544C24.9925 10.0861 24.9722 10.0198 24.9396 9.95941C24.9071 9.89899 24.8629 9.8456 24.8097 9.80231Z" fill="#4B5563"/>
                                        </svg>
                                        <span className="pt-0.5">Home</span>
                                    </Button>
                                </div>
                                <div className="mt-2.5">
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        get('/playlists')}
                                    }>
                                        <TextInput
                                            size="xs"
                                            placeholder="Buscar..."
                                            value={data.search}
                                            onChange={e => setData('search', e.target.value)}
                                            startContent={
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                    <path d="M13.1986 11.608H12.3645L12.0688 11.3231C13.3359 9.84582 13.9905 7.83036 13.6315 5.68827C13.1352 2.75477 10.6857 0.412194 7.72937 0.0534209C3.26319 -0.495291 -0.495582 3.26128 0.0534522 7.72484C0.412436 10.6794 2.75639 13.1275 5.69161 13.6235C7.83495 13.9823 9.8516 13.328 11.3298 12.0618L11.6148 12.3572V13.1909L16.1021 17.6755C16.535 18.1082 17.2424 18.1082 17.6753 17.6755C18.1082 17.2429 18.1082 16.5359 17.6753 16.1032L13.1986 11.608ZM6.86358 11.608C4.23456 11.608 2.11233 9.48705 2.11233 6.85956C2.11233 4.23207 4.23456 2.11109 6.86358 2.11109C9.49261 2.11109 11.6148 4.23207 11.6148 6.85956C11.6148 9.48705 9.49261 11.608 6.86358 11.608Z" fill="#4B5563"/>
                                                </svg>
                                            }
                                        />
                                    </form>
                                </div>
                                <div className="mt-2.5">
                                    <Button href={route('playlists.index')} as={Link} color="primary" className="flex items-center justify-start w-full text-white shadow-sm hover:shadow-lg hover:bg-white/20 bg-gray-100/20" radius="sm">
                                        <ListIcon color="white" />
                                        <span className="pt-0.5">Listas de reproducción</span>
                                    </Button>
                                </div>
                                <div className="mt-2.5">
                                    <Button onPress={onOpen} color="primary" className="flex items-center justify-start w-full text-white shadow-sm hover:shadow-lg hover:bg-white/20 bg-gray-100/20" radius="sm">
                                        <PlusIcon color="white" />
                                        <span className="pt-0.5">Nueva lista</span>
                                    </Button>
                                </div>
                            </div>

                            <div className="flex-row items-center block lg:hidden">
                                <div className="mt-8">
                                    <NavLink className="shadow-sm hover:shadow-lg hover:bg-white/20 bg-gray-100 px-1.5 py-2 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none">
                                            <path d="M12.1695 5.32271L4.16732 11.9134V19.0267C4.16732 19.2109 4.24048 19.3875 4.37072 19.5177C4.50095 19.648 4.67758 19.7211 4.86176 19.7211L9.72548 19.7086C9.90905 19.7076 10.0848 19.6341 10.2143 19.5039C10.3438 19.3738 10.4165 19.1977 10.4164 19.0141V14.86C10.4164 14.6759 10.4896 14.4992 10.6198 14.369C10.7501 14.2388 10.9267 14.1656 11.1109 14.1656H13.8887C14.0728 14.1656 14.2495 14.2388 14.3797 14.369C14.51 14.4992 14.5831 14.6759 14.5831 14.86V19.0111C14.5828 19.1025 14.6006 19.193 14.6354 19.2775C14.6701 19.362 14.7212 19.4388 14.7857 19.5035C14.8503 19.5682 14.9269 19.6196 15.0113 19.6546C15.0957 19.6897 15.1862 19.7077 15.2776 19.7077L20.1395 19.7211C20.3237 19.7211 20.5004 19.648 20.6306 19.5177C20.7608 19.3875 20.834 19.2109 20.834 19.0267V11.9086L12.8335 5.32271C12.7395 5.24689 12.6223 5.20555 12.5015 5.20555C12.3807 5.20555 12.2635 5.24689 12.1695 5.32271ZM24.8097 9.80231L21.1812 6.81142V0.799703C21.1812 0.661569 21.1263 0.529093 21.0287 0.431418C20.931 0.333743 20.7985 0.27887 20.6604 0.27887H18.2298C18.0917 0.27887 17.9592 0.333743 17.8615 0.431418C17.7639 0.529093 17.709 0.661569 17.709 0.799703V3.95118L13.8231 0.75413C13.4502 0.447263 12.9823 0.279483 12.4993 0.279483C12.0164 0.279483 11.5485 0.447263 11.1756 0.75413L0.189019 9.80231C0.136279 9.8459 0.0926449 9.89945 0.0606102 9.95991C0.0285755 10.0204 0.00876769 10.0866 0.00231864 10.1547C-0.0041304 10.2228 0.00290567 10.2915 0.0230248 10.3569C0.043144 10.4223 0.0759519 10.4831 0.119574 10.5358L1.22634 11.8813C1.26985 11.9342 1.32336 11.978 1.38381 12.0102C1.44426 12.0424 1.51047 12.0623 1.57864 12.0689C1.64681 12.0755 1.71561 12.0685 1.7811 12.0485C1.84659 12.0284 1.90748 11.9957 1.96029 11.952L12.1695 3.54319C12.2635 3.46738 12.3807 3.42604 12.5015 3.42604C12.6223 3.42604 12.7395 3.46738 12.8335 3.54319L23.0432 11.952C23.0959 11.9957 23.1567 12.0285 23.2221 12.0486C23.2875 12.0687 23.3562 12.0758 23.4243 12.0693C23.4924 12.0629 23.5586 12.043 23.6191 12.011C23.6795 11.979 23.7331 11.9353 23.7767 11.8826L24.8835 10.5371C24.927 10.4841 24.9597 10.423 24.9796 10.3573C24.9995 10.2916 25.0062 10.2227 24.9993 10.1544C24.9925 10.0861 24.9722 10.0198 24.9396 9.95941C24.9071 9.89899 24.8629 9.8456 24.8097 9.80231Z" fill="#4B5563"/>
                                        </svg>
                                    </NavLink>
                                </div>
                                <div className="mt-2.5">
                                    <NavLink className="px-2 py-2 rounded-md shadow-sm hover:shadow-lg hover:bg-white/20 bg-gray-100/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" fill="none">
                                            <path d="M19.0312 18H1.96875C0.881426 18 0 17.1366 0 16.0714V1.92857C0 0.863437 0.881426 0 1.96875 0H19.0312C20.1186 0 21 0.863437 21 1.92857V16.0714C21 17.1366 20.1186 18 19.0312 18ZM5.25 3.53571C4.34392 3.53571 3.60938 4.25527 3.60938 5.14286C3.60938 6.03044 4.34392 6.75 5.25 6.75C6.15608 6.75 6.89062 6.03044 6.89062 5.14286C6.89062 4.25527 6.15608 3.53571 5.25 3.53571ZM5.25 7.39286C4.34392 7.39286 3.60938 8.11242 3.60938 9C3.60938 9.88758 4.34392 10.6071 5.25 10.6071C6.15608 10.6071 6.89062 9.88758 6.89062 9C6.89062 8.11242 6.15608 7.39286 5.25 7.39286ZM5.25 11.25C4.34392 11.25 3.60938 11.9696 3.60938 12.8571C3.60938 13.7447 4.34392 14.4643 5.25 14.4643C6.15608 14.4643 6.89062 13.7447 6.89062 12.8571C6.89062 11.9696 6.15608 11.25 5.25 11.25ZM17.0625 5.78571V4.5C17.0625 4.23374 16.8421 4.01786 16.5703 4.01786H8.36719C8.09538 4.01786 7.875 4.23374 7.875 4.5V5.78571C7.875 6.05198 8.09538 6.26786 8.36719 6.26786H16.5703C16.8421 6.26786 17.0625 6.05198 17.0625 5.78571ZM17.0625 9.64286V8.35714C17.0625 8.09088 16.8421 7.875 16.5703 7.875H8.36719C8.09538 7.875 7.875 8.09088 7.875 8.35714V9.64286C7.875 9.90912 8.09538 10.125 8.36719 10.125H16.5703C16.8421 10.125 17.0625 9.90912 17.0625 9.64286ZM17.0625 13.5V12.2143C17.0625 11.948 16.8421 11.7321 16.5703 11.7321H8.36719C8.09538 11.7321 7.875 11.948 7.875 12.2143V13.5C7.875 13.7663 8.09538 13.9821 8.36719 13.9821H16.5703C16.8421 13.9821 17.0625 13.7663 17.0625 13.5Z" fill="white" fillOpacity="0.8"/>
                                        </svg>
                                    </NavLink>
                                </div>
                                <div className="mt-2.5">
                                    <NavLink className="px-2 py-2 rounded-md shadow-sm hover:shadow-lg hover:bg-white/20 bg-gray-100/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                                            <path d="M18.75 0.5H2.25C1.00781 0.5 0 1.50781 0 2.75V19.25C0 20.4922 1.00781 21.5 2.25 21.5H18.75C19.9922 21.5 21 20.4922 21 19.25V2.75C21 1.50781 19.9922 0.5 18.75 0.5ZM17.25 12.3125C17.25 12.6219 16.9969 12.875 16.6875 12.875H12.375V17.1875C12.375 17.4969 12.1219 17.75 11.8125 17.75H9.1875C8.87813 17.75 8.625 17.4969 8.625 17.1875V12.875H4.3125C4.00313 12.875 3.75 12.6219 3.75 12.3125V9.6875C3.75 9.37813 4.00313 9.125 4.3125 9.125H8.625V4.8125C8.625 4.50313 8.87813 4.25 9.1875 4.25H11.8125C12.1219 4.25 12.375 4.50313 12.375 4.8125V9.125H16.6875C16.9969 9.125 17.25 9.37813 17.25 9.6875V12.3125Z" fill="white" fillOpacity="0.8"/>
                                        </svg>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
            <div className="w-full min-h-screen bg-gray-50">
                <div className="mx-6">
                    <NavbarTop user={user} header={header} />
                </div>
                <main>
                    <ScrollShadow size={100} className="w-full" style={{ height:`${screenY}px` }}>
                        {children}
                    </ScrollShadow>
                    <ListFile isOpen={isOpen} onOpenChange={onOpenChange} />
                </main>
                <div className="mx-6">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
