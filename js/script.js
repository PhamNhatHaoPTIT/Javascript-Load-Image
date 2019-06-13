function getQuerySelector(selectEl) {
    return document.querySelector(selectEl);
}

let clear = getQuerySelector("#btn-clear");
let chooseFile = getQuerySelector("#btn-choose-file");

chooseFileClicked();
clearClicked();

function chooseFileClicked() {
    chooseFile.addEventListener('click', () => {
        
    });
}

function clearClicked() {
    clear.addEventListener('click', () => {
        var parent = document.getElementById("image-container");
        var imageArr = document.getElementsByClassName("image-view");
        if(imageArr.length == 0) {
            alert("Not image in your gallery, click Choose File to add image");
        }
        while(imageArr.length > 0) {
            imageArr[0].parentNode.removeChild(imageArr[0]);
        }
    });
}