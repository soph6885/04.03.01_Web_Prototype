window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("Siden vises");
    showStart();
}

function showStart() {
    document.querySelector("#afleveringer1").addEventListener("click", afleveringer);
}

function afleveringer() {

    document.querySelector("#firstsemester").classList.add("hide");

    document.querySelector("#afleveringer").classList.add("show");
}
