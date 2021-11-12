//
// attachments component class
//
var PageComponent = require("ds.base/PageComponent");
var bucketQry = require("am_waiver/bucketQry");
var amWaiverServer = PageComponent.create({
  "/": function (attributes, vars, containerList) {
    return new StatusResponse("good", {});
  },

  authRequired: function (attributes, vars, containerList) {
      return false;
  },
	
  "/ajax/updateBucket": function (params) {
    var api = new bucketQry();
    return new StatusResponse("good", api.updateBucket(params));
  },

  type: "ReactServer"
});

module.exports = amWaiverServer;

