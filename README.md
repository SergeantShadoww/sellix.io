# sellix.io

[![NPM](https://nodei.co/npm/sellix.io.png?compact=true)](https://nodei.co/npm/sellix.io/)

An API wrapper for the e-commerce site known as sellix.io.

```js
const Sellix = require('sellix.io');

const api = new Sellix.Client(api_key_here)
```

# Installation
```javascript
$ npm install sellix.io
```

# API
To make Sellix.io API calls you need to initate the Sellix.Client class by passing it your Sellix.io API Key.

All calls return a promise with the data from the response. If there is an error making the request or the status of the request from Shoppy is not "success" the promise will be rejected.

# Example usage
```javascript
const Sellix = require('sellix.io');

const api = new Sellix.Client(apiKey)

// This function returns information about a specific order based on it's ID.

api.getOrder().then(data => console.log(data)))

// This funtion returns all feedback left on your profile.

api.getAllFeedback().then(data => console.log(data)))
```

# Available API Endpoints

### getOrder(ID)
Retrieves a specific order.

### getAllOrders()
Retrieves all orders.

### getProduct(ID)
Retrieves a specific product.

### getAllProducts()
Retrieves all products.

### getCoupon(ID)
Retrieves a specific coupon.

### getAllCoupons()
Retrivies all coupons.

### getFeedback(ID)
Retrieves a specific feedback.

### getAllFeedback()
Retrieves all feedback.

---

API key validator has also been implemented.

More endpoints will be added soon.