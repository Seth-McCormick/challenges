const iceCream = [{ name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1 }, { name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1 }, { name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2 }]


const vessels = [{ name: 'Waffle Cone', image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg', price: 2 }, { name: 'Waffle Bowl', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4 }]

const toppings = [{ name: 'Sprinkles', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg', price: 1 }, { name: 'Chocolate Chips', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360', price: 2 }]

// Note does this just mean 0? i know this comes back as false(false=0?) if ran
let order = []

function drawIceCream() {
    let template = ''

    iceCream.forEach(item => {
        template += `
   
        <div class="col-md-3 bg-warning rounded shadow iceCream-card" onclick="addFlavor('${item.price}')" >
            <img class="w-100 object-cover p-2 rounded-top" height="200px" 
            src="${item.image}"
            alt="">
        <div class="d-flex justify-content-between p-3">
            <h4><em>${item.name}</em></h4>
            <h4><em>${item.price.toFixed(2)}</em></h4>
         </div>
    </div>
    
    
`
    })
    document.getElementById('iceCream-flavors').innerHTML = template
}

function drawVessels() {
    let template = ''
    vessels.forEach(item => {
        template += `
<div class="col-md-3 bg-warning rounded shadow " onclick="addVessel('${item.price}')">
 <img class="w-100 object-cover pt-2" height="200px" pt-2 rounded-top
 src="${item.image}"
 alt="">
 <div class="d-flex justify-content-between p-3"
 <h4><em>${item.name}</em></h4>
 <h4><em>${item.price.toFixed(2)}</em></h4>
 </div>
 </div>
`
    })
    document.getElementById('iceCream-vessels').innerHTML = template
}
function drawToppings() {
    let template = ''
    toppings.forEach(item => {
        template += `
<div class="col-md-3 bg-warning rounded shadow " onclick="addTopping('${item.price}')">
 <img class="w-100 object-cover pt-2" height="200px" pt-2 rounded-top"
 src="${item.image}"
 alt="">
 <div class="d-flex justify-content-between p-3"
 <h4><em>${item.name}</em></h4>
 <h4><em>${item.price.toFixed(2)}</em></h4>
 </div>
 </div>
`
    })
    document.getElementById('iceCream-toppings').innerHTML = template
}

function drawOrder() {
    let template = ''
    let total = 0
    order.forEach(item => {
        total += item.price
        template += `
<li class="d-flex justify-content-between">
<p class="m-1">${item.name}</p>
<p class="m-1">$${item.price.toFixed(2)}</p>
</li>

`
    })
    document.getElementById('total').innerText = total.toFixed(2)
    document.getElementById('items-ordered').innerHTML = template

}

function addFlavor(fl) {
    let found = iceCream.find(item => item.price == fl)


    if (found) {

        order.push(found)
        drawOrder()
    }
    document.getElementById('purchase-button')
}
function addVessel(vs) {
    let found = vessels.find(item => item.price == vs)


    if (found) {

        order.push(found)
        drawOrder()
    }
    document.getElementById('purchase-button')
}
function addTopping(top) {
    let found = toppings.find(item => item.price == top)


    if (found) {

        order.push(found)
        drawOrder()
    }
    document.getElementById('purchase-button')
}

function purchase() {
    order.length = 0
    drawOrder()
    document.getElementById('purchase-button')
}




drawIceCream()
drawVessels()
drawToppings()
drawOrder()