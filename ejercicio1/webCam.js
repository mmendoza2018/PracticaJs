export default function webCam() {
    const $video = document.querySelector("#webCam")
    const $capture = document.querySelector("#capture")
    const $canvas = document.querySelector("#canvas")
    const photo =document.querySelector("#photo")
    const width = 520,
    height=520;
    console.log($video);
    navigator.mediaDevices.getUserMedia(

        {
            video: true,
            audio: false
        },
    )
    .then((strem =>{
        $video.srcObject= strem;
        $video.play();
    }))
    .catch(error =>{
        console.log(error);
    })

    $capture.addEventListener("click", (e) => {
        takepicture();
      e.preventDefault();
    })
    function takepicture() {
        var context = $canvas.getContext('2d');
        if (width && height) {
          $canvas.width = width;
          $canvas.height = height;
          context.drawImage($video, 0, 0, width, height);
    
          var data = $canvas.toDataURL('image/png');
          console.log(data);
          photo.setAttribute('src', data);
        } else {
          clearphoto();
        }
      }


}