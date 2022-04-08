const banner = document.getElementById("banner");
const profile_bar = document.querySelector(".profile-bar");

function account1(){
    banner.style.display = "none";
    profile_bar.innerHTML = `<div class="profile-bar">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlBrZT7BQkfXf3QWyscxf5nIsf2NhE0NbGgk4U6_S09YSLyV-i9qulMkGtQj3fsStUhzo&usqp=CAU" alt="DP">
    <div class="user-bar">
        <p id="user-name">Priya</p>
        <p id="user-mg">Online</p>
    </div>
    <div class="search-icon">
        <i class="fa-solid fa-magnifying-glass" title="search..."></i>
        <i class="fa-solid fa-ellipsis-vertical" title="Menu" style="cursor: pointer;" ></i>
    </div>
</div>

<div class="notice">
                <i class="fa-solid fa-lock"></i>
                <p>Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Click to learn more.</p>
            </div>
            <div class="sender-msg">
                <div class="tik"></div>
                <p id="user-msg"> hey </p>
            </div>
`
}
function account2(){
    banner.style.display = "none";
    profile_bar.innerHTML = `<div class="profile-bar">
    <img src="https://phantom-marca.unidadeditorial.es/9adb565dcfc4dc3e9b1948c7cf5b8f01/resize/1320/f/jpg/assets/multimedia/imagenes/2022/02/21/16454391499069.jpg" alt="DP">
    <div class="user-bar">
        <p id="user-name">Tom</p>
        <p id="user-mg">last seen today at 5:45 pm</p>
    </div>
    <div class="search-icon">
        <i class="fa-solid fa-magnifying-glass" title="search..."></i>
        <i class="fa-solid fa-ellipsis-vertical" title="Menu" style="cursor: pointer;" ></i>
    </div>
</div>

<div class="notice">
                <i class="fa-solid fa-lock"></i>
                <p>Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Click to learn more.</p>
            </div>
            <div class="sender-msg">
                <div class="tik"></div>
                <p id="user-msg"> whats up ?</p>
            </div>
`
}
function account3(){
    banner.style.display = "none";
    profile_bar.innerHTML = `<div class="profile-bar">
    <img src="https://pbs.twimg.com/profile_images/1162476362151731200/AYwXmG38_400x400.jpg" alt="DP">
    <div class="user-bar">
        <p id="user-name">Sasuke</p>
        <p id="user-mg">last seen today at 2:18 pm</p>
    </div>
    <div class="search-icon">
        <i class="fa-solid fa-magnifying-glass" title="search..."></i>
        <i class="fa-solid fa-ellipsis-vertical" title="Menu" style="cursor: pointer;" ></i>
    </div>
</div>

<div class="notice">
                <i class="fa-solid fa-lock"></i>
                <p>Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Click to learn more.</p>
            </div>
            <div class="sender-msg">
                <div class="tik"></div>
                <p id="user-msg"> Where is Naruto ?</p>
            </div>
`
}

function menu(){
    // document.querySelector(".pop-menu").style.display = "block";
    var animation = document.querySelector(".pop-menu");
   animation.classList.toggle("mystyle");
}