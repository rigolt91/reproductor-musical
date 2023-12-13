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
                                <Link href="/" target="_blank">
                                    <ApplicationLogo className="hidden w-auto text-gray-800 fill-current lg:block h-9" />
                                    <ApplicationLogoSm className="block w-auto text-gray-800 fill-current lg:hidden h-9" />
                                </Link>
                            </div>

                            <Divider className="bg-white/30 my-2 w-[36px] lg:w-full" />

                            <div className="flex-row items-center hidden lg:block">
                                <div className="mt-8">
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
                                <div className="mt-2.5">
                                    <NavLink href={route('playlists.index')} className="px-2 py-2 rounded-md shadow-sm hover:shadow-lg hover:bg-white/20 bg-gray-100/20">
                                        <ListIcon color="white" />
                                    </NavLink>
                                </div>
                                <div className="mt-2.5">
                                    <Button isIconOnly onClick={onOpen} className="px-2 py-2 rounded-md shadow-sm hover:shadow-lg hover:bg-white/20 bg-gray-100/20">
                                        <PlusIcon color="white" />
                                    </Button>
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
