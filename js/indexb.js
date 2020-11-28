const loader=()=>{
    const loaded=document.getElementById('loader');
    const emergency=document.querySelector('.emergencies')
        setTimeout(() => {
            loaded.style.display='none';
            emergency.style.display='flex'
        }, 3000);
}
loader();