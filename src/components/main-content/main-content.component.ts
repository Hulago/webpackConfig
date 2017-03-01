import * as angular from 'angular';

class MainContentComponent {
    constructor() {
    }
}

angular.module('components')
    .component('mainContent', {
        template: require('./main-content.component.html'),
        controller: MainContentComponent,
        controllerAs: '$ctrl',
        // bindings: {
        //     label:'='
        // }
    });

