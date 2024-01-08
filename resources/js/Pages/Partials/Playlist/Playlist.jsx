import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from "@inertiajs/react";
import VisualFile from './VisualFile';
import AudioFile from './AudioFile';
import CreateAudioFileSpotify from './AudioFileSpotify';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function Playlist({ auth, listFile, visualFiles, audioFiles, audioFilesSpotify }) {
    return(
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h3 className="font-normal text-white">
                    {listFile.title}
                </h3>
            }
        >
            <Head title="Neva lista de reproducción" />

            <div className="py-8">
                <div className="px-6 mx-auto max-w-12xl">
                    <div className="grid grid-cols-1 gap-4">
                        <VisualFile listFile={listFile.id} visualFiles={visualFiles} />
                        <div className="grid grid-cols-1 gap-4">
                            <Accordion variant="splitted" itemClasses={{ base: '-mx-2', title: 'font-bold text-base', content:'border-t pt-2' }}>
                                {audioFilesSpotify.length <= 0 &&
                                    <AccordionItem
                                        key="1"
                                        aria-label="Crear lista con audios locales"
                                        title="Crear lista con audios locales"
                                        startContent={
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-pc-display" viewBox="0 0 16 16">
                                                <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"/>
                                            </svg>
                                        }
                                    >
                                        <AudioFile listFile={listFile.id} audioFiles={audioFiles} />
                                    </AccordionItem>
                                }
                                {audioFiles.length <= 0 &&
                                    <AccordionItem
                                        key="2"
                                        aria-label="Añadir lista de audio de spotify"
                                        title="Añadir lista de audio de spotify"
                                        startContent={
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-spotify" viewBox="0 0 16 16">
                                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
                                            </svg>
                                        }
                                    >
                                        <CreateAudioFileSpotify listFile={listFile.id} audioFilesSpotify={audioFilesSpotify} />
                                    </AccordionItem>
                                }
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
