const onClick = document.querySelector("button");
/*if(onClick){
    console.log('clicked');
}
*/
document.querySelector('button').addEventListener('click', purchaseClicked);
function purchaseClicked() {
    alert('Thank you for your purchase')
}
