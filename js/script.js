function getQuerySelector(selectEl) {
    return document.querySelector(selectEl);
}

let files = [];

let clear = getQuerySelector("#btn-clear");
let chooseFile = getQuerySelector("#btn-choose-file");
let contentElement = document.getElementById("content");

clearClicked();

async function onButtonClicked(){
    files = await selectFile("image/*", true);
    var parent = document.getElementById("image-container");
    for(var i = 0; i < files.length; i++) {
        var temp = document.createElement("img");
        temp.className = "image-view";
        temp.src = `${ URL.createObjectURL(files[i]) }`;
        parent.appendChild(temp);
    }
    //contentElement.innerHTML = files.map(file => ` <img class="image-view" src="${URL.createObjectURL(file)}" `);
}

function selectFile (contentType, multiple){
    return new Promise(resolve => {
        let input = document.createElement('input');
        input.type = 'file';
        input.multiple = multiple;
        input.accept = contentType;

        input.onchange = _ => {
            let files = Array.from(input.files);
            if (multiple)
                resolve(files);
            else
                resolve(files[0]);
        };

        input.click();
    });
}

function clearClicked() {
    clear.addEventListener('click', () => {
        var parent = document.getElementById("image-container");
        var imageArr = document.getElementsByClassName("image-view");
        if(imageArr.length == 0) {
            //alert("No image in your gallery, click Choose File to add image");
        }
        while(imageArr.length > 0) {
            imageArr[0].parentNode.removeChild(imageArr[0]);
        }
    });
}