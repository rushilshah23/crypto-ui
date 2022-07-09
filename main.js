const chart = document.querySelector("#chart").getContext('2d');
// Create a new chart instance
new Chart(chart,{
    type:'line',
    data:{
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'],
        datasets:[
            {
                label:'BTC',
                data:[29374,33537,49631,38111,46878,56789,61899,43787,58999,47878,41454],
                borderColor:'red',
                borderWidth:2
            },
            {
                label:'ETH',
                data:[32374,33537,39631,38111,51878,56789,55899,39787,43999,36878,39454],
                borderColor:'blue',
                borderWidth:2
            }
        ]
    },
    options:{
        responsive:true
    }
})
// show  or hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');



menuBtn.addEventListener('click',()=>{
    sidebar.classList.toggle('show-sidebar');
    if(sidebar.classList.contains('show-sidebar')){

    sidebar.style.display = 'block';
    }else{
        sidebar.style.display = 'none';
    }
    // sidebar.classList.remove('show-sidebar');
    // sidebar.classList.add('hide-sidebar');
})

closeBtn.addEventListener('click',()=>{
    sidebar.classList.toggle('show-sidebar');
    sidebar.style.display = 'none';

    
    // sidebar.classList.add('show-sidebar');
    // sidebar.classList.remove('hide-sidebar');
})



// change theme
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');
    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');

})


// show dropdown when clicked expand more
const dropdownBtn = document.querySelector('.expand-more');
// if(dropdownBtn.classList.contains('close')){
//     dropdownBtn.querySelector('.dropdown-content').style.display = 'none';
// }else{
//     dropdownBtn.querySelector('.dropdown-content').style.display = 'block';
// }
dropdownBtn.addEventListener('click',()=>{
    dropdownBtn.classList.toggle('close');
    if(dropdownBtn.classList.contains('close')){
        dropdownBtn.querySelector('.dropdown-content').style.display = 'block';

    }else{
        dropdownBtn.querySelector('.dropdown-content').style.display = 'none';

    }
});


window.onclick = function(event){
    console.log(event.target)
    if(!event.target.matches('.show-dropdown') ){
        console.log("here")
        // const dropdownBtn = document.querySelector('.expand-more');
        dropdownBtn.querySelector('.dropdown-content').style.display = 'none';

    }
}