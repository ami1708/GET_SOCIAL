//when i comment on  someone post the mail comes to me
const nodeMailer = require("../../config/nodemailer");
// this is another way of exporting a methodxports
//arrow function
exports.newComment = (comment) => {
  console.log("inside new Comment mailer");

  nodeMailer.transporter.sendMail({
      from : 'amisha17200@gmail.com',
//when we are sending mail to user who has commented
      to: comment.user.email,
// post.user.comment.email
      subject: 'new comment published',
      html : '<h1> Yup now your comment is published!</h1>'
  },err);
};
