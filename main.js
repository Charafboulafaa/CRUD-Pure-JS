/*global document,window*/
document.getElementById('my-form').addEventListener('submit', Creat);

var input = document.getElementById('my-input'),
    arr = [];

function Creat(e) {
    'use strict';
    if (input.value !== '') {
        arr.push(input.value);
    } else {
        window.alert('Please to type!');
        return false;
    }

    document.getElementById('my-form').reset();

    e.preventDefault();

    Read();
}

function Read() {
    'use strict';
    var i,
        div = document.createElement('div');

    for (i = 0; i < arr.length; i = i + 1) {
        document.body.appendChild(div);
        div.setAttribute('data-val', arr[i]);
        div.innerHTML = '<h3>' + arr[i] + '</h3><a class="edt" onclick="Update(\'' + arr[i] + '\')" href="#">Update</a><a class="rmv" onclick="Delete(\'' + arr[i] + '\')" href="#">Delete</a>';

    }

}

function Delete(val) {
    'use strict';
    var i,
        rep = window.confirm('Are you sure that you want to delete this!');
    if (rep === false) {
        return false;
    }
    for (i = 0; i < arr.length; i = i + 1) {
        if (arr[i] === val) {
            arr.splice(i, 1);
            document.querySelector('[data-val=\'' + val + '\'').remove();
        }
    }
}

function Update(val) {
    'use strict';
    var i,
        rep;
    for (i = 0; i < arr.length; i = i + 1) {
        if (arr[i] === val) {
            rep = window.prompt('Please type the new text');
            if (rep !== null) {
                arr[i] = rep;
                document.querySelector('[data-val=\'' + val + '\'').innerHTML = '<h3>' + arr[i] + '</h3><a class="edt" onclick="Update(\'' + arr[i] + '\')" href="#">Update</a><a class="rmv" onclick="Delete(\'' + arr[i] + '\')" href="#">Delete</a>';
                document.querySelector('[data-val=\'' + val + '\'').setAttribute('data-val', rep);
            } else {
                return true;
            }

        }
    }
}
