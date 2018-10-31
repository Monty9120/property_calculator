$(function(){
	console.log('jquery test')


$('.currency').mask('000,000,000', {reverse: true});

$('#refresh').on('click',function(){
	//Calculate Loan Amount
	var purchasePrice = $('#purchase-price').val().replace(/,/g, '');
	var deposit = $('#deposit').val().replace(/,/g, '');
	$('.loan-amount').html(purchasePrice-deposit)

	//Calculate Rental Income
	var rentalIncome = $('#rental-income').val().replace(/,/g, '');
	$('.r-weekly-rent').html(rentalIncome)



	//Calculate annual rent and
	//Calculate property managemnet
	var annualVaccancy = $('#annual-vaccancy').val()
	var rentalIncome = $('#rental-income').val().replace(/,/g, '');
	$('.r-annual-rent').html(rentalIncome*(52-annualVaccancy));

	$('.loan-amount').html(purchasePrice-deposit)


	annualRentVal = $('.r-annual-rent').html();
	console.log(annualRentVal);
	var propertyMangt = $ ('#property-management').val();
	$('.r-property-mangt').html((annualRentVal*propertyMangt)/100);

});




	

// annual rent * property mngment %
	});
