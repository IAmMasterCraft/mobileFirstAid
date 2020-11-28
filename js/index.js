const loader=()=>{
    const loaded=document.getElementById('loader');
    const poison_div=document.querySelector('.all')
    const emergency=document.querySelector('.emergencies')
        setTimeout(() => {
            loaded.style.display='none';
            poison_div.style.display='flex'
        }, 3000);
        setTimeout(() => {
            loaded.style.display='none';
            emergency.style.display='flex'
        }, 3000);
}
loader();



const allFunction=()=>{
    const navToggler=()=>{
        const navBar=document.querySelector('.navBars')
        const navBars=document.querySelector('.fa-bars')
        const navCancel=document.querySelector('.fa-times')
        const lists=document.querySelector('.lists')
        navBar.addEventListener('click',()=>{
            if(navCancel.style.display=='none'){
                navCancel.style.display='block';
                navBars.style.display='none';
                lists.style.display="flex";
            }
            else{
                navBars.style.display='flex'
                navCancel.style.display='none';
                lists.style.display="none";
            }
        })
    }
    navToggler();
    // const colorLoaders=()=>{
    //     const div_colors=document.querySelector('.each_emergencies')
    //     div_colors.addEventListener('mouseover',()=>{
    //         for(var i=0;i<div_colors.length;i++){
    //             var colors = ['#ff0000', '#00ff00', '#0000ff','#32a852','#ad349d','#75abd1'];
    //             var random_color = colors[Math.floor(Math.random() * colors.length)];
    //             div_colors[i].style.backgroundColor = random_color
    //         }
    //     })
    // }
    // colorLoaders();
}
allFunction();