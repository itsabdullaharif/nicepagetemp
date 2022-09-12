function navclose() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = 'none';
}
function navview() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = 'flex';
}
function overview() {
    const overview = document.querySelector('.overview');
    const founder = document.querySelector('.founder');
    const mission = document.querySelector('.mission');
    founder.style.display = 'none'
    mission.style.display = 'none'
    overview.style.display = ''


}
function founder() {
    const founder = document.querySelector('.founder');
    const overview = document.querySelector('.overview');
    const mission = document.querySelector('.mission');
    const list = document.querySelector('#listfr');
    overview.style.display = 'none'
    mission.style.display = 'none'
    founder.style.display = ''

    if (overview.style.display === 'none') {
        list.style = `background-color: #2ccc7e;
        color: white;
        padding: 1rem;
        font-weight: 500`

    }


}

function mission() {
    const founder = document.querySelector('.founder');
    const overview = document.querySelector('.overview');
    const mission = document.querySelector('.mission')
    overview.style.display = 'none'
    mission.style.display = ''
    founder.style.display = 'none'
}