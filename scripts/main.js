"use strict";$(function(){$(".home").backstretch("../images/bg.jpg"),$("#fullpage").fullpage({easing:"swing",autoScrolling:!1,anchors:["home","about","contact"],scrollingSpeed:500,menu:".navbar-nav",resize:!1}),$("#mail").on("submit",function(a){a.preventDefault();var e={};$(this).serializeArray().map(function(a){e[a.name]=a.value});var s="sarunas@sarunast.com";$.extend(e,{_subject:"Sarunast.com message from "+e.name}),$.ajax({url:"//formspree.io/"+s,method:"POST",data:e,dataType:"json"}).always(function(a){"undefined"!==a.success&&"Email sent"===a.success?swal("Success","Email was sent!","success"):swal("Oops...","Something went wrong! Not a problem you can still reach my via my email "+s,"error")})})});