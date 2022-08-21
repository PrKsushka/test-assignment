import React, {useContext} from "react";
import checkLink from "../../../utils/checkLink";
import styles from "./card.module.scss";
import {Children} from "../../../types/types";
import {Votes} from "../../../types/links.types";
import {AppContext} from "../../../context/store.constants";
import {storage} from "../../../pages/_app";

interface CardTypes extends Children {
    description: string;
    url: string;
    votes: Array<Votes> | undefined;
}

const Card: React.FunctionComponent<CardTypes> = ({description, url, votes, children}) => {
    const {setListOfUser, setListOfUserModalOpen} = useContext(AppContext);
    const showAllUsers = () => {
        if (storage && storage !== "") {
            if (votes) {
                console.log(votes)
                let arr = [];
                for (let i = 0; i < votes.length; i++) {
                    arr.push(votes[i].user.name);
                }
                setListOfUser(arr);
                setListOfUserModalOpen(true);
            }
        } else {
            alert("at first logged in!")
        }
    }
    return (
        <div className={styles.card}>
            <a href={checkLink(url)}
               target="_blank"
               rel="noopener noreferrer">
                {description}
            </a>
            <div onClick={showAllUsers} className={styles.show}>Show users who voted</div>
            {
                children
            }
        </div>
    )
}
export default Card;