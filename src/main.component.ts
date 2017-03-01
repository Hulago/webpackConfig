import * as angular from 'angular';

class MainComponent {
    public label: string; 
    constructor() {
        console.log('Main');
        this.label = 'Angular Running';
    }
}

angular.module('app')
    .component('main', {
        template: require('./main.component.html'),
        controller: MainComponent,
        controllerAs: '$ctrl',
        // bindings: {
        //     label:'='
        // }
    });

