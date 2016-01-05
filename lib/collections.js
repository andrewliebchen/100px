Drawings = new Mongo.Collection('drawings');

// {
//   cells :    [array of cell colors]
//   createdAt: when drawing was created,
//   ownerId:   user id of drawing owner,
//   ownerName: user name of drawing owner,
//   likedBy: [array of user ids who like this drawing]
// }
