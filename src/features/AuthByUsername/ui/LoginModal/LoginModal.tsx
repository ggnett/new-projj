import React from 'react';
import { Modal } from 'widgets/Modal';
import LoginFrom from '../LoginForm/LoginForm';

interface props {
    isOpen: boolean;
    setOpen: () => void;
}

export default function LoginModal(props: props) {
    const { isOpen, setOpen } = props;

    return (
        <Modal isOpen={isOpen} setOpen={setOpen}>
            <LoginFrom />
        </Modal>
    );
}
