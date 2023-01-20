const express = require("express");
const { proModel } = require("../models/pro_model.js");


// -----------------------------------------------------------------------------------


function post() {
    const title = document.querySelector("#title").value;
    const body = document.querySelector("#body").value;
    const device = document.querySelector("#device").value;

    const payload = {
        title,
        body,
        device
    }

    fetch("https://unusual-pike-parka.cyclic.app/posts/addpost", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Authorization": sessionStorage.getItem("token")
        },
        body: JSON.stringify(payload)
    })
        .then(result => {
            result.json()
            if (result.ok) { alert("Media has been posted") }
        })
        .then(data => {
        })
        .catch(err => {
            console.log(err);
        })

    display();
}

const display = async () => {

    fetch("https://unusual-pike-parka.cyclic.app/posts/", {
        headers: {
            "Authorization": sessionStorage.getItem("token")
        }
    }).then(result => result.json()).then(data => {
        output(data);
    })
        .catch(err => {
            console.log(err);
        })

}

function output(data) {
    document.querySelector("#cont").innerHTML = "";

    if (data.length != 0) {

        data.forEach(element => {

            let div = document.createElement("div");

            let title = document.createElement("h3");
            title.innerText = `Title : ${element.title}`

            let body = document.createElement("p");
            body.innerText = `Notes : ${element.body}`;

            let device = document.createElement("p");
            device.innerText = `Category : ${element.device}`;

            let edit = document.createElement("button");
            edit.innerText = `Edit`;
            edit.addEventListener("click", () => {
                update(element._id);
            })

            let btn = document.createElement("button");
            btn.innerText = `Delete`;

            btn.addEventListener("click", () => {
                deleting(element._id);
            });

            div.append(title,body,device, edit, btn);

            document.querySelector("#cont").append(div);

        });

    } else {
        document.querySelector("#cont").innerHTML = `<h2>No any Social Medial Appended, Please Append.</h2>`
    }
}


const deleting = async (id) => {

    await fetch(`https://unusual-pike-parka.cyclic.app/posts/delete${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": sessionStorage.getItem("token")
        }
    }).then(result => {
        result.json();
        if (result.ok) {
            console.log();
            alert("Note has beem deleted")
        }
    }).catch(err => {
        console.log(err);
    })
    show();
}

