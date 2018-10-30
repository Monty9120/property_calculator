$(function(){
	console.log('jquery test')

$('.currency').mask('000,000,000', {reverse: true});


//Calculate Loan Amount
$('#deposit, #purchase-price').on('input',function(){
	var purchasePrice = $('#purchase-price').val().replace(/,/g, '');


	var deposit = $('#deposit').val().replace(/,/g, '');

	$('.loan-amount').html(purchasePrice-deposit)
})


	
})