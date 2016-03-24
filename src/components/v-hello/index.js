module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  getTemplateData: function(state, input) {
    return {
      time: state.time
    };
  },

  getInitialState: function(input) {
    return {
      time: new Date()
    };
  },

  handleClick: function() {
    this.setState({time: new Date()});
  }

});
