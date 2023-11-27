let websiteChecked = document.querySelectorAll(".toggle-switch");
let checked = Array.from(websiteChecked);
console.log(checked)
checked.forEach(e => {
    e.addEventListener("click",function(){
        e.classList.toggle("checked")
    })
});

// BackUp 

let BackUp = document.querySelectorAll(".backup .row > div");

BackUp.forEach(e=>{
    e.addEventListener("click",function(){
        BackUp.forEach(ele=>{
            ele.classList.remove("active")
        })
        e.classList.toggle("active");
    })
})