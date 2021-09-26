
let itemno = 101;

let qtypur = 01; 
let price = 10; 
let avail = 20; 

// localStorage.setItem('qtypur', '01')
// localStorage.setItem('price', '01')


//white shirt
if (document.querySelector('.shop-item-button')) { 
document.querySelector('.shop-item-button').addEventListener('click', cartClicked);
}

function cartClicked() 
{
    localStorage.setItem('itemno_added', itemno)
    itemno_pur = itemno; 
    alert('item is in the cart!')
    p = document.createElement("h2");
    p.innerHTML = "Your item is "+itemno;
    document.body.appendChild(p);
}

//cart
if (document.querySelector('.btn-purchase')) { 
document.querySelector('.btn-purchase').addEventListener('click', purchaseClicked);
}

function purchaseClicked() {
    
    alert('Thank you for your purchase')
}

document.onload()
function myFunction(){
    p = document.createElement("h2");
    p.innerHTML = "Your item is "+localStorage.getItem('itemno_added');
    document.body.appendChild(p);
}