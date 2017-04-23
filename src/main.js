// we want font-awesome to load as soon as possible to show the fa-spinner
import 'bootstrap';
import $ from 'jquery'; // eslint-disable-line no-unused-vars
import './assets/js/imagesloaded.pkgd.min.js';
import './assets/js/jquery.ba-cond.min.js';
import './assets/js/jquery.easing.min.js';
import './assets/js/jquery.isotope.js';
import './assets/js/jquery.mixitup.min.js';
import './assets/js/jquery.nicescroll.js';
import './assets/js/jquery.slitslider.js';
import './assets/js/owl.carousel.js';
import './assets/js/scrollupto.js';
import './assets/js/app.js';
import './assets/js/main.js';

import '../styles/styles.css';
import './assets/css/technology/font-mfizz.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/animate.css';
import './assets/css/app.css';
import './assets/css/owl.carousel.css';
import './assets/css/owl.theme.css';
import './assets/css/owl.transitions.css';

// comment out if you don't want a Promise polyfill (remove also from webpack.common.js)
import * as Bluebird from 'bluebird';
Bluebird.config({ warnings: false });

export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin('aurelia-animator-css');
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader')

  await aurelia.start();
  aurelia.setRoot('app');

  // if you would like your website to work offline (Service Worker),
  // install and enable the @easy-webpack/config-offline package in webpack.config.js and uncomment the following code:
  /*
  const offline = await System.import('offline-plugin/runtime');
  offline.install();
  */
}
