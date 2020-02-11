// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '@storefront-ui/vue/styles.scss';
import 'typeface-montserrat';

import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, { head }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  head.script.push({
    body: true,
    src: '//unpkg.com/@bounteous/shopkit@0.0.1/dist/index.js',
    'data-moltin-client-id': process.env.GRIDSOME_MOLTIN_CLIENT_ID,
    'data-moltin-stripe-publishable-key': process.env.GRIDSOME_STRIPE_PUBLISHABLE_KEY,
  });
}
