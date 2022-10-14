const checkbox = document.querySelector('#accept');
checkbox.addEventListener("click", function(){
    console.log(checkbox.checked);
})


const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
    let checkboxes = document.querySelectorAll('input[name="color"]:checked');
    let values = []
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    alert(values);
})

function check(checked = true) {
    // getting all checkboxes input by name
    const checkboxes = document.querySelectorAll('input[name="animal"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = checked;
    });
}

function checkAll() {
    check();
    this.onclick = uncheckAll;
}

function uncheckAll() {
    check(false);
    this.onclick = checkAll;
}

const button = document.querySelector('#button');
button.onclick = checkAll;