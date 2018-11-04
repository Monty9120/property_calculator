$(function(){
	console.log('jquery test')


	$('.currency').mask('000,000,000', {reverse: true});

	$('#purchase-price, #deposit').on('input',function(){
		//Calculate Loan Amount
		var purchasePrice = $('#purchase-price').val().replace(/,/g, '');
		var deposit = $('#deposit').val().replace(/,/g, '');
		var loanAmount = $('.loan-amount').html(purchasePrice-deposit)

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
	var propertyMangtResult = $('.r-property-mangt').html((annualRentVal*propertyMangt)/100);



	// Calculate rental increase
	var weeklyRentCell = $('.r-weekly-rent');
	var weeklyRent = parseFloat($('.r-weekly-rent').text().replace(/$/g, ''));
	var increateRate = $('#rental-increase').val()/100;

	while(weeklyRentCell.next().length>0){

		weeklyRent += weeklyRent*increateRate;
		weeklyRentCell = weeklyRentCell.next();
		weeklyRentCell.text(weeklyRent.toFixed(2));
	}

	

	//Calcualte water and rates
	var water = $('#water').val().replace(/,/g, '');
	var rates = $('#rates').val().replace(/,/g, '');
	//NEEDS TO BE NUMBER NOT STRING!!!!!!
	var ratesWaterResult = parseFloat($('.r-rates-water').html((water+rates)));

	//Body coroperate
	var bodyCorpVal =$('#body-corporate').val();
	$('.r-body-corp').text('$'+bodyCorpVal);

	//Insurance Calc
	var insuranceVal =$('#insurance').val();
	$('.r-insurance').text('$'+insuranceVal);


	//Maintenance
	var maintenanceValUnder10 =$('#maintenance-underten').val();
	var maintenanceResult = $('.r-maintenance').text('$'+annualRentVal*(maintenanceValUnder10/100));


	// Annual Costs
	var annualCost = (maintenanceResult+insuranceVal+bodyCorpVal+ratesWaterResult+propertyMangtResult);
	var annualCostResult = $('.r-annual-costs').text(annualCost);


	//Annual interest
	var purchasePrice = $('#purchase-price').val().replace(/,/g, '');
		var deposit = $('#deposit').val().replace(/,/g, '');
		var loanAmount = $('.loan-amount').html(purchasePrice-deposit);
	var annualInterestVal = $('#annual-interest-rate').val();
	console.log(loanAmount.html());

	var annualInterestResult  = $('.r-annual-interest').html('$'+(loanAmount.html()*(annualInterestVal/100))*-1);


	//Total expenses
	var totalExpenses = (annualInterestResult.html()-annualCostResult.html())

});




	


});