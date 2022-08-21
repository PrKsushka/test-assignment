import Modal from "../modal";
import {useContext} from "react";
import {AppContext} from "../../../context/store.constants";
import styles from "../modal.module.scss";

const ListOfUsersModal=()=>{
    const {listOfUserModalOpen, listOfUser}=useContext(AppContext);

    return(
        <Modal isActive={listOfUserModalOpen}>
            <h3 className={styles.title}>Users who have been voted for this post</h3>
            <div className={styles.bg}>
                {
                    listOfUser.map((el)=>(
                        <p key={el}>{el}</p>
                    ))
                }
            </div>
        </Modal>
    )
}
export default ListOfUsersModal;