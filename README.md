To setup the database:

    $ createdb massive
    $ psql massive

Then create your tables:

    # create table posts (id serial primary key, body jsonb);

Then to seed your initial data:

    $ npm install
    $ node load_json.js

At this point you can now get hands on or cheat a bit and try running `node massive_search.js`. 