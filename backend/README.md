<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</h1>

## Install

#### Docker

```
docker run --name pg-database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

docker run --name redisfastfeet -p 6379:6379 -d -t redis:alpine

docker run --name mongofastfeet -p 27017:27017 -d -t mongo

```


Configure `.env` following `.env.example`


Configure postgres connection on `src/config/database.js`

```sh
yarn install

yarn sequelize db:migrate

yarn sequelize db:seed:all

```

## Run

```sh
yarn dev

yarn queue
```

## Author

👤 **Daniel Moreira <dmcardoso.99@hotmail.com>**

* Website: https://github.com/dmcardoso
* Github: [@dmcardoso](https://github.com/dmcardoso)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Daniel Moreira <dmcardoso.99@hotmail.com>](https://github.com/dmcardoso).<br />
This project is [MIT](https://github.com/dmcardoso/bootcamp-gostack/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
