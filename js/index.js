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
              <a onclick="loadVideo('${data.data}')" class="tab text-lg font-bold text-black active:text-red-500 relative before hover:text-gray-700 ">${category.category}</a> 
              `;
      tabContainer.appendChild(div);
    });
  
    //  console.log(data.data);
  };

 const loadVideo = async(categoryId) =>{
    const res = await fetch("https://openapi.programming-hero.com/api/videos/category/${id}");
    const data = await res.json();
    const videoData = data.data;
    console.log(data.data);
}

handleCategory();
// loadVideo();