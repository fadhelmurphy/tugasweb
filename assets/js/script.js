
var renderLayout = `    <header>
<div class="container" id="#beranda">
  <nav>
    <div class="left">
      <h4>Stuja<br />Coffee</h4>
    </div>
    <div class="right">
      <ul>`+render.menu+`
      </ul>
    </div>
  </nav>
</div>
</header>
<section id="beranda">
<div class="container">
  <div class="baris">
    <div class="variasi">
      <h1>01</h1>
    </div>
    <div class="kolom">`+render.beranda+`
    </div>
  </div>
</div>
</section>
<section id="product">
<div class="container">`+render.product+`
</div>
</section>
<section id="total">
<div class="container">
  <div class="baris">
    <div class="kolom">
      <h1 class="font-gede" style="margin: 0;">
        Keranjang
      </h1>
      <p>Anda punya <span class="total-count"></span> item di keranjang</p>
    </div>
  </div>
  <div class="show-cart">
  </div>
  <div class="baris total">
    <div class="kolom">
      
    <h1 style="text-align: center;">TOTAL HARGA : <span class="biaya">Rp. <span class="total-cart"></span></span></h1>
    </div>
    <div class="kolom">
      <button class="button-link" style="width: 100%;font-size: 18px;">
        <b>Checkout</b>
      </button>
    </div>
  </div>
</div>
</section>
<section id="lokasi">
<div class="container">`+render.lokasi+`
</div>
</section>
<section id="kontak">
<div class="container">
  <div class="baris kontak">
    <div class="variasi">
      <h1>04</h1>
    </div>
    <div class="kolom">
      <h1 class="font-gede"><span>Kontak</span> Kami</h1>
    </div>
  </div>`+render.kontak+
  `</script>
</div>
</section>
`
$('body').prepend(renderLayout)
$(document).ready(function () {
  var c = 0;
  $('body').prepend(
    '<div class="loading-page">'+
      '<div class="counter">'+
        '<h1>0</h1>'+
      '</div>'+
    '</div>')
  var i = setInterval(function () {
    document.querySelector(".loading-page h1").innerHTML = c + "%";
    c++;
    if (c === 101) {
      clearInterval(i);
      $(".loading-page").fadeOut().addClass(" hidden");
    }
  });

});

var shoppingCart = (function() {
  cart = [];
  
  // Constructor
  function Item(name, image, price, count) {
  this.name = name;
  this.image = image;
  this.price = price;
  this.count = count;
  }
  
  // Save cart
  function saveCart() {
  sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  
  // Load cart
  function loadCart() {
  cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
  loadCart();
  }
  
  var obj = {};
  
  // Add to cart
  obj.addItemToCart = function(name, image, price, count) {
  for(var item in cart) {
    if(cart[item].name === name) {
      cart[item].count ++;
      saveCart();
      return;
    }
  }
  var item = new Item(name, image, price, count);
  cart.push(item);
  saveCart();
  }
  // Set count from item
  obj.setCountForItem = function(name, count) {
  for(var i in cart) {
    if (cart[i].name === name) {
      cart[i].count = count;
      break;
    }
  }
  };
  // Remove item from cart
  obj.removeItemFromCart = function(name) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart[item].count --;
        if(cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
  }
  saveCart();
  }
  
  // Remove all items from cart
  obj.removeItemFromCartAll = function(name) {
  for(var item in cart) {
    if(cart[item].name === name) {
      cart.splice(item, 1);
      break;
    }
  }
  saveCart();
  }
  
  // Clear cart
  obj.clearCart = function() {
  cart = [];
  saveCart();
  }
  
  // Count cart 
  obj.totalCount = function() {
  var totalCount = 0;
  for(var item in cart) {
    totalCount += cart[item].count;
  }
  return totalCount;
  }
  
  // Total cart
  obj.totalCart = function() {
  var totalCart = 0;
  for(var item in cart) {
    totalCart += cart[item].price * cart[item].count;
  }
  return Number(totalCart.toFixed(2));
  }
  
  // List cart
  obj.listCart = function() {
  var cartCopy = [];
  for(i in cart) {
    item = cart[i];
    itemCopy = {};
    for(p in item) {
      itemCopy[p] = item[p];
    }
    itemCopy.total = Number(item.price * item.count).toFixed(2);
    cartCopy.push(itemCopy)
  }
  
  return cartCopy;
  }
  

  return obj;
  })();
  
  // Add item
  $('.add-to-cart').click(function() {
    var index = $(this).data('index')
    var item = product.kolom[index]  
  var name = item.judulkolom;
  var price = item.harga;
  var image = item.gambar;
  shoppingCart.addItemToCart(name, image, price, 1);
  displayCart();
  });

  // Clear items
  $('.clear-cart').click(function() {
  shoppingCart.clearCart();
  displayCart();
  });
  
  
  function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for(var i in cartArray) {
  output += "<div class='baris' style='margin-bottom:3%'>"
    + "<div class='kolom' style='align-self:center;'><img src='" + cartArray[i].image + "' /></div>" 
    + "<div class='kolom'>"
    + "<div class='baris'><h2>" + cartArray[i].name + "</h2></div>"
    + "<div class='baris'><p>Harga satuan : Rp. " + cartArray[i].price + "</p></div>"
    + "<div class='baris'><h4><b>Total :  <span class='biaya'>Rp. " + cartArray[i].total + "</span></b></h4></div>"
    +"</div>" 
    + "<div class='kolom' style='align-self:center;'><div class='baris' style='justify-content:space-evenly'><a class='button-link minus-item' style='box-shadow: 0 0.5rem 1rem #ccc;background:white;color:#888;"
    +"border: 2px solid #ddd;' data-name='" + cartArray[i].name + "'>-</a>"
    + "<p>"+ cartArray[i].count +"</p>"
    + "<a class='button-link plus-item' data-name='" + cartArray[i].name + "'>+</a></div></div>"
    + "<div class='kolom' style='align-self:center;'><div class='baris' style='justify-content: center;'><h1 class='delete-item' style='cursor:pointer;color:#ccc' data-name='" + cartArray[i].name + "'><b>X</b></h1></div></div>"
    +  "</div>";
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
  }
  
  // Delete item button
  
  $('.show-cart').on("click", ".delete-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
  })
  
  
  // -1
  $('.show-cart').on("click", ".minus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCart(name);
  displayCart();
  })
  // +1
  $('.show-cart').on("click", ".plus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.addItemToCart(name);
  displayCart();
  })
  
  // Item count input
  $('.show-cart').on("change", ".item-count", function(event) {
  var name = $(this).data('name');
  var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
  });
  
  displayCart();
  