const input_text = document.querySelector('#input__switch');
const button = document.querySelector('#button__switch');
//const result_field = document.querySelector('#result__field');

const form = document.querySelector('#input__form');

const div = document.createElement('div');
div.className = ('result__field');

button.addEventListener('click', (e)=>{
    e.preventDefault();

    if(input_text.value != '') {
        div.innerHTML = input_text.value;
        document.body.append(div);

        input_text.value = " ";
    } else { alert('field is empty!'); }
});

input_text.addEventListener('mouseover', ()=>{
    div.innerHTML = "";
})