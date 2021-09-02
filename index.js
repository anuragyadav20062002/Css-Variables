var inputs= document.querySelectorAll('.controls input');

function changeHandler(){

    var suffix = this.dataset.sizing || ' ';
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
}

inputs.forEach(input => input.addEventListener('change', changeHandler) );
inputs.forEach(input => input.addEventListener('mousemove', changeHandler) );