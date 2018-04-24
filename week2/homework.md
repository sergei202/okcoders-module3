# Week 2 - Homework

## Part 1

Take the blog web app you created from Week 1 and add routing support.

Use the article index as the key/id for the route params.

If you went to `/articles/2` you would get the third article.

### Hints
- [Tour of Heroes - Routing](https://angular.io/tutorial/toh-pt5)
- [Angular Router Guide](https://angular.io/guide/router)
- Default to the first article with: `{path: '', redirectTo:'/articles/-', pathMatch:'full'}` in the `routes` array
