let meme_photo = document.getElementById("meme_photo");
let meme = document.getElementById("meme");
let laughmoreBtn = document.getElementById("laughmore_btn");
//API URL
let url = "https://meme-api.com/gimme/";
//Array of subreddits of your choice
let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl", "doraemon", "shinchan", "pinkpanther"];

//Function To Get Random Meme
function getMeme(){
  //Choose a random subreddit from the subreddits array
  
  laughmoreBtn.innerText="loading...";

  let randomSubreddit =
    subreddits[Math.floor(Math.random() * subreddits.length)];
    
  //Fetch data from the api

  fetch(url + randomSubreddit)
    .then((resp) => resp.json())
    .then((data) => {
      let memeImg = new Image();
      memeImg.src = data.url;
      //Display meme image and title only after the image loads
      memeImg.onload = () => {
        meme_photo.src = data.url;
        meme.innerHTML = data.title;
        laughmoreBtn.innerText="Load More"
      };
    })
    .catch((err) => {
      meme.innerHTML = "Failed to load meme.";
      console.error("Error:", err);
    });
};

//Call the getMeme() on button click and on window load
laughmoreBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);
