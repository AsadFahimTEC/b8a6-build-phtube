const handleCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  const tabContainer = document.getElementById("tab-container");
  const allData = data.data;
  
  allData.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <a onclick="handleLoadVideo('${category.category_id}')"  class="tab text-lg font-bold text-black active:text-red-700 relative before hover:text-gray-700">${category.category}</a>
    `;
    tabContainer.appendChild(div);
  });
};



const handleLoadVideo = async (categoryId) => {
  // console.log(categoryId);
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await res.json();
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  data.data.forEach((videos) => {
    console.log(videos);
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card bg-gray-100 shadow-xl">
        <div>
        </div>
        <figure class="h-[200px] relative">
            <img class="h-full" src="${
              videos?.thumbnail
            }" alt="not_available" class="w-full" />
            <p class='text-sm absolute bottom-2 right-2 bg-black text-[#FFF]'>${videos.others.posted_date} seconds</p>
        </figure>
<div class="flex justify-start gap-4 start">
            <div class="w-10 h-10 rounded-full">
                <img src="${
                  videos?.authors[0]?.profile_picture
                }" class="w-full h-full rounded-full">
            </div>
        
            <div>
            <h2 class="text-base text-black font-normal">${videos.title}</h2>
            <div class="flex justify-start gap-3 my-3 text-xs">
                <h3 class="text-gray-500 ">${
                  videos.authors[0].profile_name
                }</h3>
                <p>${
                  videos.authors[0]?.verified
                    ? `<img class="w-4" src="./../images/verified.svg">`
                    : ""
                }</p>
            </div>
            <p class='text-sm'>${videos.others.views} views</p>
            </div>
        </div>
      </div>

        `;
    cardContainer.appendChild(div);
  });
};



 

handleCategory();
handleLoadVideo(1000);
