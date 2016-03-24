var template = require('./client.marko');
template.render({title:'Frank'}, function(err, html){
    var div = document.getElementById('root');
    div.innerHTML = html;
});
