# Week 1 - Homework

##### If you haven't gone through the [Tour of Heroes](https://angular.io/tutorial) tutorial, do that first!

We're going to a very simple blog website for this week's homework.  Every day (Sunday, Tuesday, Thursday) will build on the previous.

- Day 1: Setup, Bootstrap, Layout
- Day 2: Article List and Data
- Day 3: Article Detail and Navigation


## Day 1 - Sunday 4/15

### Setup
Create a new Angular 5 project called `blog` using `ng new`.
Make sure you don't do this in your `helloWorld` directory, you want to keep projects separate.

Test that's working with `ng serve` before continuing.
Make sure you don't forget to `cd` into the newly created `blog` directory first!

### Bootstrap
Before moving on, let's add Bootstrap (v3) to our project.

Open `src/app/index.html` and add these two lines to the `<head>` section:

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css">
```
Save and you should see the fonts change and become less ugly.

### Layout

We want our blog to have a 3 panel layout:
- A top area for our blog's title and future links
- A sidebar area for our list of articles
- A main area to display the selected article

We're going to create a `Header` component to store our header code.
The sidebar and main area will just be a bootstrap `row` and `col`s for now.

Here's an idea of what it should look like:

![Blog Layout Example](http://sergei202.com/blog-layout.png)

#### Hints
- Your blog doesn't have to look like mine at all, it just has to have the general layout.
- Remember that CSS can only affect the component that it's for.
- I used the Bootstrap [`page-header`](https://getbootstrap.com/docs/3.3/components/#page-header) class in my example.
- If you get stuck with a white screen, remember to check your console for errors
- Finally, if you need help, reach out to me!  That's why I'm here.


## Day 2 - Tuesday 4/17

Today we're going to add articles to our blog site!

### Article Component

First thing we are going to do is create a component to house our article data and views.  I suggest calling it `ArticleList`.

Go ahead and move the the Side Menu and Main Area from `AppComponent` to `ArticleListComponent`.

You should now have something that looks exactly the same as before (don't forget to move any CSS as well).

### Article Data

Inside our `ArticleListComponent`, we're going to add an `articles` property that'll be an array of article objects.
I suggest each article object have a `title` and `body` property.

### Display the Articles

Use the `ngFor` directive to list the articles in the Side Menu area.  You can use a unordered list or whatever you want.

You should have something that looks like this:

![Blog List Example](http://sergei202.com/blog-list.png)

We'll add the article body and navigation on Thursday!

#### Hints
- Read the [Tour of Heroes](https://angular.io/tutorial)

## Day 3 - Thursday 4/19

We're going to make the list of articles clickable and display `article.body` in the main area.

### Setup

First thing we need is to add a property to our `ArticleListComponent` to track the selected article.
I suggest calling it `selectedArticle`.  We also want to initialize it to the first article in our array.

### Display

Now we need to add the `selectedArticle` binds to the markup.  Take our the "My Main Area" placeholder text
and replace it with a `<h2>` and `<p>` tag containing `selectedArticle.title` and `selectedArticle.body`.

You should have have the first article showing up in the main area!

### Selecting Different Articles

We need to make the `<li>`s in our article list clickable.  When clicked we need to change `selectedArticle` to the article that was clicked.

The click expression can change `selectedArticle` directly, but try using a class method (function) to do it.

### Bonus

- Style the list elements to look like links.
- Use [class bindings](https://angular.io/guide/template-syntax#class-binding) to make the selected article bold in the list.


#### Hints
- Remember to use `this` when accessing properties inside of the component class.
- If you get stuck, ask for help!  Either from me or your fellow students.
- Here's an example:

![Blog Detail Example](http://sergei202.com/blog-detail.png)
