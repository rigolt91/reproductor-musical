import DefaultButton from "@/Components/DefaultButton";
import FileInput from "@/Components/FileInput";
import DeleteIcon from "@/Components/Icons/DeleteIcon";
import FileIcon from "@/Components/Icons/FileIcon";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Card, CardBody, CardHeader, Image, Progress, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import { useRef } from "react";

export default function CreateVisualFile({ listFile, visualFiles }) {
    const titleInput = useRef();

    const {data, setData, post, delete: destroy, errors, progress, reset, processing} = useForm({
        listFileId: listFile,
        title: '',
        file: '',
    });

    function submit(e) {
        e.preventDefault();
        post('/visual-file', {
            onSuccess: () => reset(),
            preserveScroll: true,
        });
    }

    return (
        <Card radius="sm" shadow="sm" className="w-full">
            <CardHeader className="border-b bg-primary">
                <h3 className="font-bold text-white text-md">Añadir archivos visuales</h3>
            </CardHeader>
            <CardBody>
                <div className="flex-row gap-4 lg:flex lg:grid-cols-2">
                    <div className="w-full lg:w-[600px]">
                        <form onSubmit={submit}>
                            <div className="mb-2">
                                <TextInput
                                    id="title"
                                    label="Título"
                                    baseRef={titleInput}
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    type="text"
                                    autoComplete="title"
                                    autoFocus
                                    errorMessage={errors.title}
                                />
                            </div>
                            <div className="mb-2">
                                <FileInput
                                    name="visual_file"
                                    label="Subir archivo"
                                    description="PNG, JPG, MPG, AVI, MP4 hasta 250MB"
                                    onChange={e => setData('file', e.target.files[0])}
                                    className="file:border-0"
                                    icon={
                                        <FileIcon color="#9ca3af" width="30" height="48" />
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

                    <div className="w-full h-full border rounded-lg p-1">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
                            {visualFiles.map(({ id, title, file, extension }) => (
                                <li key={id} className="p-2 border rounded-lg bg-gray-50 hover:bg-gray-100 hover:shadow-lg">
                                    <Li
                                        key={id}
                                        title={title}
                                        file={file}
                                        extension={extension}
                                        handleClick={() => destroy(`/visual-file/${id}`)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

const Li = ({ title, file, extension, handleClick }) => {
    return (
        <div className="flex w-full items-center">
            <div className="bg-gray-300 rounded-lg">
                {extension == 'png' || extension == 'jpg' || extension == 'jpeg'
                    ?  <Image
                            alt="NextUI hero Image"
                            radius="sm"
                            className="border bg-primary w-32 h-16"
                            src={`../../storage/images/${file}`}
                        />
                    : <video
                        src={`../../storage/videos/${file}`}
                        className="w-32 h-16 rounded-lg"
                        preload="metadata"
                        muted
                    ></video>
                }
            </div>

            <div className="flex items-center justify-between w-full px-3">
                <div className="text-gray-600">{title}</div>
                <div className="relative flex items-center justify-center gap-2">
                    <Tooltip showArrow={true} content="Eliminar">
                        <span onClick={handleClick} className="text-lg cursor-pointer text-default-400 active:opacity-50">
                            <DeleteIcon width='16' height='18' className="hover:scale-150" />
                        </span>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
}
