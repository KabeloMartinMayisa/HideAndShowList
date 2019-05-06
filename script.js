//selecting and getting hold of the right elements
const button = document.querySelector('.hiddingButton');
const list  = document.querySelector('.list');

//adding an event listener and making changes to button triggers
button.addEventListener('click',() => {

    if(list.style.display == 'none'){
        button.textContent = 'Hide List';//change the button's text
        list.style.display = 'block';//displaying the list
    }
    else{
        button.textContent = 'Show List';//changing the button's text
        list.style.display = 'none';//hidding the list
    }
});