const express = require("express");
const { cartModel } = require("../models/pro_model.js");

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