let pallu = document.getElementById('cringekamalesh');

function buttontoggel(){
    if (pallu.classList.contains('hidden')) {
        pallu.classList.remove('hidden')
    }else{
        pallu.classList.add('hidden')
    }
}



// slide part 
let slider = document.getElementsByClassName('slide-content');
dots= document.getElementsByClassName('dots');
sl = 1;

function right(n){

    show(sl +=n)

};





show(sl)


function bu(n){
    show(sl = n);
}

function show (n){
    let i;
    for (let i = 0; i < slider.length; i++) {
        slider[i].classList.add('hidden');
        
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.add('bg-gray-800')
        
    }
    if (n>slider.length) {
        sl=1;
    }
    if (n<1) {
        sl = slider.length;
    }
   slider[sl-1].classList.remove('hidden')
   dots[sl-1].classList.remove('bg-gray-800')
}



// slide end here 