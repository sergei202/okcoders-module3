# Week 3 - April 28th

Today we are going to connect our Angular frontend to our Node backend.

We'll use Express with Node and Angular's built-in `HttpClient`.

## Node and Express

We've seen Express before from the last module.  If you need a refresher:
- [Module 2 - Week 4](https://github.com/sergei202/okcoders-module2/blob/master/week4/README.md#web-servers-and-express)
- [Express's Hello World](https://expressjs.com/en/starter/hello-world.html)
- [Express's Basic Routing](https://expressjs.com/en/starter/basic-routing.html)

### `bodyParser`

We'll need one more package called [`bodyParser`](https://github.com/expressjs/body-parser) to parse POST requests.

Here is a very basic Node/express server:

```js
// Import the express module.
const express = require('express');
// Import bodyParser
const bodyParser = require('body-parser');

// Create an express app
const app = express();

// Initialize and use bodyParser
app.use(bodyParser.json());

// Add a GET request handler at root
app.get('/', (req,res) => {
	res.send('<h1>Hello World!</h1>');
});

// Add a POST request handler at root
app.post('/', (req,res) => {
	res.json(req.body);		// Just send back what was sent to us
});

// Tell our app to listen on port 8080
app.listen(8080, err => {
	// Tell the user we're ready to go
	console.log('Listening at http://localhost:8080');
});
```

## Angular and `HttpClient`

First read the [`HttpClient` Guide](https://angular.io/guide/http).

Before we can use HttpClient, we need to import it into our app module:

```ts
// app.module.ts
...
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		...
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
```

After that, we can inject `HttpClient` into our components or services.

```ts
constructor(private http:HttpClient) { }	// Inject HttpClient as http
```

By default HttpClient returns an [`Observable`](https://angular.io/guide/observables), we can convert it into a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) by using the `.toPromise()` method.

Why would we want to convert it?  Because Promises are slightly easier to use.  Here's a full example:

```ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	constructor(private http:HttpClient) {
		this.http.get('/time').toPromise().then(time => {
			console.log('The server time is: ', time);
		});
	}
}
```

## Full Example/Template

See [angular-node-template](https://github.com/sergei202/angular-node-template) for a full server/client example.
