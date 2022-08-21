import Modal from "../modal";
import {useContext} from "react";
import {AppContext} from "../../../context/store.constants";
import {useMutation} from "@apollo/client";
import {useForm} from "react-hook-form";
import {CREATE_NEW_USER} from "../../../graphql/mutations/createNewUser";
import styles from "../modal.module.scss";

const SignUpModal = () => {
    const {signUpModalOpen} = useContext(AppContext);
    const [createNewUser] = useMutation(CREATE_NEW_USER);
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({mode: "onChange"});
    const onSubmit = (data: any) => {
        createNewUser({
            variables: data
        }).then((res) => {
            alert("you have been registered now you need to sign in");
        })
    }
    return (
        <Modal isActive={signUpModalOpen}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    name <input type="text" {...register("name")}/>
                </label>
                <label>
                    email <input type="email" {...register("email")} />
                </label>
                <label>
                    password <input type="password" {...register("password")} />
                </label>
                <input type="submit" className={styles.but} value={"Send data"}/>
            </form>
        </Modal>
    )
}
export default SignUpModal;