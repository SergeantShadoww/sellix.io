const request = require('request');
const functions = require("./functions")

class Client {
    constructor(api_key) {
        this.api_key = api_key

        this.url = 'https://dev.sellix.io/v1'
        this.headers = { Authorization: `Bearer ${this.api_key}` }
        this.api = {
            products: `${this.url}/products`,
            orders: `${this.url}/orders`,
            blacklist: `${this.url}/blacklists`,
            coupon: `${this.url}/coupons`,
            feedback: `${this.url}/feedback`,
            category: `${this.url}/categories`
        }

        // Validating API key.
        var headers = { headers: this.headers }
        request(this.api.products, headers, (err, res, body) => {
            body = JSON.parse(body)
            if (body.status == 401) return console.error("An error has occured: You have not supplied a valid API key, please try again.")
        })
    }

    getProduct(id) {
        if (!id || id == null || id == "undefined") return console.error(`An error has occured: Please provide a product ID.`)
        var url = `${this.api.products}/${id}`
        var options = { headers: this.headers }
        return new Promise((resolve, reject) => {
            request.get(url, options, (err, res, body) => {
                if (err) return console.error(`An error has occured whilst attempting to make request: ${err}`)
                body = JSON.parse(body)
                if (!body.status == 200) return console.error(`An error has occured: ${functions.response(body.status)}`)
                if (body.status == 404 || body.data == 200) return console.error(`An error has occured: ${body.error}`)
            })
        })
    }

    getAllProducts() {
        var url = this.api.products
        var options = { headers: this.headers }
        return new Promise((resolve, reject) => {
            request.get(url, options, (err, res, body) => {
                if (err) return console.error(`An error has occured whilst attempting to make request: ${err}`)
                body = JSON.parse(body)
                if (!body.status == 200) return console.error(`An error has occured: ${functions.response(body.status)}`)
                if (body.status == 404 || body.data == 200) return console.error(`An error has occured: ${body.error}`)
                if (res.statusCode == 200) return resolve(body.data.products)
            })
        })
    }

    getOrder(id) {
        if (!id || id == null || id == "undefined") return console.error(`An error has occured: Please provide an order ID.`)
        var url = `${this.api.orders}/${id}`
        var options = { headers: this.headers }
        return new Promise((resolve, reject) => {
            request.get(url, options, (err, res, body) => {
                if (err) return console.error(`An error has occured whilst attempting to make request: ${err}`)
                body = JSON.parse(body)
                if (!body.status == 200) return console.error(`An error has occured: ${functions.response(body.status)}`)
                if (body.status == 404 || body.data == null) return console.error(`An error has occured: ${body.error}`)
                if (res.statusCode == 200) return resolve(body.data.order)
            })
        })
    }

    getAllOrders() {
        var url = this.api.orders
        var options = { headers: this.headers }
        return new Promise((resolve, reject) => {
            request.get(url, options, (err, res, body) => {
                if (err) return console.error(`An error has occured whilst attempting to make request: ${err}`)
                body = JSON.parse(body)
                if (!body.status == 200) return console.error(`An error has occured: ${functions.response(body.status)}`)
                if (body.status == 404 || body.data == 200) return console.error(`An error has occured: ${body.error}`)
                if (res.statusCode == 200) return resolve(body.data.orders)
            })
        })
    }

    getCoupon(id) {
        if (!id || id == null || id == "undefined") return console.error(`An error has occured: Please provide a coupon ID.`)
        var url = `${this.api.coupon}/${id}`
        var options = { headers: this.headers }
        return new Promise((resolve, reject) => {
            request.get(url, options, (err, res, body) => {
                if (err) return console.error(`An error has occured whilst attempting to make request: ${err}`)
                body = JSON.parse(body)
                if (!body.status == 200) return console.error(`An error has occured: ${functions.response(body.status)}`)
                if (body.status == 404 || body.data == null) return console.error(`An error has occured: ${body.error}`)
                if (res.statusCode == 200) return resolve(body.data.coupon)
            })
        })
    }

    getAllCoupons() {
        var url = this.api.coupon
        var options = { headers: this.headers }
        return new Promise((resolve, reject) => {
            request.get(url, options, (err, res, body) => {
                if (err) return console.error(`An error has occured whilst attempting to make request: ${err}`)
                body = JSON.parse(body)
                if (!body.status == 200) return console.error(`An error has occured: ${functions.response(body.status)}`)
                if (body.status == 404 || body.data == 200) return console.error(`An error has occured: ${body.error}`)
                if (res.statusCode == 200) return resolve(body.data.coupons)
            })
        })
    }

    getFeedback(id) {
        if (!id || id == null || id == "undefined") return console.error(`An error has occured: Please provide a feedback ID.`)
        var url = `${this.api.feedback}/${id}`
        var options = { headers: this.headers }
        return new Promise((resolve, reject) => {
            request.get(url, options, (err, res, body) => {
                if (err) return console.error(`An error has occured whilst attempting to make request: ${err}`)
                body = JSON.parse(body)
                if (!body.status == 200) return console.error(`An error has occured: ${functions.response(body.status)}`)
                if (body.status == 404 || body.data == 200) return console.error(`An error has occured: ${body.error}`)
                if (res.statusCode == 200) return resolve(body.data.feedback)
            })
        })
    }

    getAllFeedback() {
        var url = this.api.feedback
        var options = { headers: this.headers }
        return new Promise((resolve, reject) => {
            request.get(url, options, (err, res, body) => {
                if (err) return console.error(`An error has occured whilst attempting to make request: ${err}`)
                body = JSON.parse(body)
                if (!body.status == 200) return console.error(`An error has occured: ${functions.response(body.status)}`)
                if (body.status == 404 || body.data == 200) return console.error(`An error has occured: ${body.error}`)
                if (res.statusCode == 200) return resolve(body.data.feedback)
            })
        })
    }

    getBlacklist(id) {
        if (!id || id == null || id == "undefined") return console.error(`An error has occured: Please provide a blacklist ID.`)
        var url = `${this.api.blacklist}/${id}`
        var options = { headers: this.headers }
        return new Promise((resolve, reject) => {
            request.get(url, options, (err, res, body) => {
                if (err) return console.error(`An error has occured whilst attempting to make request: ${err}`)
                body = JSON.parse(body)
                if (!body.status == 200) return console.error(`An error has occured: ${functions.response(body.status)}`)
                if (body.status == 404 || body.data == 200) return console.error(`An error has occured: ${body.error}`)
                if (res.statusCode == 200) return resolve(body.data.blacklist)
            })
        })
    }

    getAllBlacklist() {
        var url = this.api.blacklist
        var options = { headers: this.headers }
        return new Promise((resolve, reject) => {
            request.get(url, options, (err, res, body) => {
                if (err) return console.error(`An error has occured whilst attempting to make request: ${err}`)
                body = JSON.parse(body)
                if (!body.status == 200) return console.error(`An error has occured: ${functions.response(body.status)}`)
                if (body.status == 404 || body.data == 200) return console.error(`An error has occured: ${body.error}`)
                if (res.statusCode == 200) return resolve(body.data.blacklists)
            })
        })
    }

    getCategory(id) {
        if (!id || id == null || id == "undefined") return console.error(`An error has occured: Please provide a category ID.`)
        var url = `${this.api.category}/${id}`
        var options = { headers: this.headers }
        return new Promise((resolve, reject) => {
            request.get(url, options, (err, res, body) => {
                if (err) return console.error(`An error has occured whilst attempting to make request: ${err}`)
                body = JSON.parse(body)
                if (!body.status == 200) return console.error(`An error has occured: ${functions.response(body.status)}`)
                if (body.status == 404 || body.data == 200) return console.error(`An error has occured: ${body.error}`)
                if (res.statusCode == 200) return resolve(body.data.category)
            })
        })
    }

    getAllCategories() {
        var url = this.api.category
        var options = { headers: this.headers }
        return new Promise((resolve, reject) => {
            request.get(url, options, (err, res, body) => {
                if (err) return console.error(`An error has occured whilst attempting to make request: ${err}`)
                body = JSON.parse(body)
                if (!body.status == 200) return console.error(`An error has occured: ${functions.response(body.status)}`)
                if (body.status == 404 || body.data == 200) return console.error(`An error has occured: ${body.error}`)
                if (res.statusCode == 200) return resolve(body.data.categories)
            })
        })
    }

}

module.exports = Client