import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../context/store.constants";
import SignUpModal from "../modal/module/signUpModal";
import SignInModal from "../modal/module/signInModal";
import styles from "./header.module.scss";
import AddNewLinksModal from "../modal/module/addNewLinksModal";
import {storage} from "../../pages/_app";
import {useRouter} from "next/router";
import {useSubscription} from "@apollo/client";
import {SUBSCRIBE_TO_NEW_LINK} from "../../graphql/subscribtions/subscribeToNewLink";
import ListOfUsersModal from "../modal/module/listOfUsersModal";

const Header = () => {
    const {
        setSignUpModalOpen,
        signUpModalOpen,
        setSignInModalOpen,
        signInModalOpen,
        setAddNewLinksModalOpen,
        addNewLinksModalOpen,
        listOfUserModalOpen
    } = useContext(AppContext);
    const router = useRouter();
    const [changeButtons, setChangeButtons] = useState(false);
    useEffect(() => {
        if (storage == null) {
            setChangeButtons(true);
        } else {
            setChangeButtons(false);
        }
    }, [changeButtons])
    const signUp = () => {
        setSignUpModalOpen(true);
    }
    const signIn = () => {
        setSignInModalOpen(true);
    }
    const logOut = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("token");
            router.reload()
        }
    }
    const addLink = () => {
        if (storage && storage !== "") {
            setAddNewLinksModalOpen(true);
        } else {
            alert("you shold be at first logged in");
            setSignInModalOpen(true)
        }
    }
    // const {data, loading} = useSubscription(SUBSCRIBE_TO_NEW_LINK, {
    //     onSubscriptionData: (data) => {
    //         console.log(data)
    //         console.log("message recieved")
    //
    //     }
    // });
    return (
        <div className={styles.wrapper}>
            <div className={styles.description}>
                <h3>links</h3>
                <p>add read create</p>
            </div>
            <div className={styles.buttons}>
                <button onClick={addLink}>Add Link</button>
                {
                    changeButtons ?
                        <>
                            <button onClick={signUp}>Sign Up</button>
                            <button onClick={signIn}>Sign In</button>
                        </> :
                        <button onClick={logOut}>Log out</button>
                }
            </div>
            {signUpModalOpen ? <SignUpModal/> : null}
            {signInModalOpen ? <SignInModal/> : null}
            {addNewLinksModalOpen ? <AddNewLinksModal/> : null}
            {listOfUserModalOpen ? <ListOfUsersModal/> : null}
        </div>
    )
}
export default Header;