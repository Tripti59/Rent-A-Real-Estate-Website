//alert("hi");

const searchBtn = document.getElementById("searchbtn");
searchBtn.addEventListener("click", function () {
    let enteredType = document.getElementById("type").value;
    let enteredStatus = document.getElementById("status").value;
    let enteredBhk = document.getElementById("bhk").value;
    let enteredPrice = document.getElementById("price").value;

    let allcards = document.querySelectorAll(".card");
for (i = 0; i < allcards.length; i++) {
    var current=allcards[i];
    current.classList.remove("hide");
    let child1 = allcards[i].children;
    let type = child1[1].textContent;
    let furnishing = child1[4].textContent;
    let bhk = child1[5].textContent;
    let price = child1[6].textContent;
    if(type!=enteredType){
        current.classList.add("hide");
    }
     if("status"!=enteredStatus & furnishing!=enteredStatus){
         current.classList.add("hide");
     }
    if("BHK"!=enteredBhk & bhk!=enteredBhk){
        current.classList.add("hide");
    }
};
});


