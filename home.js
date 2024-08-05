var icon = document.getElementById("bnew");
var pj = document.getElementById("pj");
var ab = document.getElementById("abt");
icon.onclick= function(){
    document.body.classList.toggle("light-mode");
}
ab.onclick= function(){
    document.getElementById("about").classList.add("showclick");
}
pj.onclick= function(){
    document.body.getElementById("project").classList.add("show");
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
         if (entry.isIntersecting){
            entry.target.classList.add("show");
         }
         else{
            entry.target.classList.remove("show");
         }
    });
});

const hidden= document.querySelectorAll('.hidden');
hidden.forEach((e)=>observer.observe(e));
function toggleDescription(projectId) {
    const description = document.getElementById(projectId);
    const button = description.nextElementSibling;

    description.style.display = (description.style.display === 'none' || description.style.display === '') ? 'block' : 'none';
    button.innerText = (description.style.display === 'none' || description.style.display === '') ? 'Open Description' : 'Close Description';
}