
import { Mongo } from 'meteor/mongo';


export const Comments = new Mongo.Collection('comments');


Comments.allow({
  insert(userId, comments) {
    return userId && comments.owner=== userId;
  },
  update(userId, comments, fields, modifier) {
    return userId && comments.owner === userId;
  }
 
});