import {Dispatch, ReactNode, SetStateAction} from "react";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;
export interface ElementsForModalActivation {
    signUpModalOpen: boolean;
    setSignUpModalOpen: Dispatcher<boolean>;
    signInModalOpen: boolean;
    setSignInModalOpen: Dispatcher<boolean>;
    addNewLinksModalOpen: boolean;
    setAddNewLinksModalOpen: Dispatcher<boolean>;
    listOfUserModalOpen: boolean;
    setListOfUserModalOpen: Dispatcher<boolean>;
    listOfUser: Array<string>;
    setListOfUser: Dispatcher<string[]>;
}

export interface Children {
    children: ReactNode;
}