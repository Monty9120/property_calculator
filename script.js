$(function(){
	console.log('jquery test')


$('.currency').mask('000,000,000', {reverse: true});

$('#purchase-price, #deposit').on('input',function(){
	//Calculate Loan Amount
	var purchasePrice = $('#purchase-price').val().replace(/,/g, '');
	var deposit = $('#deposit').val().replace(/,/g, '');
	$('.loan-amount').html(purchasePrice-deposit)

});

$('#refresh').on('click',function(){

	//Calculate Rental Income
	var rentalIncome = $('#rental-income').val().replace(/,/g, '');
	$('.r-weekly-rent').html(rentalIncome)



	//Calculate annual rent and
	
	var purchasePrice = $('#purchase-price').val().replace(/,/g, '');
	var annualVaccancy = $('#annual-vaccancy').val()
	var rentalIncome = $('#rental-income').val().replace(/,/g, '');
	$('.r-annual-rent').html(rentalIncome*(52-annualVaccancy));
	// $('.loan-amount').html(purchasePrice-deposit)

	//Calculate property managemnet
	annualRentVal = $('.r-annual-rent').html();
	console.log(annualRentVal);
	var propertyMangt = $ ('#property-management').val();
	$('.r-property-mangt').html((annualRentVal*propertyMangt)/100);







	// Calculate rental increase
	var cell = $('.r-weekly-rent');
	var weeklyRent = parseFloat($('.r-weekly-rent').text().replace(/$/g, ''));
	var increateRate = 0.03;

	while(cell.next().length>0){

		weeklyRent += weeklyRent*increateRate;
		cell = cell.next();
		cell.text(weeklyRent.toFixed(2));
	}

	

});




	


});
