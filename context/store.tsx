import {FunctionComponent, useState} from "react";
import {Children} from "../types/types";
import {AppContext} from "./store.constants";

const Store: FunctionComponent<Children> = ({children}) => {
    const [signUpModalOpen, setSignUpModalOpen] = useState(false);
    const [signInModalOpen, setSignInModalOpen] = useState(false);
    const [addNewLinksModalOpen, setAddNewLinksModalOpen] = useState(false);
    const [listOfUserModalOpen, setListOfUserModalOpen] = useState(false);
    const [listOfUser, setListOfUser] = useState([""]);
    return (
        <AppContext.Provider value={{
            signUpModalOpen,
            setSignUpModalOpen,
            signInModalOpen,
            setSignInModalOpen,
            addNewLinksModalOpen,
            setAddNewLinksModalOpen,
            listOfUserModalOpen,
            setListOfUserModalOpen,
            listOfUser,
            setListOfUser
        }}>
            {children}
        </AppContext.Provider>
    )
}
export default Store;