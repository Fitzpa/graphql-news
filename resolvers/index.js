export const resolvers = {
    Query: {
        allArticles: (_, __, { dataSource }) => {
            Promise.all(
                Object.keys(dataSources).map(source => {
                    dataSources[source].getAllArticles()
                })
            ).then(result => result.reduce((accumulator, data) => accumulator.concat(data), []))
        },

        allArticlesBySource: (_, { source }, { dataSources }) => {
            dataSources[source].getAllArticles()
        },

        articleBySource: (_, { id, source }, { dataSources }) => {
            dataSources[source].getArticle(id, source)
        },

        articlesBySource: (_, { ids, source }, { dataSources }) => {
            dataSources[source].getArticlesByIds(ids)
        }
    }
}