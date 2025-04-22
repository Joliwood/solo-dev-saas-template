# Welcome to this solo dev saas template

## What is that template ?

This template is a subjective preference for a complete monorepo, full stack typescript, the main objective is to setup all technos to enjoy coding your own SAAS as a solo developper.

## How to initialize the DB ?
- Create manually the DB in postgresql
- ~~Start a docker desktop~~
- ~~Start the DB with `docker-compose up -d`~~
- Create a .env file in the root of the project (based on .env.example)
- Execute `pnpm db:migrate` to create the tables (in server project)
- Execute `pnpm gql` to generate all the graphql schemas
- Execute `pnpm dev` to start two servers (apps/server + hello_server_world)
  regrouped from a single graphql endpoint from the api gateway server. All of
  this with the front (next) in the same time

! If you change servers ports or local uris, you'll have to update the api_gateway script to wait the correct ports

## What is the stack composition ?

Front : 
- React
- Next
- Tailwindcss
- Shadnc ui

Back : 
- GraphQL (Yoga as framework)
- Node
- Postgresql
- Knex

## Upgrades incoming || Reflexions : 
- Adding a storybook for the front
- Full auth setup
- Package for infra
- Sentry (infra)

## For versions <= v1.1.0, the commits are marked with these signs : 

:zap: = Minor correction / fast debug \
:construction: = Work in progress \
:tada: = New feature \
:card_file_box: = Datas or contents updated \
:hammer: = Corrections / debug \
:memo: = Readme / Code comments / Documentations \
:rotating_light: = Security \
:sparkles: = Clean code
