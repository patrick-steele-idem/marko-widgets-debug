var template = require('./client.marko');
template.render({}, function(err, html){
    var div = document.getElementById('root');
    div.innerHTML = html;
});
