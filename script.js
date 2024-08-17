let math_buttons = document.querySelectorAll('.math');
let delete_button = document.querySelector('.delete');
let reset_button = document.querySelector('.reset');
let equal_button = document.querySelector('.equal');
let output = document.querySelector('.output');
let resultText;
math_buttons.forEach((math) => {
    math.addEventListener('click', () => {
        let outputText = math.innerText;
        output.innerText = (output.innerText) + outputText;
        resultText = output.innerText;
    });
});
reset_button.addEventListener('click', () => {
    output.innerText = '';
});
equal_button.addEventListener('click', () => {
    output.innerText = eval(resultText);
});
let deleteText;
delete_button.addEventListener('click', () => {
    deleteText = output.innerText;
    let $length = deleteText.length;
    output.innerText = deleteText.slice(0, ($length - 1));
});