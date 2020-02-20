[![Netlify Status](https://api.netlify.com/api/v1/badges/66908f59-e833-40dd-af24-56634c2c2840/deploy-status)](https://app.netlify.com/sites/gridsome-starter-moltin/deploys)

# Elastic Path Commerce Cloud Starter for Gridsome

Gridsome starter demonstrating how easy it is to spin up a blazing fast e-commerce site with Elastic Path's Commerce Cloud Multi-tentant APIs (formerly known as Moltin). [View Demo](https://gridsome-starter-moltin.netlify.com/)

This starter uses the Gridsome Elastic Path Source plugin ([`@bounteous/gridsome-source-moltin`](https://github.com/Bounteous-Inc/gridsome-source-plugin)) to pull data from your catalogue, and load it into Gridsome's data store - which you can then query to generate pages.

It also demonstrates integration of the following components:

* [Shopkit](https://www.moltin.com/commerce-solutions/embeddable-cart)
  * Moltin's Embeddable Cart & Checkout
  * Currently using [a fork](https://github.com/Bounteous-Inc/shopkit) of the project.
* [Storefront UI](https://www.storefrontui.io)
  * Vue.js component library specifically for eCommerce.
* [Algolia Gridsome Plugin](https://gridsome.org/plugins/gridsome-plugin-algolia)
  * Index your products at deploy time, so that it reflects your URL structure and is never out of sync with what your visitors can see.
  * This is optional, will only run if:
    * the appropriate Algolia credentials are in the `.env` file; and
    * during production builds (so usually only during deploys, not while running `npm run develop`)

## Account Setup

1. [Sign up](https://dashboard.elasticpath.com/signup) for a Elastic Path Commerce Cloud account.
2. Import sample products into your catalogue by either:
   * Cloning [moltin-transfer-catalog-data](https://github.com/moltin/moltin-transfer-catalog-data) and running it locally.
   * Using the [hosted version](https://transfer-catalog-data.herokuapp.com/).
3. Take note of your Elastic Path [Client ID](https://dashboard.elasticpath.com/app)
4. Optional:
   * Sign up for an Algolia account and take note of your App ID and Admin Key.
   * Sign up for a Stripe account and take note of your Publishable Key (can be a test key).

## Installation

```bash
npm install -g @gridsome/cli

gridsome create my-gridsome-moltin-store bounteous/gridsome-starter-moltin
```

## Setup Credentials

Set up your `.env` file by running:

```bash
npm run env
```

The script will prompt you for the values of each variable. Only the Elastic Path Client ID is required.

## Develop

```bash
npm run develop
```

## License

This project is licensed under the MIT License. See LICENSE for details.

## Who we are

> Bounteous creates big-picture digital solutions that help leading companies deliver transformational brand experiences.

Founded in 2003 in Chicago, Bounteous creates big-picture digital solutions that help leading companies deliver transformational brand experiences. Our expertise includes Strategy, Experience Design, Technology, Analytics and Insight, and Marketing. Bounteous forms problem-solving partnerships with our clients to envision, design, and build their digital futures.

[We're hiring!](https://www.bounteous.com/careers/) And we are the commerce and front end experts you've been looking for. [Meet us](https://www.bounteous.com/).
