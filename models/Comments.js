var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: String,
  author: String,
  upvotes: {type: Number, default: 0},
  post: { type:mongoose.Schema.Types.ObjectId, ref: 'post' }
});

CommentSchema.methods.upvote = function(callback){
  this.upvotes += 1;
  this.save(callback);
};

mongoose.model('Comment', CommentSchema);
