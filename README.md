## Welcome to Ground Zero

This project is based of the astro template by [Oscar Barajas Tavares](https://github.com/gndx/ev0-astro-theme), 
special thanks to him and to his immaculate front end coding skills.

## The source folder

The source folder is the astro part, we added react and node to the original code base, the added features are:

- SSR using React: To send and retrieve form data
- Node: To add a server side layer to communicate with external API

Other than that the front end part is SEO optumized and consumes markdown blog files, node commands are utilized to create
new blog entries, and on build the proper configuration for SEO and Routing is handled.

## The backend

The backend contains the following features : 

- A Newsletter API: once a user sends his email from the front, he is added to a SQL database as a reader, each time a new blog is posted en email is sent to every user with the link, title and description of that blog post

- Unsbscribing Readers

- Email Verification with welcome email

## Upcoming Features: 

- Recommendation system : Send the users the content they may be interested to read based on past behaviour
- Dashboard to analyze user behaviour: Number of subscribers, Most read articles by category, tag etc..., Number of unsubscribed user, etc...

You can clone the project and use it if you are looking to have a smilar platform.