import DefaultButton from "@/Components/DefaultButton";
import FileInput from "@/Components/FileInput";
import DeleteIcon from "@/Components/Icons/DeleteIcon";
import SoundIcon from "@/Components/Icons/SoundIcon";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Card, CardBody, CardHeader, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import { useRef } from "react";

export default function CreateAudioFile() {
    const titleInput = useRef();

    const {data, setData, post, errors, processing, reset} = useForm({
        title: '',
        file: '',
    });

    return (
        <Card radius="sm" shadow="sm" className="w-full">
            <CardHeader className="border-b bg-primary">
                <h3 className="font-bold text-white text-md">Archivos de Audios</h3>
            </CardHeader>
            <CardBody>
                <div className="flex-row gap-4 lg:flex lg:grid-cols-2">
                    <div className="w-full lg:w-[600px]">
                        <div className="mb-2">
                            <TextInput
                                id="title"
                                label="Título"
                                baseRef={titleInput}
                                value={data.title}
                                type="text"
                                autoComplete="title"
                                errorMessage={errors.title}
                            />
                        </div>
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
                                errorMessage={errors.title}
                            />
                        </div>
                        <div className="flex justify-end mt-2 mb-4 space-x-3 lg:mb-0">
                            <DefaultButton>
                                Cancelar
                            </DefaultButton>
                            <PrimaryButton>
                                Guardar
                            </PrimaryButton>
                        </div>
                    </div>

                    <div className="w-full">
                        <ul className="grid w-full grid-cols-1 px-4 py-2 list-decimal border rounded-lg lg:grid-cols-2 2xl:grid-cols-3">
                            <li className="mx-6 my-2">
                                <div className="flex justify-between w-full border-b-1">
                                    <div className="text-gray-600">Titulo del archivo</div>
                                    <div className="relative flex items-center justify-center gap-2">
                                        <Tooltip showArrow={true} content="Eliminar">
                                            <span className="text-lg cursor-pointer text-default-400 active:opacity-50">
                                                <DeleteIcon width='16' height='18' className="hover:scale-125" />
                                            </span>
                                        </Tooltip>
                                    </div>
                                </div>
                            </li>
                            <li className="mx-6 my-2">
                                <div className="flex justify-between w-full border-b-1">
                                    <div className="text-gray-600">Titulo del archivo</div>
                                    <div className="relative flex items-center justify-center gap-2">
                                        <Tooltip showArrow={true} content="Eliminar">
                                            <span className="text-lg cursor-pointer text-default-400 active:opacity-50">
                                                <DeleteIcon width='16' height='18' />
                                            </span>
                                        </Tooltip>
                                    </div>
                                </div>
                            </li>
                            <li className="mx-6 my-2">
                                <div className="flex justify-between w-full border-b-1">
                                    <div className="text-gray-600">Titulo del archivo</div>
                                    <div className="relative flex items-center justify-center gap-2">
                                        <Tooltip showArrow={true} content="Eliminar">
                                            <span className="text-lg cursor-pointer text-default-400 active:opacity-50">
                                                <DeleteIcon width='16' height='18' />
                                            </span>
                                        </Tooltip>
                                    </div>
                                </div>
                            </li>
                            <li className="mx-6 my-2">
                                <div className="flex justify-between w-full border-b-1">
                                    <div className="text-gray-600">Titulo del archivo</div>
                                    <div className="relative flex items-center justify-center gap-2">
                                        <Tooltip showArrow={true} content="Eliminar">
                                            <span className="text-lg cursor-pointer text-default-400 active:opacity-50">
                                                <DeleteIcon width='16' height='18' />
                                            </span>
                                        </Tooltip>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
