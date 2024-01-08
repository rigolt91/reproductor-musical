import { Link, Head } from '@inertiajs/react';
import { Divider, Image } from '@nextui-org/react';
import imgTarjeta from '../../../public/img/tarjeta.png';
import logo from '../../../public/img/sm_logo.png';
import ReactPlayer from 'react-player';
import { useRef, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default function Welcome({ auth, visualFiles, audioFiles, audioFilesSpotify }) {
    const [itemVisualFile, setItemVisualFile] = useState(0);
    const [itemAudioFile, setAudioVisualFile] = useState(0);
    const [playAudioSpotify, setPlayAudioSpotify] = useState(0);
    const mimes = ['jpg', 'png', 'jpeg'];
    const audioPlayer = useRef();

    window.onSpotifyIframeApiReady = (IFrameAPI) => {
        if(audioFiles.length == 0) {
            let element = document.getElementById('spotifyIframe');
            let options = {
                uri: `spotify:${audioFilesSpotify.type}:${audioFilesSpotify.file}`
            };
            let callback = (EmbedController) => {
                EmbedController.addListener('ready', () => {
                    document.getElementById('fullScreen').addEventListener('dblclick', () => {
                        EmbedController.play();
                    });
                });
            };
            IFrameAPI.createController(element, options, callback);
            let iframe = document.querySelector('iframe');
            iframe.classList.add('absolute');
            iframe.classList.add('z-10');
            iframe.removeAttribute('height');
        }
    }

    function audioPlay(){
        audioPlayer.current.audioEl.current.play();
    }

    function playReactPlayer() {
        if(visualFiles.length > 1 && itemVisualFile < visualFiles.length - 1) {
            setItemVisualFile(itemVisualFile + 1);
        } else {
            setItemVisualFile(0);
        }
    }

    function playReactAudioPlayer() {
        if(audioFiles.length > 1 && itemAudioFile < audioFiles.length - 1) {
            setAudioVisualFile(itemAudioFile + 1);
        } else {
            setAudioVisualFile(0);
        }
    }

    function fullScreen() {
        if(audioFiles.length > 0) {
            audioPlay();
        }
        if(!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        }else{
            document.exitFullscreen();
        }
    }

    return (
        <div id="fullScreen" onDoubleClick={fullScreen}>
            <Head title="Laboratorio de análisis clínicos" />
            <div className="relative z-50 sm:flex sm:justify-center sm:items-center">
                <div className="p-6 sm:fixed sm:top-0 sm:right-0 text-end">
                    {auth.user ? (
                        <Link
                            href={route('playlists.index')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            {Lang.get('strings.Dashboard')}
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="text-gray-600 ont-semibold hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                {Lang.get('strings.Log in')}
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <div className="relative flex items-center justify-center">
                <div className="flex items-center justify-center w-full p-0 max-w-12xl bg-white z-50">
                    {(visualFiles.length > 0)
                        ? (<>
                            {mimes.includes(visualFiles[itemVisualFile].extension)
                                ?  (<>
                                        <Image
                                            alt={visualFiles.title}
                                            radius="none"
                                            width="100%"
                                            height="100%"
                                            className="border rounded-t-lg bg-primary"
                                            src={`../../storage/images/${visualFiles[itemVisualFile].file}`}
                                        />
                                        {visualFiles.length > 1 &&
                                            setTimeout(() => {
                                                playReactPlayer();
                                            }, 60000)
                                        }
                                    </>)
                                : (<ReactPlayer
                                    url={`../../storage/videos/${visualFiles[itemVisualFile].file}`}
                                    width="100%"
                                    height="100%"
                                    muted
                                    playing
                                    loop={visualFiles.length == 1 ? true : false}
                                    onEnded={playReactPlayer}
                                    className="z-50"
                                />)
                            }
                            {audioFiles.length > 0
                                &&   (<ReactAudioPlayer
                                        src={`../../storage/audios/${audioFiles[itemAudioFile].file}`}
                                        preload="auto"
                                        autoPlay={true}
                                        loop={audioFiles.length == 1 ? true : false}
                                        onEnded={playReactAudioPlayer}
                                        ref={audioPlayer}
                                    />)
                            }
                        </>)
                        : (<div className="flex items-center min-h-screen text-gray-600 justify-items-center z-50">
                            <div className="flex-row -mt-12 justify-items-center">
                                <div className="flex items-center justify-center">
                                    <Image
                                        width={149}
                                        height={53}
                                        alt="Laboratorio de análisis clínicos y bacteriológicos"
                                        src={logo}
                                        className="bg-primary z-50"
                                    />
                                    <div className="flex-row items-center w-full sm:w-[335px] -mt-4 sm:-mt-8">
                                        <p className="text-[50px] sm:text-[100px] font-bold">BC Lab</p>
                                        <p className="text-lg uppercase -mt-5 sm:-mt-10 ml-1 sm:ml-1.5 font-bold">Laboratorio de análisis clínicos y bacteriológicos</p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div id="spotifyIframe" className='z-10'></div>
            </div>
            <div className="relative z-50 p-0 max-w-12xl">
                <div className="h-[100px] w-full px-4 fixed flex bottom-0 rounded-b-md bg-primary/50">
                    <div className="flex items-center justify-center w-[149px] lg:w-[149px]">
                        <Image
                            width={149}
                            height={53}
                            alt="Laboratorio de análisis clínicos y bacterianos"
                            src={imgTarjeta}
                        />
                    </div>
                    <Divider orientation="vertical" className="bg-success mx-4 lg:mx-4 px-0.5 lg:px-1 h-[230px]" />
                    <div className="grid items-center w-full grid-cols-2 lg:grid-cols-3 sm:gap-x-5 lg:px-10">
                        <div className="flex-row items-center">
                            <p className="text-xs font-normal text-white lg:text-sm lg:text-md">
                                Arroquigaray N° 516
                            </p>
                            <p className="text-xs font-normal text-white lg:text-sm lg:text-md">
                                Tel. (02271) 409690
                            </p>
                            <p className="text-xs font-normal text-white lg:text-sm lg:text-md">
                                info@bclab.com.ar
                            </p>
                            <p className="text-xs font-normal text-white lg:text-sm lg:text-md">
                                www.bclab.com.ar
                            </p>
                        </div>
                        <div className="flex-row items-center">
                            <p className="flex items-center text-xs font-normal text-white lg:text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M18.5986 3.17871C16.5527 1.12793 13.8281 0 10.9326 0C4.95605 0 0.0927734 4.86328 0.0927734 10.8398C0.0927734 12.749 0.59082 14.6143 1.53809 16.2598L0 21.875L5.74707 20.3662C7.3291 21.2305 9.11133 21.6846 10.9277 21.6846H10.9326C16.9043 21.6846 21.875 16.8213 21.875 10.8447C21.875 7.94922 20.6445 5.22949 18.5986 3.17871ZM10.9326 19.8584C9.31152 19.8584 7.72461 19.4238 6.34277 18.6035L6.01562 18.4082L2.60742 19.3018L3.51562 15.9766L3.30078 15.6348C2.39746 14.1992 1.92383 12.5439 1.92383 10.8398C1.92383 5.87402 5.9668 1.83105 10.9375 1.83105C13.3447 1.83105 15.6055 2.76855 17.3047 4.47266C19.0039 6.17676 20.0488 8.4375 20.0439 10.8447C20.0439 15.8154 15.8984 19.8584 10.9326 19.8584ZM15.874 13.1104C15.6055 12.9736 14.2725 12.3193 14.0234 12.2314C13.7744 12.1387 13.5938 12.0947 13.4131 12.3682C13.2324 12.6416 12.7148 13.2471 12.5537 13.4326C12.3975 13.6133 12.2363 13.6377 11.9678 13.501C10.376 12.7051 9.33105 12.0801 8.28125 10.2783C8.00293 9.7998 8.55957 9.83398 9.07715 8.79883C9.16504 8.61816 9.12109 8.46191 9.05273 8.3252C8.98438 8.18848 8.44238 6.85547 8.21777 6.31348C7.99805 5.78613 7.77344 5.85938 7.60742 5.84961C7.45117 5.83984 7.27051 5.83984 7.08984 5.83984C6.90918 5.83984 6.61621 5.9082 6.36719 6.17676C6.11816 6.4502 5.41992 7.10449 5.41992 8.4375C5.41992 9.77051 6.3916 11.0596 6.52344 11.2402C6.66016 11.4209 8.43262 14.1553 11.1523 15.332C12.8711 16.0742 13.5449 16.1377 14.4043 16.0107C14.9268 15.9326 16.0059 15.3564 16.2305 14.7217C16.4551 14.0869 16.4551 13.5449 16.3867 13.4326C16.3232 13.3105 16.1426 13.2422 15.874 13.1104Z" fill="white"/>
                                </svg>
                                <span className="ml-3">(02271) 15 414464</span>
                            </p>
                            <p className="text-white font-normal text-xs lg:text-sm flex items-center my-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M19.6429 0H2.35714C1.73199 0 1.13244 0.248341 0.690391 0.690391C0.248341 1.13244 0 1.73199 0 2.35714L0 19.6429C0 20.268 0.248341 20.8676 0.690391 21.3096C1.13244 21.7517 1.73199 22 2.35714 22H9.0971V14.5205H6.00335V11H9.0971V8.31679C9.0971 5.26478 10.9141 3.57893 13.697 3.57893C15.0297 3.57893 16.4234 3.81661 16.4234 3.81661V6.81214H14.8878C13.3748 6.81214 12.9029 7.75107 12.9029 8.71406V11H16.2805L15.7403 14.5205H12.9029V22H19.6429C20.268 22 20.8676 21.7517 21.3096 21.3096C21.7517 20.8676 22 20.268 22 19.6429V2.35714C22 1.73199 21.7517 1.13244 21.3096 0.690391C20.8676 0.248341 20.268 0 19.6429 0Z" fill="white"/>
                                </svg>
                                <span className="ml-3">BC Lab / @BCLaboratorio</span>
                            </p>
                            <p className="flex items-center text-xs font-normal text-white lg:text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M10.946 5.33081C7.84058 5.33081 5.33569 7.83569 5.33569 10.9412C5.33569 14.0466 7.84058 16.5515 10.946 16.5515C14.0515 16.5515 16.5564 14.0466 16.5564 10.9412C16.5564 7.83569 14.0515 5.33081 10.946 5.33081ZM10.946 14.5886C8.93921 14.5886 7.29858 12.9529 7.29858 10.9412C7.29858 8.92944 8.93433 7.2937 10.946 7.2937C12.9578 7.2937 14.5935 8.92944 14.5935 10.9412C14.5935 12.9529 12.9529 14.5886 10.946 14.5886ZM18.0945 5.10132C18.0945 5.82886 17.5085 6.40991 16.7859 6.40991C16.0584 6.40991 15.4773 5.82397 15.4773 5.10132C15.4773 4.37866 16.0632 3.79272 16.7859 3.79272C17.5085 3.79272 18.0945 4.37866 18.0945 5.10132ZM21.8103 6.42944C21.7273 4.67651 21.3269 3.12378 20.0427 1.84448C18.7634 0.565185 17.2107 0.164795 15.4578 0.0769043C13.6511 -0.0256348 8.23608 -0.0256348 6.42944 0.0769043C4.6814 0.159912 3.12866 0.560303 1.84448 1.8396C0.560303 3.1189 0.164795 4.67163 0.0769043 6.42456C-0.0256348 8.2312 -0.0256348 13.6462 0.0769043 15.4529C0.159912 17.2058 0.560303 18.7585 1.84448 20.0378C3.12866 21.3171 4.67651 21.7175 6.42944 21.8054C8.23608 21.908 13.6511 21.908 15.4578 21.8054C17.2107 21.7224 18.7634 21.322 20.0427 20.0378C21.322 18.7585 21.7224 17.2058 21.8103 15.4529C21.9128 13.6462 21.9128 8.23608 21.8103 6.42944ZM19.4763 17.3914C19.0955 18.3484 18.3582 19.0857 17.3962 19.4714C15.9558 20.0427 12.5378 19.9109 10.946 19.9109C9.35425 19.9109 5.9314 20.0378 4.49585 19.4714C3.53882 19.0906 2.80151 18.3533 2.41577 17.3914C1.84448 15.9509 1.97632 12.533 1.97632 10.9412C1.97632 9.34937 1.84937 5.92651 2.41577 4.49097C2.79663 3.53394 3.53394 2.79663 4.49585 2.41089C5.93628 1.8396 9.35425 1.97144 10.946 1.97144C12.5378 1.97144 15.9607 1.84448 17.3962 2.41089C18.3533 2.79175 19.0906 3.52905 19.4763 4.49097C20.0476 5.9314 19.9158 9.34937 19.9158 10.9412C19.9158 12.533 20.0476 15.9558 19.4763 17.3914Z" fill="white"/>
                                </svg>
                                <span className="ml-3">bc.lab.monte</span>
                            </p>
                        </div>
                        <div className="flex-row items-center hidden lg:block">
                            <p className="flex items-center text-xs font-normal text-white lg:text-sm">
                                Copyright © Edessi Argentina 2023
                            </p>
                            <p className="items-center text-xs font-normal text-white lg:text-sm lg:flex">
                                Todos los derechos reservados.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
