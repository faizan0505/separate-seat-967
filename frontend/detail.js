let showdata = JSON.parse(localStorage.getItem("detaildata"));

// console.log(showdata)

function detailrender(data){
return document.querySelector("#detail").innerHTML =

`
<div>
<img src=${data.image} alt="">
</div>
<div>
<h2>${data.title}</h2>
<br>
<hr>
<br>
<h3>Category : ${data.category}</h3>
<br>
<hr>
<br>
<h3>Price : $ ${data.price}</h3>
<br>
<hr>
<br>
<h2>Size</h2>
<br>
<select name="" class="detail_size">
    <option value="">Select Size</option>
    <option value="">XXS</option>
    <option value="">XS</option>
    <option value="">S</option>
    <option value="">M</option>
    <option value="">L</option>
    <option value="">XL</option>
    <option value="">XXL</option>
</select>
<br>
<br>
<hr>
<br>
<br>
<img src="images/detail_color.JPG" alt="">
<br>
<button id="add_bag">Add To Bag</button>
</div>
`

}

detailrender(showdata)