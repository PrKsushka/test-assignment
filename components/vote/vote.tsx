import styles from "./vote.module.scss";
import React, {FunctionComponent, useContext} from "react";
import {useMutation} from "@apollo/client";
import {VOTE_FOR_POST} from "../../graphql/mutations/voteForPost";
import {storage} from "../../pages/_app";
import {AppContext} from "../../context/store.constants";

interface VoteTypes {
    id: number|undefined;
}

const Vote: FunctionComponent<VoteTypes> = ({id}) => {
    const {setSignInModalOpen} = useContext(AppContext);
    const [vote] = useMutation(VOTE_FOR_POST);

    const handleClick = (e:any) => {
        console.log(e)
        if (storage && storage !== "") {
            if (id) {
                vote({
                    variables: {
                        linkId: id
                    }
                }).then((res) => {
                    if (res) {
                        alert(`you have been voted for this post with id = ${id}`);
                        e.target.className=`${styles.vote} ${styles.clicked}`;
                    }
                }).catch((err)=>{
                    alert("you have already been voted for this post! Choose another post");
                })
            }
        } else {
            alert("you should be logged in first");
            setSignInModalOpen(true);
        }
    }
    return (
        <div className={styles.vote} onClick={handleClick}>vote</div>
    )
}
export default Vote;