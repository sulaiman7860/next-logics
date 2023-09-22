var contentful = require("contentful")
const { space } = require("postcss/lib/list")

const client = contentful.createClient({
    accessToken:process.env.CONTENTFULL_ACCESS_TOKEN,
    space:process.env.CONTENTFULL_SPACE
})

export default client