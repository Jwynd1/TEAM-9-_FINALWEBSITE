// JavaScript Document
var fname_text = document.querySelector("#fname");
var lname_text= document.querySelector("#lname");
var email_field = document.querySelector("#email_field");
var message_field = document.querySelector("#message_form");
var submit_button = document.querySelector("#submit_button");
var submit_confirmation = document.querySelector("#submit_confirmation");

submit_button.addEventListener('click', function(){
	fname_text.value = '';
	lname_text.value = '';
	email_field.value = '';
	message_field.value = '';
	submit_confirmation.innerHTML = 'Message Sent!';
});