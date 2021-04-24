const searchbut = document.getElementById('searchbut');
const getInfo = (event) => {
    event.preventDefault();
    prompt("working");
}
searchbut.addEventListener('click', getInfo);