/**
 * This is the most basic example of using Discovery.
 *
 * In this example all we are interested in is when new nodes are added to the
 * network or when they are removed. The master selection stuff happens behind
 * the scenes but we can completely ignore it and just handle the events for
 * new nodes added or removed from the network.
 *
 * See also: basic-advert.js
 */

var Discovery = require('../..').Discovery;

var d = new Discovery();

d.on("added", function(obj) {
  console.log("New node added to the network.");
  console.log(obj);
});

d.on("removed", function(obj) {
  console.log("Node removed from the network.");
  console.log(obj);
});
