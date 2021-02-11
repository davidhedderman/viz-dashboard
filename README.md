# viz-dashboard

* Using [Chart.js](https://www.chartjs.org/) to design a multi-dashboard site with user management through LDAP.

## System requirements

* Python 3.8+
* PostgreSQL 10+
* node + npm

  ```
  $ curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh -o install_nvm.sh
  $ nvm install --lts
  $ nvm use --lts
  ```

## Setup

* Pull base code

```
$ git clone {repository_url}
$ cd viz-dashboard
```

* Setup Python virtualenv and install required packages

```
$ python3.8 -m venv .py38
$ source .py38/bin/activate
(.py38) $ pip install --upgrade setuptools pip
(.py38) $ pip install -r requirements.txt
```

* Setup Postgres user, database, user access

```
(.py38) $ createuser viz_user
(.py38) $ createdb -E utf8 -T template0 viz_dash
(.py38) $ sudo su - postgres
postgres@local $ psql viz_dash
postgres=# grant all privileges on database viz_dash to viz_user;
```

* Create `.env` file with environment variables as seen in [sample.env](sample.env)

* Migrate Django apps

```
(.py38) $ python manage.py migrate
```

* Run the Vue setup below, in a separate terminal

* Run the application

```
(.py38) $ python manage.py runserver
```

* Check the project is running as expected at http://127.0.0.1:8000/ in your browser

## Vue setup

* Install Vue CLI

```
(.py38) $ cd ./vue-apps/
(.py38) $ npm install -g @vue/cli
```

* Install dependencies

```
(.py38) ./vue-apps $ cd ./v-ecommerce
(.py38) ./vue-apps/v-ecommerce $ npm install
```

* Run development server

```
(.py38) ./vue-apps/v-ecommerce $ npm run serve
```
