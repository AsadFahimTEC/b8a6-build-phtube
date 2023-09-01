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
    console.log(data.data)
};

const handleLoadVideo = async(categoryId) =>{
    // console.log(categoryId);
    const res = await fetch(` https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = "";
    data.data.forEach((videos)=>{
        console.log(videos);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card bg-gray-100 shadow-xl">
        <figure><img src="${videos?.thumbnail}" alt="not_available" class="w-full" /></figure>
        <div class="card-body flex gap-4 start">
        <h2 class="card-title">${videos?.title}
        </h2>
          <div class=" justify-end">
          <div class=" w-14 rounded-full">
                <img src="${videos?.authors[0]?.profile_picture}" class="rounded-full">
            </div>
            <div class="badge badge-outline">${videos?.authors[0]?.profile_name}</div> 
            <div class="badge badge-outline"></div>${videos?.authors[0]?.verified?videos?.authors[0]?.verified:"not verified"}
          </div>

          <div class="badge badge-outline">${videos?.others?.views}</div> 
          <div class="badge badge-outline"></div>${videos?.others?.posted_date}
        </div>
        </div>
      </div>
        `
        cardContainer.appendChild(div);
    });
    // console.log(data.data);
};

handleCategory();
handleLoadVideo();
