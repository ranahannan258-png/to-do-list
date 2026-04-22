let enter = document.querySelector(".enter");
let add = document.querySelector(".add");
let con = document.querySelector(".listcontainer");
let list = document.querySelectorAll(".list");

let arr = ['wash dishes', 'boil eggs']

render();
addition();

function addition() {
    add.addEventListener("click", () => {
        let val = enter.value;
        if (val !== '') {
            arr.push(val);
            render();
            enter.value = '';
        }
    })
}

function render() {
    id = 0;
    let html = ''
    for (let i = 0; i < arr.length; i++) {
        html += `
                <div class="list">
                    <p class="listitems">
                        ${arr[i]}
                    </p>
                    <button class="delete" onclick="
                    arr.splice(${i},1);
                    render();"
                    >delete</button>
                </div>
        `
        id++;
    }
    con.innerHTML = html;
}


