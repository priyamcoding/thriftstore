
//white shirt
if (document.querySelector('.shop-item-button')) { 
document.querySelector('.shop-item-button').addEventListener('click', cartClicked);
}

function cartClicked() 
{
    alert('item is in the cart!')
}


//cart
if (document.querySelector('.btn-purchase')) { 
document.querySelector('.btn-purchase').addEventListener('click', purchaseClicked);
}

function purchaseClicked() {
    alert('Thank you for your purchase')
}

