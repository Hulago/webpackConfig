
import 'scss/style.scss';
import 'jquery';
import * as angular from 'angular';
// import 'angular-animate';
// import 'angular-aria';
// import 'angular-messages';
// import 'angular-sanitize';
// import 'angular-touch';

//- Angular Material
import 'angular-material';

import 'components';

angular.module('app', [
    'ngMaterial',
    'components'
    ])
    .run(() => {
        console.log('App running');
    })

import 'src/main.component';

