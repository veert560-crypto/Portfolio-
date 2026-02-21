// Typing Animation
const texts=["Cybersecurity Enthusiast","Python Developer","Future Ethical Hacker"];
let i=0,j=0,current="";
let typing=document.getElementById("typing");

function type(){
if(j<texts[i].length){
current+=texts[i][j];
typing.textContent=current;
j++;
setTimeout(type,100);
}else{
setTimeout(erase,1500);
}
}

function erase(){
if(j>0){
current=current.slice(0,-1);
typing.textContent=current;
j--;
setTimeout(erase,50);
}else{
i=(i+1)%texts.length;
setTimeout(type,500);
}
}

document.addEventListener("DOMContentLoaded",type);

// Scroll Reveal
const hidden=document.querySelectorAll(".hidden");
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});
hidden.forEach(el=>observer.observe(el));

// Animate Skill Bars
window.addEventListener("scroll",()=>{
document.querySelectorAll(".progress-bar").forEach(bar=>{
bar.style.width=bar.dataset.width;
});
});

// Dark/Light Mode
document.getElementById("theme-toggle").onclick=()=>{
document.body.classList.toggle("light");
};

// Mobile Menu
document.querySelector(".menu-toggle").onclick=()=>{
document.querySelector(".nav-links").classList.toggle("active");
};

// Form Validation
document.getElementById("contact-form").addEventListener("submit",function(e){
e.preventDefault();
alert("Message Sent Successfully 🚀");
});
