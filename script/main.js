const accord = document.querySelectorAll('.accordItem');

for(item of accord) {
    item.addEventListener('click', function() {
        if(this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            for(el of accord) {
                el.classList.remove('active');
            }
            this.classList.add('active');
        }
    })
}


const btn = document.querySelector('button');
    btn.onclick = () => {
            window.print();
    }

const modal = document.getElementById('myModal');

const img = document.getElementById('myPhoto');
const modalImg = document.getElementById('imgShow');
const captionText = document.getElementById('caption');
img.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

const span = document.getElementsByClassName('close')[0];
span.onclick = function () {
    modal.style.display = 'none';
}