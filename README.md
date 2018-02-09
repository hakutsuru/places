places
=====	

*Congratulations! 
Today is your day. 
You're off to Great Places! 
You're off and away!*
-- Dr Suess

## Orientation

React is everywhere, you will face it sometime, so why not lace up?

I love books. React is one of those projects that *moves too fast* for a book to be considered effective. A friend picked up [*Learning React*](https://www.pearson.com/us/higher-education/program/Chinnathambi-Learning-React/PGM335074.html), and it looks fun.

But let's go for a quick challenge, how far could you get in maybe an hour (discounting stumbles), for the backend and frontend.

Python is simple enough, and everyone knows JavaScript...

Vagrant is not required, but it's nice -- and gets us closer to a production environment.

Provision ubuntu with Flask and create-react-app. Shared folders are good, but revising files in your host will not be noticed by vagrant/webpack -- your vim/emacs mastery will avoid frustration when updating the react component.

[If the shortcuts seem lazy, consider how many minutes each fix would require... Vagrant introduces issues, that would be solved for a real project.]

## Backend

Pick some places you should go.

Put these in a file as json. This will stand in for your database.

The object is to create a get endpoint to list your places. Nope on hateoas, just a list endpoint, perhaps `/places`.

You could use django, but try [Flask](http://flask.pocoo.org).

Create hello-world, but name the file `places.py`.

Serve the backend api via...
```
$ cd vagrant/pad_dev/
$ vagrant up
$ vagrant ssh
vagrant@pad-dev:~$ cd /opt/backend
vagrant@pad-dev:/opt/backend$ FLASK_APP=places.py flask run
```

In a terminal, check the server...
```
$ vagrant ssh
vagrant@pad-dev:~$ curl localhost:5000/places
[{"city": "Portland", "key": 88}, {"city": "Paris", "key": 42}, {"city": "New York", "key": 333}]
```

Now hack the app to return your amazing places.

*What's missing?* **python virtual environment, cors, nginx, etc**

## Frontend

[create-react-app](https://github.com/facebookincubator/create-react-app) is your fast track to experiencing the magic of convention-over-configuration, *JavaScript style*.

Here is how the frontend was created...
```
vagrant@pad-dev:/opt$ create-react-app frontend
```

Changing only `src/App.js`, you should be able to display your places data. Ahem, of course not, that would require cors, and we are not going there on a quick jaunt.

So add a proxy to `package.json`, and then you're good. (Reminder: edit files in ubuntu to avoid restarting the server to load `App.js` updates.)

Serve the frontend via...
```
$ cd vagrant/pad_dev/
$ vagrant ssh
vagrant@pad-dev:~$ cd /opt/frontend/
vagrant@pad-dev:/opt/frontend$ npm install
vagrant@pad-dev:/opt/frontend$ npm start
```

Now visit `http://localhost:3000` in your browser.

If aching to waste time, you could try adding anything to dependencies. Maybe you're not that character who gets turned around and dizzy, but for the rest, this requires using `npm install --save your-superior-module`.

*What's missing?* **error checking, maybe our pride**

## Epilogue

*But you're off to great places, Today is your day! Your mountain is waiting...*
