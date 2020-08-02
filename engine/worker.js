const request = require('request');
const functions = require("./functions");

class Client {
    constructor(api_key) {
        this.api_key = api_key
        this.headers = { Authorization: `Bearer ${this.api_key}` }

        /**
         * Validating API key.
         * Request is sent to API.
         * If status is 401 (unauthorized), API key is invalid.
         */
        
        var headers = { headers: this.headers }
        request("https://dev.sellix.io/v1/products", headers, (err, res, body) => {
            body = JSON.parse(body)
            if (body.status == 401) return console.error("An error has occured: You have not supplied a valid API key, please try again.")
        })
    }

    getProduct(id) {
        if (!id || id == null || id == "undefined") return console.error(`An error has occured: Please provide a product ID.`)
        return this.get(`products/${id}`, { id }, body => body.data);
    }

    getAllProducts() {
        return this.get(`products`, body => body.data.products)
    }

    getOrder(id) {
        if (!id || id == null || id == "undefined") return console.error(`An error has occured: Please provide an order ID.`)
        return this.get(`orders/${id}`, { id }, body => body.data);
    }

    getAllOrders() {
        return this.get(`orders`, body => body.data.orders)
    }

    getCoupon(id) {
        if (!id || id == null || id == "undefined") return console.error(`An error has occured: Please provide a coupon ID.`)
        return this.get(`coupons/${id}`, { id }, body => body.data);
    }

    getAllCoupons() {
        return this.get(`coupons`, body => body.data.coupons)
    }

    getFeedback(id) {
        if (!id || id == null || id == "undefined") return console.error(`An error has occured: Please provide a feedback ID.`)
        return this.get(`feedback/${id}`, { id }, body => body.data);
    }

    getAllFeedback() {
        return this.get(`feedback`, body => body.data.feedback)
    }

    getBlacklist(id) {
        if (!id || id == null || id == "undefined") return console.error(`An error has occured: Please provide a blacklist ID.`)
        return this.get(`blacklist/${id}`, { id }, body => body.data);
    }

    getAllBlacklist() {
        return this.get(`blacklist`, body => body.data.blacklists)
    }

    getCategory(id) {
        if (!id || id == null || id == "undefined") return console.error(`An error has occured: Please provide a category ID.`)
        return this.get(`categories/${id}`, { id }, body => body.data);
    }

    getAllCategories() {
        return this.get(`categories`, body => body.data.categories)
    }

    getQuery(id) {
        if (!id || id == null || id == "undefined") return console.error(`An error has occured: Please provide a query ID.`)
        return this.get(`queries/${id}`, { id }, body => body.data);
    }

    getAllQueries() {
        return this.get(`queries`, body => body.data.queries)
    }

    /**
     * The heart of the module.
     * This function is called
     * whenever we want to retrieve data.
     */

    get(url, params = {}, step) {
        if (arguments.length === 2 && typeof (params) === 'function') {
            step = params;
            params = {};
        }

        return new Promise((resolve, reject) => {
            request({
                url: `https://dev.sellix.io/v1/${url}`,
                headers: {
                    'Authorization': `Bearer ${this.api_key}`,
                },
                json: true
            }, (err, res, body) => {
                let msg = functions.response(body.status)
                if (!body.status == 200) return console.log((JSON.parse(`{ "error": "${msg}"}`)))
                if (body.status == 404) return console.log((JSON.parse(`{ "error": "${body.error}"}`)))

                if (err || body.length == 0) {
                    reject(err || body)
                    return;
                }

                if (typeof (step) === 'function') {
                    resolve(step(body));
                } else {
                    return resolve(body)
                }
            })
        })
    }
}

module.exports = Client