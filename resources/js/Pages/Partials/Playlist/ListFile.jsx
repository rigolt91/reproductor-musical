import React, { useRef } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/react";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import DefaultButton from "@/Components/DefaultButton";
import PlusIcon from "@/Components/Icons/PlusIcon";
import TextInput from "@/Components/TextInput";

export default function CreateListFile({ isOpen, onOpenChange }) {
    const titleInput = useRef();

    const {data, setData, post, errors, reset, processing} = useForm({
        title: '',
    });

    function submit(e) {
        e.preventDefault();
        post('/playlists', {
            onSuccess: resetForm(),
            preserveScroll: true,
        });
    }

    function resetForm() {
        reset();
        onOpenChange();
    }

    return (
            <>
                <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    placement="top-center"
                    backdrop="opaque"
                >
                    <ModalContent>
                        {(onClose) => (
                            <form onSubmit={submit}>
                                <ModalHeader className="flex items-center border-b-2 gap-x-2 border-primary">
                                    <PlusIcon />
                                    Nueva lista
                                </ModalHeader>
                                <ModalBody>
                                    <div className="my-2">
                                        <TextInput
                                            id="title"
                                            label="Título"
                                            baseRef={titleInput}
                                            value={data.title}
                                            onChange={e => setData('title', e.target.value)}
                                            type="text"
                                            autoComplete="title"
                                            autoFocus={true}
                                            required
                                            errorMessage={errors.title}
                                        />
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <DefaultButton
                                        color="danger"
                                        variant="flat"
                                        onPress={onClose}
                                        disabled={processing}
                                    >
                                        Cancelar
                                    </DefaultButton>
                                    <PrimaryButton
                                        type="submit"
                                        color="primary"
                                        disabled={processing}
                                    >
                                        Guardar
                                    </PrimaryButton>
                                </ModalFooter>
                            </form>
                        )}
                    </ModalContent>
                </Modal>
            </>
    );
}
