function navtoggle(id) {
    let ID = document.getElementById(id);
    if (ID.style.display == 'none') {
        ID.style.display = 'flex';
    }
    else { ID.style.display = 'none' }
}

// function overview() {
//     const overview = document.querySelector('.overview');
//     const founder = document.querySelector('.founder');
//     const mission = document.querySelector('.mission');
//     founder.style.display = 'none'
//     mission.style.display = 'none'
//     overview.style.display = ''


// }
function viewToggle(num) {
    console.log(num);
    let viewBox = document.getElementById('txtchng');
    let overview = document.getElementById('overview');
    let founder = document.getElementById('founder');
    let mission = document.getElementById('mission');
    if (num === 1) {
        viewBox.innerHTML = overview.innerHTML;
        console.log(1);
    } else if (num === 2) {
        console.log(2);
        viewBox.innerHTML = founder.innerHTML;
    } else if (num === 3) {
        console.log(3);
        viewBox.innerHTML = mission.innerHTML;
    }


}







// function founder() {
//     const founder = document.querySelector('.founder');
//     const overview = document.querySelector('.overview');
//     const mission = document.querySelector('.mission');
//     const list = document.querySelector('#listfr');
//     overview.style.display = 'none'
//     mission.style.display = 'none'
//     founder.style.display = ''

//     if (overview.style.display === 'none') {
//         list.style = `background-color: #2ccc7e;
//         color: white;
//         `

//     }


// }

// function mission() {
//     const founder = document.querySelector('.founder');
//     const overview = document.querySelector('.overview');
//     const mission = document.querySelector('.mission')
//     overview.style.display = 'none'
//     mission.style.display = ''
//     founder.style.display = 'none'
// 