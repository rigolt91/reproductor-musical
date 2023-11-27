import React, { useRef, useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import DefaultButton from "@/Components/DefaultButton";
import PlusIcon from "@/Components/Icons/PlusIcon";
import TextInput from "@/Components/TextInput";

export default function CreateListFile({ isOpen, onOpenChange }) {
    const titleInput = useRef();

    const {data, setData, get, post, errors, processing} = useForm({
        title: '',
    });

    function handleClickSave() {
        console.log('save data');
        get('new-playlist');
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
                            <>
                                <ModalHeader className="flex items-center gap-x-2 border-b-2 border-primary">
                                    <PlusIcon />
                                    Nueva lista
                                </ModalHeader>
                                <ModalBody>
                                <TextInput
                                    id="title"
                                    label="Título"
                                    baseRef={titleInput}
                                    value={data.title}
                                    type="text"
                                    autoComplete="title"
                                    autoFocus={true}
                                    errorMessage={errors.title}
                                />
                                </ModalBody>
                                <ModalFooter>
                                    <DefaultButton color="danger" variant="flat" onPress={onClose}>
                                        Cancelar
                                    </DefaultButton>
                                    <PrimaryButton color="primary" onPress={handleClickSave}>
                                        Guardar
                                    </PrimaryButton>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </>
    );
}
