import {Modal} from "@/components";
import {useModal} from "@/store/ModalContext";

interface Props {
    onClose: () => void;
}

export function LoginModal({onClose}: Props) {
    const {openModal}=useModal()
    return  (
        <Modal title={'Login'} closeModal={onClose} >
            <form action=""></form>
            <span onClick={()=>openModal('register')} className={'text-black mt-5 cursor-pointer'}>go to register modal</span>
        </Modal>
    );
}