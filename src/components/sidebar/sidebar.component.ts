import * as angular from 'angular';

class SidebarComponent {
    constructor() {
    }
}

angular.module('components')
    .component('sidebar', {
        template: require('./sidebar.component.html'),
        controller: SidebarComponent,
        controllerAs: '$ctrl',
        // bindings: {
        //     label:'='
        // }
    });

