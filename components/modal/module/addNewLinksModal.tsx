import Modal from "../modal";
import {useContext} from "react";
import {AppContext} from "../../../context/store.constants";
import {useMutation} from "@apollo/client";
import {ADD_NEW_LINK} from "../../../graphql/mutations/addNewLink";
import {useForm} from "react-hook-form";
import styles from "../modal.module.scss";

const AddNewLinksModal = () => {
    const {addNewLinksModalOpen, setAddNewLinksModalOpen} = useContext(AppContext);
    const [newLink] = useMutation(ADD_NEW_LINK);
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({mode: "onChange"});
    const onSubmit = (data: any) => {
        newLink({
            variables: data
        }).then((res) => {
            if (res && window !== undefined) {
                alert("post has been created successfully");
                setAddNewLinksModalOpen(false);
                document.getElementsByTagName("body")[0].style.overflowY = "auto";
            }
        })
    }
    return (
        <Modal isActive={addNewLinksModalOpen}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    url <input type="text" {...register("url")}/>
                </label>
                <label>
                    description <input type="text" {...register("description")} />
                </label>
                <input type="submit" className={styles.but} value={"Send data"}/>
            </form>
        </Modal>
    )
}
export default AddNewLinksModal;