//method to submit form data of new post using ajax
let createComment = function () {
  //grab the form from id in home.ejs
  let newCommentForm = $("#new-comment-form");
  //we don't want it to submit naturally  e is the event which we prevent default from
  newCommentForm.submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "comments",
      url: "/comments/create",
      //this converts the data in the form of json
      data: newCommentForm.serialize(),
      success: function (data) {
        //access the data
        let newCommentForm = newCommentDom(data.data.comments);
        $(".post-comments-list>ul").prepend(newPost);
        // deletePost($(" .delete-post-button", newPost));
        console.log(data);
        //append it to the list
      },
      error: function (error) {
        console.log(error.responseText);
      },
    });
  });
};
