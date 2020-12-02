const allFunction=()=>{
    const navToggler=()=>{
        const navBars=document.querySelector('.fa-bars')
        const navCancel=document.querySelector('.fa-times')
        const lists=document.querySelector('.lists')
        navBars.addEventListener('click',()=>{
            navBars.style.display='none';
            lists.style.display="flex";
            navCancel.style.display='block';
        })
        navCancel.addEventListener('click',()=>{
            navBars.style.display='flex'
            navCancel.style.display='none';
            lists.style.display="none";
        })
    }
    navToggler();
}
allFunction();