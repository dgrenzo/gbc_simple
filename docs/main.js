
const SCALE = 4;

const CANVAS = document.getElementById('canvas_element');
const CONTEXT = CANVAS.getContext('2d');

const INPUT = document.getElementById('image_input');
INPUT.addEventListener('change', () => {
    if (INPUT.isDefaultNamespace.length == 0)
        return;

    let file = INPUT.files[0];
    DrawImage(URL.createObjectURL(file))
});

function DrawImage(src) {
    let image = new Image();
    image.src = src;

    var OnImageLoaded = () => {
        CANVAS.width = image.width * SCALE;
        CANVAS.height = image.height * SCALE;
        CONTEXT.imageSmoothingEnabled = false;
        CONTEXT.drawImage(image, 0, 0, CANVAS.width, CANVAS.height);

        
        const DOWNLOAD = document.getElementById('download');
        DOWNLOAD.setAttribute('download', 'scaled_image_out.png');
        DOWNLOAD.setAttribute('href', CANVAS.toDataURL("image/png"));
    }

    if (image.complete) {
        OnImageLoaded();
    } else {
        image.addEventListener('load', OnImageLoaded);
    }
}
