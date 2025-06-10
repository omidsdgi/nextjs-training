import {Modal} from "@/components";
import React from "react";
import {createPortal} from "react-dom";

interface Props {
    onClose: () => void;
}

export function LoginModal({onClose}: Props) {
    return  (
        <Modal title={'Login'} closeModal={onClose}>

        </Modal>
    );
}