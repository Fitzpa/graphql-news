import { RESTDataSource } from 'apollo-datasource-rest'
require('dotenv').config()

const API_KEY = process.env.API_KEY;

export class NewYorkTimesAPI extends RESTDataSource {
    constructor() {
        super();
    }
    articleReducer({ id, byline, url, published_date, title } = {}) {
        return {
            id: `newyorktimes-${id}`,
            title,
            author: byline,
            url,
            time: published_date,
            source: "New York Times"
        }
    }

    async getAllArticles() {
        const result = await this.get(
            `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`
        )
        // Using JavaScripts optional chaining to prevent the application from blowing up if there are no results
        return result?.results?.map(article => this.articleReducer(article));
    }


}