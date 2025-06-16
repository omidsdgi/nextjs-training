import {Input, Modal} from "@/components";
import {useModal} from "@/store/ModalContext";
import {useMutation} from "@tanstack/react-query";
import {toast} from "react-toastify";
import {loginApiCall} from "@/api/config/Auth";
import {useUser} from "@/store/AuthContext";
import {useForm} from "react-hook-form";
import {useBasket} from "@/hooks/use-basket";

interface Props {
    onClose: () => void;
}

interface FormData{
    identifier: string;
    password: string;
}

export function LoginModal({onClose}: Props) {
    const {openModal,closeModal} = useModal();

    const{uui2user}=useBasket()
    const {login}=useUser()
    const {register,handleSubmit,formState:{errors}}=useForm<FormData>()

    const mutate=useMutation({mutationFn:loginApiCall})

    const onSubmit=(data:FormData)=>{
        mutate.mutate(data, {onSuccess:(response)=>{
                login(response.jwt, response.user)
                toast.success('با موفقیت وارد حساب کاربری خود شدید')
                closeModal()
                uui2user()
            }});
    }


    return (
        <Modal title={'login'} closeModal={onClose}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Input register={register('identifier', {required: 'لطفا نام خود را وارد نمایید'})} label={'userName'}
                       errors={errors} {...{placeholder: 'Enter your username'}}/>
                <Input register={register('password', {
                    required: 'Please enter your password',
                    minLength: {value: 3, message: 'min 3 characters'},
                    maxLength: {value: 10, message: 'max 10 characters'}
                })} errors={errors} type={'password'} label={'Password'} {...{placeholder: 'Enter your username'}}/>

                <button className={'mt-2 bg-green-400 font-bold py-2 px-4 rounded'}>Submit</button>
            </form>
            <span className={'cursor-pointer mt-8 inline-block'} onClick={() => openModal('register')}>  to register modal</span>
        </Modal>

    );
}