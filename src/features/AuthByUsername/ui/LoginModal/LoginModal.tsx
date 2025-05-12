import React, { Suspense, useState } from 'react';
import { Modal } from 'widgets/Modal';
import { Loader } from 'shared/ui/Loader';
import LoginFrom from '../LoginForm/LoginForm';
import LoginFormLazy from '../LoginForm/LoginForm.lazy';

interface props {
    isOpen: boolean;
    setOpen: () => void;
}

export default function LoginModal(props: props) {
    const { isOpen, setOpen } = props;

    return (
        <Modal isOpen={isOpen} setOpen={setOpen}>
            {/* <LoginFrom isOpen={isOpen} setOpen={setOpen} /> */}
            <Suspense fallback={<Loader />}>
                <LoginFormLazy isOpen={isOpen} setOpen={setOpen} />
            </Suspense>
        </Modal>
    );
}
