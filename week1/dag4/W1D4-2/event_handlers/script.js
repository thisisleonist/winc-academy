// const mybtn = document.getElementById('mybutton');

// mybtn.addEventListener('click',function(){
//     alert('button clicked');
// });

const toggleColor = function(){
    document.querySelector('body').classList.toggle('red-background');
}

const mybtn2 = document.getElementById('mybutton2');
mybtn2.addEventListener('click',function(){
    toggleColor();

});