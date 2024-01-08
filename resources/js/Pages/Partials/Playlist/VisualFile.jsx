import DefaultButton from "@/Components/DefaultButton";
import FileInput from "@/Components/FileInput";
import DeleteIcon from "@/Components/Icons/DeleteIcon";
import FileIcon from "@/Components/Icons/FileIcon";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Card, CardBody, CardHeader, Divider, Image, Progress, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
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
        <Card radius="sm" shadow="sm" className="w-full px-1">
            <CardHeader className="py-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-film" viewBox="0 0 16 16">
                    <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"/>
                </svg>
                <h3 className="font-bold text-base ml-3">Añadir archivos visuales</h3>
            </CardHeader>
            <CardBody>
                <Divider className="-mt-3 mb-2 bg-gray-200" />
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

                    <div className="w-full h-full p-1 border rounded-lg">
                        <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
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
        <div className="flex items-center w-full">
            <div className="bg-gray-300 rounded-lg">
                {extension == 'png' || extension == 'jpg' || extension == 'jpeg'
                    ?  <Image
                            alt="NextUI hero Image"
                            radius="sm"
                            className="w-32 h-16 border bg-primary"
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
