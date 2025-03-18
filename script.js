function toggleMenu(id, element) {
    var menu = document.getElementById(id);
    var icon = element.querySelector(".icon-toggle");
    menu.classList.toggle("active"); //Neu chua co active them vao, neu co xoa di
    icon.classList.toggle("rotate");  
}