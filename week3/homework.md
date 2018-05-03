# Week 3 - Homework

## Part 1

Clone the [angular-node-template](https://github.com/sergei202/angular-node-template) repo and set it up on your laptop.
Read the repo instructions on setting up and running.  

- If you need help cloning: https://help.github.com/articles/cloning-a-repository/
- If you need help installing Git: https://gist.github.com/derhuerst/1b15ff4652a867391f03
- Review the code, make sure you understand it.  Ask questions!

## Part 2

Add another area to the `ExamplesComponent` that will add two numbers _on the server_:

- You'll need two `<input>` fields
- You'll need a way for the user to trigger it (like a button)
- A function for the button to call
- The function needs to call a route on the server (I suggest `/api/example/add`)
- A route on the server to do the heavy-lifting of adding two numbers

You have everything you need to do that in this repo, all the pieces are there.

## Part 3

Create a new component that will allow you to add and display items stored on the server:

- Create a component, call it `List` (`ng generate component List`)
- Replace the `Examples` component with `List` (change `app-examples` to `app-list` in `home-component.html`)
- First get your list working client-side, you'll need:
	- An input field and button to add new items
	- An array to store the items
	- An unordered list and `*ngFor`
- Once that is working, move the array server-side, you'll need:
	- An express GET route to get the items (I suggest `/api/items`)
	- An express POST route to add an item (I suggest `/api/item`)
	- Wire up your frontend controller to use `HttpClient` to make calls to the backend
