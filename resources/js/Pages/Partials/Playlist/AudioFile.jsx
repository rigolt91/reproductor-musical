import DefaultButton from "@/Components/DefaultButton";
import FileInput from "@/Components/FileInput";
import DeleteIcon from "@/Components/Icons/DeleteIcon";
import SoundIcon from "@/Components/Icons/SoundIcon";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Card, CardBody, CardHeader, Progress, Tooltip } from "@nextui-org/react";
import { useRef } from "react";

export default function CreateAudioFile({ listFile, audioListFile }) {
    const titleInput = useRef();

    const {data, setData, post, delete: destroy, errors, progress, reset, processing} = useForm({
        listFileId: listFile,
        title: '',
        file: '',
    });

    console.log(audioListFile);

    function submit(e) {
        e.preventDefault();
        post('/audio-file', {
            onSuccess: () => reset(),
            preserveScroll: true,
        });
    }

    return (
        <Card radius="sm" shadow="sm" className="w-full">
            <CardHeader className="border-b bg-primary">
                <h3 className="font-bold text-white text-md">Archivos de Audios</h3>
            </CardHeader>
            <CardBody>
                <div className="flex-row gap-4 lg:flex lg:grid-cols-2">
                    <div className="w-full lg:w-[600px] -mt-2">
                        <form onSubmit={submit}>
                            <div className="mb-2">
                                <FileInput
                                    name="audio_file"
                                    label="Subir archivo"
                                    description="MP3, WAV hasta 250MB"
                                    value={data.file}
                                    onChange={e => setData('file', e.target.files[0])}
                                    className="file:border-0"
                                    icon={
                                        <SoundIcon color="#9ca3af" width="34" height="48" />
                                    }
                                    file={data.file && data.file}
                                    errorMessage={errors.file}
                                />
                                {progress && (
                                    <Progress aria-label="Loading..." value={progress.percentage} className="max-w-md"/>
                                )}
                            </div>
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
                            {audioListFile.map((audioFile) => (
                                <Li
                                    key={audioFile.audio_file.id}
                                    file={audioFile.audio_file.file}
                                    handleClick={() => destroy(`/audio-file/${audioFile.id}`)}
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
