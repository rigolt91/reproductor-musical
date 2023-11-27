import DefaultButton from "@/Components/DefaultButton";
import FileInput from "@/Components/FileInput";
import DeleteIcon from "@/Components/Icons/DeleteIcon";
import FileIcon from "@/Components/Icons/FileIcon";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Card, CardBody, CardHeader, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import { useRef } from "react";

export default function CreateVisualFile() {
    const titleInput = useRef();

    const {data, setData, post, errors, processing, reset} = useForm({
        title: '',
        file: '',
    });

    function handleClickDelete() {
        console.log('Eliminar');
    }

    return (
        <Card radius="sm" shadow="sm" className="w-full">
            <CardHeader className="border-b bg-primary">
                <h3 className="font-bold text-white text-md">Archivos Visuales</h3>
            </CardHeader>
            <CardBody>
                <div className="flex-row lg:flex lg:grid-cols-2 space-x-4">
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
                                id="file_upload"
                                label="Subir archivo"
                                description="PNG, JPG, MPG, AVI, MP4 hasta 250MB"
                                value={data.file}
                                className="file:border-0"
                                icon={
                                    <FileIcon color="#9ca3af" width="30" height="48" />
                                }
                                errorMessage={errors.file}
                            />
                        </div>
                        <div className="flex justify-end mt-2 space-x-3">
                            <DefaultButton>
                                Cancelar
                            </DefaultButton>
                            <PrimaryButton>
                                Guardar
                            </PrimaryButton>
                        </div>
                    </div>

                    <div className="w-full">
                        <CardItem
                            title="Titulo del Archivo"
                            handleClick={() => handleClickDelete()}
                        />
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

const CardItem = ({ title, handleClick }) => {
    return (
        <ul className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
            <li className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 hover:shadow-lg border">
                <div className="flex w-full">
                    <div className="w-28 h-16 rounded-lg bg-gray-100 border">

                    </div>
                    <div className="flex justify-between w-full items-center px-3">
                        <div className="text-gray-600">{title}</div>
                        <div className="relative flex items-center gap-2 justify-center">
                            <Tooltip content="Eliminar">
                                <span onClick={handleClick} className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                    <DeleteIcon width='16' height='18' className="hover:scale-150" />
                                </span>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    );
}
