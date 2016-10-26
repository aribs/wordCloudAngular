    (function(){
    angular.module('app',['angular-d3-word-cloud'])
        .controller('appController',['$window','$element',appController])
    function appController($window,$element){
        var self = this;
        self.height = $window.innerHeight * 0.5;
        self.width = $element.find('word-cloud')[0].offsetWidth;
        self.wordClicked = wordClicked;
        self.words = [
            {text: 'Angular',size: 25},
            {text: 'Angular2',size: 35}
        ]

        function wordClicked(word){
            alert(word);
        }
    }
})()