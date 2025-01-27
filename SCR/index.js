let btDark = document.getElementById('bt-dark')
let htmlTag = document.getElementsByTagName("html")

document.addEventListener('alpine:init', () => {
    Alpine.data('slider', () => ({
        currentIndex: 1,
        images: [
            './img/imgAng2.jpg',
            './img/imgAng3.jpg',
            './img/imgAng4.jpg',
            './img/imgAng5.jpg'
        ],
        back() {
            if (this.currentIndex > 1) {
                this.currentIndex = this.currentIndex - 1;
            }
        },
        next() {
            if (this.currentIndex < this.images.length) {
                this.currentIndex = this.currentIndex + 1;
            } else if (this.currentIndex <= this.images.length){
                this.currentIndex = this.images.length - this.currentIndex + 1
            }
        },
    }))
})


btDark.addEventListener('click', function(){
    htmlTag[0].classList.toggle('dark')
    if(htmlTag[0].classList.value =='dark' ){
        btDark.classList.replace('btn-light','btn-dark')
        btDark.innerText= 'Dark Mode'
    }else{
        btDark.classList.replace('btn-dark','btn-light')
        btDark.innerText= 'Light Mode'
    }
   
})