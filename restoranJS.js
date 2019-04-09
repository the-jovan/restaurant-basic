//BETWEENER ONE, STATISTIC
const statistics = [
    {number: 18, item: "Breakfast", link: "#"},
    {number: 23, item: "Lunch", link: "#"},
    {number: 16, item: "Dinner", link: "#"},
    {number: 55, item: "Beverages", link: "#"}
]
let statsTemplate = ''
statistics.forEach(function(statistic) {
    statsTemplate += `
        <div class="betweenerblock flexcenter">
                <a href=${statistic.link}>${statistic.number}</a>
                <p>${statistic.item}</p>
        </div>
    `
})
document.getElementById("betweenerone").insertAdjacentHTML("beforeend", statsTemplate);

//SPECIAL OFFERS
const offers = [
    {img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/04/easy-homemade-soft-pretzels.jpg", name: "Sushi", description: "Lorem ipsum dolor sit amet, liber oportere mediocrem sed ut.", price: 14.99},
    {img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/04/easy-homemade-soft-pretzels.jpg", name: "Sushi", description: "Lorem ipsum dolor sit amet, liber oportere mediocrem sed ut.", price: 14.99}
]
let specialOfferTemplate = '';
offers.forEach(function(offer){
    specialOfferTemplate += `
        <div class="offer">
            <div class="offerimg" style="background-image: url(${offer.img});flex:1; background-size: cover"></div>
            <div class="offertext">
                <h4 class="smallspecialtext">${offer.name}............<span class="offerprice">$ ${offer.price}</span></h4>
                <p class="offerdescription">${offer.description}</p>
            </div>
        </div>
    `
})
document.getElementById("offers").insertAdjacentHTML("beforeend", specialOfferTemplate);


var d = new Date();
const dateContainer = document.getElementById("opening");
(d.getHours() > 8 || d.getHours() < 1) ? dateContainer.innerHTML = "Open until 1am. Come visit us." : dateContainer.innerHTML = "Closed. We'll be back at 8am.";

const openingDiv = document.getElementById("openinghours");
(d.getHours() > 8 || d.getHours() < 1) ? openingDiv.style.backgroundImage = "url(https://images.pexels.com/photos/331990/pexels-photo-331990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)" : openingDiv.style.backgroundImage = "url(https://images.pexels.com/photos/942304/pexels-photo-942304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)";

//console.log(document.getElementById("reserve").autofocus);

document.getElementById("call1").addEventListener("click", flip);
document.getElementById("call2").addEventListener("click", flip);
function flip() {
    document.getElementById("message").style.visibility = "visible"
}
document.getElementById("not").addEventListener("click", flap);
function flap() {
    document.getElementById("message").style.visibility = "hidden"
}



