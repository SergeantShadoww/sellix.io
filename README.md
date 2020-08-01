# sellix.io
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

api.getOrder(ID)
  .then(data => {})
  .catch(items => {
	console.log(items);
  });

// This funtion returns all feedback left on your profile.

API.getFeedback()
  .then(data => {})
  .catch(items => {
	console.log(items);
  });
```

# Available Functions (API Endpoints)

### getOrder(ID)
Retrieves the order which you specified.

### getAllOrders()
Retrieves a specific order.

### getProducts()
Retrieves all products.

### getSpecificProduct(ID)
Retrieves a specific product.

### updateProduct(ID, {})
Updates a specific product.

### getCoupons()
Retrieves all coupons.

### getSpecificCoupon(ID)
Retrieves a specific coupon

### getQueries()
Retrieves all queries.

### getSpecificQuery(ID)
Retrieves a specific query.

### getWebhooks()
Retrieves all webhooks.

### getSpecificWebhook(ID)
Retrieves a specific webhook.

### getFeedback()
Retrieves all feedback.

### getSpecificFeedback(ID)
Retrieves a specific feedback.

### getTickets()
Retrieves all tickets.

### getSpecificTicket(ID)
Retrieves a specific ticket.

### getNotifications()
Retrieves all notifications.

### markAllNotificationsAsRead()
Marks all notifications as read.

### markNotificationAsRead(ID)
Marks a specific notification as read.

### getUser()
Retrieves your user info.

### getSettings()
Retrieves your settings.

### updateSettings({})
Updates your settings.