import DeleteIcon from "@/Components/Icons/DeleteIcon";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Card, CardBody, CardHeader, Progress, Select, Tooltip } from "@nextui-org/react";
import { useRef } from "react";

export default function CreateAudioFileSpotify({ listFile, audioFilesSpotify }) {
    const urlInput = useRef();

    const {data, setData, post, delete: destroy, errors, progress, reset, processing} = useForm({
        listFileId: listFile,
        url: '',
    });

    function submit(e) {
        e.preventDefault();
        post('/audio-file-spotify', {
            onSuccess: () => reset(),
            preserveScroll: true,
        });
    }

    return (
        <Card radius="sm" shadow="sm" className="w-full">
            <CardHeader className="border-b bg-primary">
                <h3 className="font-bold text-white text-md">Añadir lista de audio de spotify</h3>
            </CardHeader>
            <CardBody>
                <div className="flex-row space-y-4">
                    <div className="w-full -mt-2">
                        <form onSubmit={submit}>
                            <div className="flex items-center my-2">
                                <TextInput
                                    id="url"
                                    label="Url"
                                    baseRef={urlInput}
                                    value={data.url}
                                    onChange={e => setData('url', e.target.value)}
                                    type="text"
                                    autoComplete="url"
                                    required
                                    errorMessage={errors.url}
                                    endContent={
                                        <PrimaryButton disabled={processing}>
                                            Guardar
                                        </PrimaryButton>
                                    }
                                />

                            </div>
                        </form>
                    </div>
                    {audioFilesSpotify.length > 0 &&
                        <div className="w-full">
                            <ul className="grid w-full grid-cols-1 py-2">
                                {audioFilesSpotify.map(({id, type, file}) => (
                                    <Li
                                        key={id}
                                        type={type}
                                        file={file}
                                        handleClick={() => destroy(`/audio-file-spotify/${id}`)}
                                    />
                                ))}
                            </ul>
                        </div>
                    }
                </div>
            </CardBody>
        </Card>
    );
}

const Li = ({ type, file, handleClick }) => {
    return (
        <li className="my-1">
            <div className="relative flex justify-between w-full">
                <iframe
                    src={`https://open.spotify.com/embed/${type}/${file}?utm_source=generator`}
                    width="100%"
                    height="500"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
                <div className="absolute flex items-center justify-center gap-2 rounded right-3 top-14">
                    <Tooltip showArrow={true} content="Eliminar">
                        <span onClick={handleClick} className="text-lg cursor-pointer text-default-400 active:opacity-50">
                            <DeleteIcon width='32' height='32' className="p-1 bg-white rounded-full hover:scale-125" />
                        </span>
                    </Tooltip>
                </div>
            </div>
        </li>
    );
}
