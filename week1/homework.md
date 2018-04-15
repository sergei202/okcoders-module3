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
- Remember that CSS can only affect the component that's for.
- I used the Bootstrap [`page-header`](https://getbootstrap.com/docs/3.3/components/#page-header) class in my example.
- If you get stuck with a white screen, remember to check your console for errors
- Finally, if you need help, reach out to me!  That's why I'm here.
