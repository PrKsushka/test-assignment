function checkLink(url: string){
    if(url.includes("https://") || url.includes("http://")){
        return url;
    } else {
        return "http://"+url;
    }
}
export default checkLink;
