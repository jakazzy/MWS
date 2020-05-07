const $input = document.getElementById('input')
const $preview = document.getElementById('preview')
const previewCtr = $preview.getContext('2d')

const fileReader = new FileReader()
const image = new Image()

image.addEventListener('load', (e)=>{
    previewCtr.width = image.width
    previewCtr.height = image.height
    previewCtr.drawImage(image, 0,0)
    
})

fileReader.addEventListener('load', (e)=>{
    const base64 = e.target.result
    image.src = base64
})

$input.addEventListener('change', (e)=>{
    const file = e.target.files[0]
    fileReader.readAsDataURL(file)
})