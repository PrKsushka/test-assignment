import {FunctionComponent, useContext} from "react";
import {AppContext} from "../../context/store.constants";
import ReactDOM from 'react-dom';
import styles from './modal.module.scss';
import {Children} from "../../types/types";

interface ModalTypes extends Children {
    isActive: boolean;
}

const Modal: FunctionComponent<ModalTypes> = ({isActive, children}) => {
    const {setSignUpModalOpen, setAddNewLinksModalOpen, setSignInModalOpen, setListOfUserModalOpen} = useContext(AppContext);
    let body: any = null;
    let portal: any = null;
    if (typeof window !== "undefined") {
        body = document.getElementsByTagName('body')[0];
        portal = document.getElementById('portal');
    }
    const cancelModal = () => {
        setSignUpModalOpen(false);
        setAddNewLinksModalOpen(false);
        setSignInModalOpen(false);
        setListOfUserModalOpen(false);
        if (body) {
            body.style.overflowY = "auto"
        }
    }
    if (isActive && body && portal) {
        body.style.overflowY = 'hidden';
        return ReactDOM.createPortal(
            <div className={styles.modalWrapper}>
                <div className={styles.iconCancel} onClick={cancelModal}/>
                <div>{children}</div>
            </div>,
            portal
        );
    } else {
        return null;
    }
}
export default Modal;