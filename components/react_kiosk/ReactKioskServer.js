//
// attachments component class
//
var PageComponent = require("ds.base/PageComponent");

var ReactKioskServer = PageComponent.create({
  "/": function (attributes, vars, containerList) {
    return new StatusResponse("good", {});
  },

  type: "ReactServer",
});

module.exports = ReactKioskServer;