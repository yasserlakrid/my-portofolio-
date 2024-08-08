//DOM elements
let container = document.querySelector('.container')
let info = document.querySelector('.info')
let whoBtn = document.querySelector('.who')
let myProjectBtn = document.querySelector('.projects')
let socialMediaBtn = document.querySelector('.social')


//state variables
let whoPage = true
let projectsPage = false
let socialMediaPAge = false

//pages display
whoBtn.addEventListener('click',()=>{
    if(!whoPage){
        info.innerHTML=`<div class="who-i-am" >
        <div class="name">Lakrid Yasser</div>
        <p>17-year-old web developer from Algeria</p>
        <p>How can I help you?</p>
        <ul>
            <li>I can make simple websites or portfolios like this one.</li>
            <li>I can manage social media accounts and create daily posts.</li>
        </ul>
    </div>`
    whoPage = true
    projectsPage = false
    socialMediaPAge = false
    }
})


myProjectBtn.addEventListener('click',()=>{
    if(!projectsPage){
        info.innerHTML=``
        whoPage = false
        projectsPage = true
        socialMediaPAge = false
    }
})


socialMediaBtn.addEventListener('click',()=>{
    if(!socialMediaPAge){
        info.innerHTML=``
        whoPage = false
        projectsPage = false
        socialMediaPAge = true
    }
})
