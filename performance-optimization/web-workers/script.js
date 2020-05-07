const $input = document.getElementById('input')
const fileReader = new FileReader()
const image = new Image()

image.addEventListener('load', (e)=>{
    document.body.appendChild(image)
})

fileReader.addEventListener('load', (e)=>{
    const base64 = e.target.result
    image.src = base64
})

$input.addEventListener('change', (e)=>{
    const file = e.target.files[0]
    fileReader.readAsDataURL(file)
})