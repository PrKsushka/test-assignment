import Modal from "../modal";
import {useContext} from "react";
import {AppContext} from "../../../context/store.constants";
import {useForm} from "react-hook-form";
import {useMutation} from "@apollo/client";
import {SIGN_IN} from "../../../graphql/mutations/signIn";
import {useRouter} from "next/router";
import styles from "../modal.module.scss";

const signInModal = () => {
    const {signInModalOpen} = useContext(AppContext);
    const router = useRouter();
    const [signIn] = useMutation(SIGN_IN);
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({mode: "onChange"});
    const onSubmit = (data: any) => {
        signIn({
            variables: data
        }).then((res) => {
            if (res && typeof window !== "undefined") {
                localStorage.setItem("token", res.data.login.token);
                router.reload();
                document.getElementsByTagName("body")[0].style.overflowY = "auto"
            }
        })
        console.log(data)
    }
    return (
        <Modal isActive={signInModalOpen}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    email <input type="email" {...register("email")} />
                </label>
               <label>
                   password <input type="password" {...register("password")} />
               </label>
                <input type="submit" className={styles.but} value={"Send data"} />
            </form>
        </Modal>
    )
}
export default signInModal;