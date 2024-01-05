import DefaultButton from "@/Components/DefaultButton";
import DeleteIcon from "@/Components/Icons/DeleteIcon";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import { Card, CardBody, CardHeader, Progress, Tooltip } from "@nextui-org/react";
import { useRef } from "react";

export default function CreateAudioFileSpotify({ listFile, audioFiles }) {
    const titleInput = useRef();

    const {data, setData, post, delete: destroy, errors, progress, reset, processing} = useForm({
        listFileId: listFile,
        title: '',
        file: '',
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
                <h3 className="font-bold text-white text-md">Añadir audios desde spotify</h3>
            </CardHeader>
            <CardBody>
                <div className="flex-row gap-4 lg:flex lg:grid-cols-2">
                    <div className="w-full lg:w-[600px] -mt-2">
                        <form onSubmit={submit}>
                            <div className="flex justify-end mt-2 mb-4 space-x-3 lg:mb-0">
                                <DefaultButton type="button" onPress={() => reset()}>
                                    Cancelar
                                </DefaultButton>
                                <PrimaryButton disabled={processing}>
                                    Guardar
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>

                    <div className="w-full h-full border  rounded-lg ">
                        <ul className="grid w-full grid-cols-1 px-4 py-2 list-decimal 2xl:grid-cols-2">
                            {audioFiles.map(({id, file}) => (
                                <Li
                                    key={id}
                                    file={file}
                                    handleClick={() => destroy(`/audio-file/${id}`)}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

const Li = ({ file, handleClick }) => {
    return (
        <li className="mx-6 my-2">
            <div className="flex justify-between w-full border-b-1">
                <div className="text-gray-600 pr-4">{file}</div>
                <div className="relative flex items-center justify-center gap-2">
                    <Tooltip showArrow={true} content="Eliminar">
                        <span onClick={handleClick} className="text-lg cursor-pointer text-default-400 active:opacity-50">
                            <DeleteIcon width='16' height='18' className="hover:scale-125" />
                        </span>
                    </Tooltip>
                </div>
            </div>
        </li>
    );
}
