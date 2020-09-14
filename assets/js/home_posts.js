{//method to submit form data of new post using ajax
let createPost = function(){
    let newPostForm = $('#new-post-form')
//we don't want it to submit naturally  e is the event which we prevent default from
    newPostForm.submit(function(e){
        e.preventDefault();
        $.ajax({

            type: 'post',
            url: '/posts/create',
            //this converts the data in the form of json
            data : newPostForm.serialize(),
            success : function(data){
                //access the data
                let newPost = newPostDom(data.data.post)
                $('#posts-list-container>ul').prepend(newPost)
                console.log(data)
                //append it to the list

            }, error: function(error){
                console.log(error.responseText)
            }

        })
    })
}
//ONCE WE HAVE submitted we have received in post controller
//methOd to create a post in DOM which will convert the copied html code to jquery object
let newPostDom =  function(post){
    //back tick are used to interpolate the data  in jquery and it can convert to string object
    //example let x= 6
    // `amisha ${x}`
    //it will return "amisha 6"
    return $(`<li id = "posts-${ post._id}">
    <p>
      
        <small>
            <a class = "delete-post-button" href="/posts/destroy/${post.id}">X</a>
        </small>
        <% } %>
        ${ post.content }
        <br>
        <small>
        ${ post.user.name }
        </small>
    </p>
    <div class="post-comments">
        
            <form action="/comments/create" method="POST">
                <input type="text" name="content" placeholder="Type Here to add comment..." required>
                <input type="hidden" name="post" value="${post._id}">
                <input type="submit" value="Add Comment">
            </form>

        <% } %>

        <div class="post-comments-list">
            <ul id="post-comments-${post._id}">
                
            </ul>
        </div>
    </div>
    
</li>`)
}
}