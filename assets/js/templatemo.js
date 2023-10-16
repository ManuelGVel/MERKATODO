/*

TemplateMo 559 merkatodo Shop

https://templatemo.com/tm-559-merkatodo-shop

*/

'use strict';
$(document).ready(function() {

    // Accordion
    var all_panels = $('.templatemo-accordion > li > ul').hide();

    $('.templatemo-accordion > li > a').click(function() {
        console.log('Hello world!');
        var target =  $(this).next();
        if(!target.hasClass('active')){
            all_panels.removeClass('active').slideUp();
            target.addClass('active').slideDown();
        }
      return false;
    });
    // End accordion

    // Product detail
    $('.product-links-wap a').click(function(){
      var this_src = $(this).children('img').attr('src');
      $('#product-detail').attr('src',this_src);
      return false;
    });
    $('#btn-minus').click(function(){
      var val = $("#var-value").html();
      val = (val=='1')?val:val-1;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('#btn-plus').click(function(){
      var val = $("#var-value").html();
      val++;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('.btn-size').click(function(){
      var this_val = $(this).html();
      $("#product-size").val(this_val);
      $(".btn-size").removeClass('btn-secondary');
      $(".btn-size").addClass('btn-success');
      $(this).removeClass('btn-success');
      $(this).addClass('btn-secondary');
      return false;
    });
    // End roduct detail

});

// Form Login
document.addEventListener("DOMContentLoaded", function() {
  
  const loginButton = document.getElementById("loginButton");
  loginButton.addEventListener("click", function() {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      
      if (email === "merkatodo@gmail.com" && password === "12345678") {
          window.location.href = "admin-shop.html";
      } else {
          alert("Credenciales incorrectas. Intente nuevamente.");
      }
  });
});

// Form Agregar productos
document.addEventListener("DOMContentLoaded", function() {
  
  const addButton = document.getElementById("addButton");
  addButton.addEventListener("click", function() {
      const id = document.getElementById("id").value;
      const name = document.getElementById("nombre").value;
      const brand = document.getElementById("marca").value;
      const description = document.getElementById("descripcion").value;
      const measurement = document.getElementById("medida").value;
      const quantity = document.getElementById("cantidad").value;
      const stock = document.getElementById("stock").value;
      const value = document.getElementById("precio").value;
      
      if (id === "" || name === "" || brand === "" || description === "" || measurement === "" || quantity === "" || stock === "" || value === "") {
        alert("Complete todos los campos");
      } else {
        alert("Producto agregado");
      }
  });
});
