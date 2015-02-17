CellTemplate = [
  "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent",
  "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent",
  "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent",
  "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent",
  "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent",
  "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent",
  "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent",
  "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent",
  "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent",
  "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent"
];

Colors = [
  'black', 'white', 'gray', 'aqua', 'blue',
  'green', 'yellow', 'orange', 'red', 'fuchsia'
];

if (Meteor.isServer) {
  Meteor.startup(function () {
    // Meteor.users.remove({});

  //   Drawings.remove({});

  //   if(Drawings.find().count() === 0) {
  //     Drawings.insert({
  //       cells : CellTemplate,
  //       createdAt: Date.now()
  //     });

  //     Drawings.insert({
  //       cells : CellTemplate,
  //       createdAt: Date.now()
  //     });

  //     Drawings.insert({
  //       cells : CellTemplate,
  //       createdAt: Date.now()
  //     });
  //   }
  });
}
