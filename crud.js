var fname,emailV,t_titleV,t_contentV,ratingV;
function submitReview(){
    fnameV=document.getElementById('wpmtst_client_name').value;
    emailV=document.getElementById('wpmtst_email').value;
    t_titleV=document.getElementById('wpmtst_post_title').value;
    t_contentV=document.getElementById('wpmtst_post_content').value;
    ratingV=document.getElementById('wpmtst_star_rating').value;
    if(document.getElementById('star_rating-star1-3937').checked ){
        ratingV=1;
        console.log("1")
    }
    if(document.getElementById('star_rating-star2-3937').checked ){
        ratingV=2;
        console.log("2")
    }
    if(document.getElementById('star_rating-star3-3937').checked ){
        ratingV=3;
        console.log("3")
    }
    if(document.getElementById('star_rating-star4-3937').checked ){
        ratingV=4;
        console.log("4")
    }
    if(document.getElementById('star_rating-star5-3937').checked ){
        ratingV=5;
        console.log("5")
    }
    console.log(fnameV,emailV,t_titleV,t_contentV,ratingV)
    firebase.database().ref("Review/"+fnameV).set(
        {
            fname:fnameV,
            email:emailV,
            t_title:t_titleV,
            t_content:t_contentV,
            rating:ratingV
        }
    );
    alert("Data inserted 2");
}

// displayReview();
// function displayReview(){
    
//     firebase.database().ref("Review/" +'saish' ).on("value", function(snap){
//         var demo = snap.val(); 
//         console.log(demo);
//     });

// console.log("display review");


//     var all_rev=document.getElementById('all_review');
//     var review=document.createElement('div');
//     review.setAttribute('class','review')

//     var reviewTitle=document.createElement('div');
//     reviewTitle.setAttribute('class','review-title')
//     var reviewContent=document.createElement('div');
//     reviewContent.setAttribute('class','review-content')
//     var reviewName=document.createElement('div');
//     reviewName.setAttribute('class','review-name')

//     review.append(reviewTitle,reviewContent,reviewName);
//     all_rev.append(review);

// }