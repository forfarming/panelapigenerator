# forfarming-api-js

- API version: 1.0.0
- Package version: 1.11.0

## Installation

#### Java

To be able to generate the client we need [openapi-generator](https://github.com/OpenAPITools/openapi-generator) installed in our local environment. And this package works with java under the hood.

First, run:

```shell
brew tap adoptopenjdk/openjdk
```

Then, select the version you want, and run: (I prefer java11)

```shell
brew cask install adoptopenjdk11
```

#### openapi-generator

You have installed java in your development environment, now you need to install the generator.

First, run:

```shell
brew install openapi-generator
```

Then, to be able to build, you need maven.

```shell
brew install maven
```

Ps.

For typescript-axios, use master branch of openapi-generator [link](https://github.com/OpenAPITools/openapi-generator#15---homebrew)

```
To reinstall with the latest master, run brew uninstall openapi-generator && brew install --HEAD openapi-generator
```

Ready to go! If you want to try, run this to generate ruby-client:

```shell
openapi-generator generate -i https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/2_0/petstore.yaml -g ruby -o /tmp/test/
```

##### Usage

Define `FORFARMING_API_JS_LIB_DIR` env variable for the folder (default is where this project is located). Then run the following to build

```shell
npm run generate

yarn generate
```

####

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install

yarn
```

Next, you need to build the module:

```shell
npm run build *.ts

yarn build *.ts
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    yarn add github.com/cousins-factory/forfarming-api-js
    npm install github.com/cousins-factory/forfarming-api-js --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
import { RecipeApi } from 'forfarming-api-js';

const service = new RecipeApi();
await service.findRecipes();
```
