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
        deleteComment($(" .delete-comment-button", newComment));
        console.log(data);
        //append it to the list
      },
      error: function (error) {
        console.log(error.responseText);
      },
    });
  });
};
let newCommentDom = function (comment) {
  //back tick are used to interpolate the data  in jquery and it can convert to string object
  //example let x= 6
  // `amisha ${x}`
  //it will return "amisha 6"
  return $(`<li id ="comments-${comment._id}">
    <p>

        <small>
         <a class="delete-comment-button"
        href="/comments/destroy/<%= comment.id %>"
        >X</a
        </small>
        <% } %>
        ${comment.content}
        <br>
        <small>
        ${comment.user.name}
        </small>
    </p>
    
</li>`);
};
//method to delete the post in dom
//created  a function which sends the post id which needs to be deleted
//blocks the natural behaviour of the link and sends it via ajax
let deleteComment = function (deleteLink) {
  $(deleteLink).click(function (e) {
    e.preventDefault();

    $.ajax({
      type: "get",
      url: $(deleteLink).prop("href"),
      success: function (data) {
        $(`#comment-$(data.data.comment._id}`).remove();
      },
      error: function (error) {
        console.log(error.responseText);
      },
    });
  });
};
