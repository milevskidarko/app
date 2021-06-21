let container = document.querySelector("#cards");
let btn = document.querySelector(".btn");
let loadMoreBtnWrapper = document.querySelector("#loadmore");
let output = "";
let currentPage = 0;
let item = null;
let itemsToShow = 4;




const hasMoreItems = () => {
  if (itemsToShow * currentPage > data.length) {
    loadMoreBtnWrapper.style.display = "none";
    return false;
  }
  return true;
}


const render = () => {
  output = "";

  let items = 0;
  for (let i = itemsToShow * currentPage; i < data.length; i++) {
    if (items >= itemsToShow) {
      break;
    }
    items++;
    item = data[i];
    output += `<div class="card">
    <div class="user">
      <div class="user-info">
        <img src=${item.profile_image} alt="user" />
        <h5>${item.name}</h5>
        <small>${item.date}</small>
      </div>
      <div class="logo"><img src="./assets/icons/instagram-logo.svg" alt="instaLogo"></div>
    </div>
    <div class="thumb" style="background-image:url(${item.image})"></div>
    <div class="card-body">
      <p>
       <a href=${item.source_link}>Lorem</a> 
       ${item.caption}
      </p>  
      <div class="border"></div>
      <div class="footer">
        <img src="./assets/icons/heart.svg" alt="">
        <span>${item.likes}</span>
      </div>
    </div>
    </div>`;

  }

  container.innerHTML += `${output}`;
  currentPage++;
  hasMoreItems();
};




fetch("assets/js/data.json", { mode: 'no-cors' }).then(r => r.json()).then(resp => {
  data = resp;
  render();
});

