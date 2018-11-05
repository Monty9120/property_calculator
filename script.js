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


	//Caclulate Property Value

	var propertyValueCell = $('.r-property-value');
	var capitalGrowth = $('#capital-growth').val()/100;
	var propertyValueInput = $('#property-value').val().replace(/,/g, '');
	
		$('.r-property-value').html('$'+propertyValueInput)

		//Calculate Increase
		var propertyValueValue = parseFloat(propertyValueInput);

		while(propertyValueCell.next().length>0){
			propertyValueValue += propertyValueValue*capitalGrowth;
			propertyValueCell = propertyValueCell.next();
			propertyValueCell.text('$'+propertyValueValue.toFixed(0));
		}





	//Calculate annual rent and
	var purchasePrice = $('#purchase-price').val().replace(/,/g, '');
	var annualVaccancy = $('#annual-vaccancy').val()
	var rentalIncome = $('#rental-income').val().replace(/,/g, '');
	$('.r-annual-rent').html('$'+rentalIncome*(52-annualVaccancy));

	var annualRentCell = $('.r-weekly-rent');


	// while(weeklyRentCell.next().length>0){
	// 	weeklyRent += weeklyRent*increateRate;
	// 	weeklyRentCell = weeklyRentCell.next();
	// 	weeklyRentCell.text('$'+weeklyRent.toFixed(2));
	// }



	//Calculate property managemnet
	annualRentVal = $('.r-annual-rent').html();

	var propertyMangt = $ ('#property-management').val();
	var propertyMangtResult = $('.r-property-mangt').html('$'+(annualRentVal*propertyMangt)/100);




	//Calculate Rental Income
	var rentalIncome = $('#rental-income').val().replace(/,/g, '');
	$('.r-weekly-rent').html('$'+rentalIncome)
	
		// Calculate rental increase
		var weeklyRentCell = $('.r-weekly-rent');
		var weeklyRent = parseFloat($('#rental-income').val().replace(/,/g, ''));
		var rentalIncrease = $('#rental-increase').val()/100;

		while(weeklyRentCell.next().length>0){
			weeklyRent += weeklyRent*rentalIncrease;
			weeklyRentCell = weeklyRentCell.next();
			weeklyRentCell.text('$'+weeklyRent.toFixed(0));
		}

	

	//Calcualte water and rates
	var water = $('#water').val().replace(/,/g, '');
	var rates = $('#rates').val().replace(/,/g, '');
	$('.r-rates-water').html('$'+(+water + +rates));

		//Calculate Increase
		var ratesWaterCell = $('.r-rates-water');
		var ratesWaterValue = parseFloat(water + rates);
		var costIncreases = $('#cost-increase').val()/100;

		while(ratesWaterCell.next().length>0){
			ratesWaterValue += ratesWaterValue*costIncreases;
			ratesWaterCell = ratesWaterCell.next();
			ratesWaterCell.text('$'+ratesWaterValue);
		}



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
	// var annualCost = (maintenanceResult+insuranceVal+bodyCorpVal+ratesWaterResult+propertyMangtResult);
	// var annualCostResult = $('.r-annual-costs').text(annualCost);


	//Annual interest
	var purchasePrice = $('#purchase-price').val().replace(/,/g, '');
		var deposit = $('#deposit').val().replace(/,/g, '');
		var loanAmount = $('.loan-amount').html(purchasePrice-deposit);
	var annualInterestVal = $('#annual-interest-rate').val();
	// console.log(loanAmount.html());

	var annualInterestResult  = $('.r-annual-interest').html('$'+(loanAmount.html()*(annualInterestVal/100))*-1);


	//Total expenses
	// var totalExpenses = (annualInterestResult.html()-annualCostResult.html())

});




	


});