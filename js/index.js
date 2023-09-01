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
    <a class="tab text-lg font-bold text-black active:text-red-700 relative before hover:text-gray-700">${category.category}</a>
              `;
    tabContainer.appendChild(div);
  });

    console.log(data.data)
};

// const loadVideo = async(categoryId) => {
//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
//   );
//   const data = await res.json();
//   const cardContainer = document.getElementById("card-container");
//   cardContainer.innerHTML = "";
//   const videoData = data.data;
//   videoData.forEach((categoryId) => {
//     const div = document.createElement("div");
//     div.innerHTML = `
//         <div class="card w-96 bg-base-100 shadow-xl">
//   <figure class="px-10 pt-10">
//     <img src=""${categoryId.thumbnail}" alt="Shoes" class="rounded-xl" />
//   </figure>
//   <div class="card-body items-center text-center">
//     <h2 class="${categoryId.title}">Shoes!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div class="card-actions">
//       <button onclick= "handleCard()" class="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
//  `;
//  cardContainer.appendChild("div");
//   });
//   console.log(data.data);
// };

// handle card

// const handleCard = (categoryId) =>{
//     console.log('clicked',categoryId );
// }



handleCategory();
//  loadVideo();
