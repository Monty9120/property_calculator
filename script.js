$(function(){
	console.log('jquery test')

$('.currency').mask('000,000,000', {reverse: true});


//Calculate Loan Amount
$('#deposit, #purchase-price').on('input',function(){
	var purchasePrice = $('#purchase-price').val().replace(/,/g, '');


	var deposit = $('#deposit').val().replace(/,/g, '');

	$('.loan-amount').html(purchasePrice-deposit)
});

//Calculate Loan Amount
$('#rental-income').on('input',function(){
	var rentalIncome = $('#rental-income').val().replace(/,/g, '');

	$('.r-weekly-rent').html(rentalIncome)
})



	
})