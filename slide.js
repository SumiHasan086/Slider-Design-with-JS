const singleSliderWrapper=document.querySelector(".single-slide-wrapper");
const singleSlide=document.querySelectorAll(".slide");
const prevBtn=document.querySelector(".prev");
const nextBtn=document.querySelector(".next");
const sliderBtnList=document.querySelector(".slider-btn-list");



let slide=0;

prevBtn.addEventListener("click",()=>{
    if(slide>0){
        slide--;
        singleSliderWrapper.style.transform=`translateX(${slide*-100}%)`;
    }else{
        slide=singleSlide.length-1; 
        singleSliderWrapper.style.transform=`translateX(${slide*-100}%)`;  
    }
  
})

nextBtn.addEventListener("click",()=>{
    if(slide<(singleSlide.length-1)){
        slide++;
        singleSliderWrapper.style.transform=`translateX(${slide*-100}%)`
    }else{
        slide=0 ;
        singleSliderWrapper.style.transform=`translateX(${slide*-100}%)`
    }
    
})

singleSlide.forEach(()=>{
    sliderBtnList.innerHTML+=`<button></button>`;
})
const button=document.querySelectorAll("button");

button.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
          slide=index ;
          singleSliderWrapper.style.transform=`translateX(${slide*-100}%)`
    })
})



