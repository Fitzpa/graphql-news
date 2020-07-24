import { HackerNewsAPI } from './hackernews'
import { NewYorkTimesAPI } from './newyorktimes'

export default {
    hackernews: new HackerNewsAPI()
}

// typeDefs -> resolvers -> datasource