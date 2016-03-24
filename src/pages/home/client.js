var helloComponent = require('../../components/v-hello');

helloComponent.render({title:'Frank'})
    .appendTo(document.getElementById('root'));