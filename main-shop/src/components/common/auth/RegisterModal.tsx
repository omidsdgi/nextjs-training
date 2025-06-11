import {Modal} from "@/components";
import React from "react";

interface Props {
    onClose: () => void;
}

export function RegisterModal({onClose}: Props) {
    return  (
        <Modal title={'Register'} closeModal={onClose}>

        </Modal>
    );
}