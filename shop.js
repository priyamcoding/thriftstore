
let itemno = 101;
let qtypur = 01; 
let price = 10; 
let avail = 20; 





//white shirt
if (document.querySelector('.shop-item-button')) { 
document.querySelector('.shop-item-button').addEventListener('click', cartClicked);
}

function cartClicked() 
{
    //  itemno_pur = itemno; 
     itempur = qtypur;
     price = price;
     avail = avail; 
    alert('item is in the cart!')
    console.log(itemno, qtypur, price, avail)
    pur_arr=[itemno, qtypur, price, avail]
    console.log(pur_arr)
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

