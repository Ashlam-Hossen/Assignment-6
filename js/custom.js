const discussPost = async (searchPost='coding')=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchPost}`)
    const data = await res.json();
    const posts = data.posts
    // console.log(posts);
    displayDiscuss(posts)

}
const displayDiscuss = posts=>{
//  console.log(posts);

    const discussContainer = document.getElementById('discuss-container');
    // clear all search history of input field
    discussContainer.textContent = '';

    posts.forEach(post =>{
        console.log(post);

        //2 crate a div
        const postCard = document.createElement('div');
        postCard.classList =`card bg-[#f1f2fe] w-[772px] shadow-xl border border-[#797DFC] my-5`;
        // 3 set inner html
        postCard.innerHTML =
        `
           <div class="card ">
              <div class="card-body ">
                <div class="flex">
                  <!-- user profile -->
                   <div>
                  <div class="avatar online">
                     <div class="w-24 rounded-full">
                        <img src="${post.image}" />
                        </div>
                      </div>
                    </div>
                   <!-- user details -->
                   <div class= "ml-10">
                       <div class="flex"> <h3 class="mr-4">#${post.category}</h3>
                        <p>${post.author.name}</p>
                      </div>
                        <h2 class="py-3 text-2xl font-bold">${post.title}</h2>
                        <p class="mb-5">${post.description}</p>
                        <p class="border border-dotted mb-5"></p>
                        
                        <!-- card icon button -->
                        <div class="flex">
                            <i class="mr-3"><img src="images/tabler-icon-message-2.png" alt=""></i>
                            <span class="mr-3">${post.comment_count}</span>

                            <i class="mr-3"><img src="images/tabler-icon-eye.png" alt=""></i>
                            <span class="mr-3">${post.view_count}</span>

                            <i class="mr-3"><img src="images/Group 18.png" alt=""></i>
                            <span class="mr-3">${post.posted_time
                            }</span>                                           
                        </div>
                      </div>
                </div>
                <div class="card-actions justify-end">
                  <button onclick="handleDiscussTitle('${post.id}')
                  show_discuss_title.showModal()" class=""><img src="images/Group 40106.png" alt=""></button>
                </div>
              </div>
            </div>
        `
        // 4 append child
        discussContainer.appendChild(postCard);
    })
    //hide loading spinner
    toggleLoadingSpinner(false);
}

// handle search Button

const handleSearch = () =>{
    toggleLoadingSpinner(true);
   const searchField = document.getElementById('search-field');
   const searchFieldText = searchField.value;
   console.log(searchFieldText);
   discussPost(searchFieldText);
   
}

const toggleLoadingSpinner=(isLoading)=>{
    const loadingSpinner= document.getElementById("loading-spinner");
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden')
    }
}

// handle show discuss title 

const handleDiscussTitle = async(id)=>{
  console.log('this testing',id)

  // load single post 
 const res =  await fetch(`https://openapi.programming-hero.com/api/retro-forum/postshttps://openapi.programming-hero.com/api/retro-forum/posts?category=${id}`)
 const data = await res.json();
 console.log(data)
 showDiscussTitle(data)
}

const showDiscussTitle = (post)=>{

  //show the display modal
  show_discuss_title.showModal();

}

 discussPost();

///////////////////////////////////////////////////////////////////////////////////////////////

 const latestPost = async ()=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
  const data = await res.json();
  const latests = data;

  displayLatestPost(latests);
}



const displayLatestPost = latests =>{
  // console.log(latests);

  const latestPostContainer = document.getElementById('latest_post_container');

     latests.forEach(latest =>{
         console.log(latest);
        // 2. create a div
         const latestCard = document.createElement('div');
         latestCard.classList =`card bg-base-100 w-[374px] h-[482px] shadow-xl border-4 border-[#cfcfd5] mb-5 m-auto mt-5 `;
         //3.set inner html
         latestCard.innerHTML =
         `
          <figure class="px-10 pt-10">
               <img src="${latest.cover_image}" alt="Shoes" />
              </figure>
              <div class="flex ml-8 mt-8">
                <span class="pr-2"><img src="images/Frame.png" alt=""></span>
                <p>${latest.author.posted_date}</p>
              </div>
              <div class="card-body text-left">
                <h2 class="font-bold">${latest.title}</h2>
                <p>${latest.description}</p>
                
                <div class="flex mt-5">
                  <div class="avatar">
                    <div class="w-[50px] h-[50px] rounded-full">
                      <img src="${latest.profile_image}" />
                    </div>
                  </div>
                       <div class="ml-5">
                          <h3 class="font-bold">${latest.author.name}</h3>
                          <p>${latest.author.designation}</p>
                       </div>
                </div>
  
              </div>
         
         `
          //4.append child 
         latestPostContainer.appendChild(latestCard);
     })
    
    }
   
latestPost();




