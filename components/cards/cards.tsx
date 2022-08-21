import Card from "./card/card";
import {NetworkStatus, useQuery} from "@apollo/client";
import {GET_DATA_ABOUT_LINKS} from "../../graphql/queries/getDataAboutLinks";
import {useEffect, useState} from "react";
import {Links} from "../../types/links.types";
import {InView} from "react-intersection-observer";
import styles from "./cards.module.scss";
import Vote from "../vote/vote";
import Preloader from "../preloader/preloader";

const Cards = () => {
    const [fullyLoaded, setFullyLoaded] = useState(false);
    const {loading, networkStatus, data, error, fetchMore, variables} = useQuery(GET_DATA_ABOUT_LINKS, {
        notifyOnNetworkStatusChange: true,
        variables: {
            skipCount: 0,
            takeCount: 10
        }
    });
    useEffect(()=>{
        if(!loading){
            console.log(data.feed.links[0].votes)
        }
    },[])
    if (networkStatus === NetworkStatus.loading) {
        return <Preloader />;
    }
    if (error) return <div>Something went wrong</div>
    return (
        <div className={styles.wrapper}>
            {
                data.feed.links ? data.feed.links.map((el: Links) => (
                    <Card key={el.id} description={el.description} url={el.url} votes={el.votes}>
                        <Vote id={el.id}/>
                    </Card>
                )) : <div>somethimg went wrong</div>
            }
            {networkStatus !== NetworkStatus.fetchMore &&
                variables && (data.feed.links.length % variables.takeCount === 0) &&
                !fullyLoaded && (
                    <InView
                        onChange={async (inView) => {
                            if (inView) {
                                const result = await fetchMore({
                                    variables: {
                                        skipCount: data.feed.links.length
                                    },
                                    updateQuery: (prev, {fetchMoreResult}) => {
                                        if (!fetchMoreResult) {
                                            return prev
                                        }
                                        return {
                                            feed: {
                                                __typename: "Feed",
                                                links: [
                                                    ...prev.feed.links,
                                                    ...fetchMoreResult.feed.links
                                                ],
                                                count: prev.feed.count
                                            }
                                        }
                                    }

                                });
                                setFullyLoaded(!result.data.feed.links.length);
                            }
                        }}
                    />
                )}
        </div>
    )
}
export default Cards;