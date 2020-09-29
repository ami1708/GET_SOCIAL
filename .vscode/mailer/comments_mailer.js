const nodeMailer = require("../../config/nodemailer");
// this is another way of exporting a method
exports.newComment = (comment) => {
  console.log("inside newComment mailer", comment);

  nodeMailer.transporter.sendMail(
    {
      from: "amisha17300@gmail.com",
      to: comment.user.email,
      subject: "New Comment Published!",
      html: "<h1>Yup, your comment is now published!</h1>",
    },
    (err, info) => {
      if (err) {
        console.log("Error in sending mail", err);
        return;
      }

      console.log("Message sent", info);
      return;
    }
  );
};

// //when i comment on  someone post the mail comes to me
// const nodeMailer = require("../../config/nodemailer");
// // this is another way of exporting a methodxports
// //arrow function
// exports.newComment = (comment) => {
//   console.log("inside new Comment mailer");

//   nodeMailer.transporter.sendMail({
//       from : 'amisha17200@gmail.com',
// //if i make a comment on someones post give a mail to me
//       to: comment.user.email,
// // post.user.comment.email
//       subject: 'new comment published',
//       html : '<h1> Yup now your comment is published!</h1>'
//   },(err,info) => {
//         if(err){
//               console.log('Error in sending the mail',err);
//               return
//         }
//         console.log('Message sent',info)
//         return
//   });
// };
