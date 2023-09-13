import axios from "axios"

const fetchData = async () => {

    const { data: { articles = [] } } = await axios
        .get(
            "https://newsapi.org/v2/everything?domains=techcrunch.com&apiKey=c3c1c256208c44fabbdeef16d5932954&pageLimit=100&page2")
        .catch((error) => {
            console.log('error :>> ', error);
        })
    return articles;
}


export default fetchData