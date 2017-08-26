# WebExtension starter with TypeScript

## Prerequisites

### Locally

* [node + npm](https://nodejs.org/) (Current Version)

### Docker

* [Docker Engine](https://docs.docker.com/engine/installation/)
* [Docker Compose](https://docs.docker.com/compose/install/)

## Running

### Loading

* `npm install` (only required once)

* `npm run build`

or

* `docker-compose build`

* `docker-compose run extension npm run build`

## Includes the following

* TypeScript
* Webpack

## Project Structure

* src: TypeScript source files
* assets: Icons, manifest files, images, etc...
* dist: The folder with the copied assets and generated JS files

## Reference

Based on [chibat/chrome-extension-typescript-starter](https://github.com/chibat/chrome-extension-typescript-starter)