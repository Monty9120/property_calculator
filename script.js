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
	annualRentVal = $('.r-annual-rent').html().substring(1);

	var propertyMngtVal = $ ('#property-management').val();

	// var testSum = (parseFloat(annualRentVal)*parseFloat(propertyMangt));
	 $('.r-property-mangt').html('$'+(annualRentVal*propertyMngtVal)/100);

	 
	 var propertyMangtResult = (annualRentVal*propertyMngtVal)/100



	//Calculate Rental Income
	var rentalIncome = $('#rental-income').val().replace(/,/g, '');
	$('.r-weekly-rent').html('$'+rentalIncome)
	
		// Calculate rental increase
		var weeklyRentCell = $('.r-weekly-rent');
		var weeklyRent = parseFloat($('#rental-income').val().replace(/,/g, ''));
		var rentalIncrease = $('#rental-increase').val()/100;

		//Annual Rent
		var annualRentCell = $('.r-annual-rent').next();
		var annualRent = 0;

		//Property Management
		var propertyMngtCell = $('.r-property-mangt').next();
		// var propertyMngt = 0;

		while(weeklyRentCell.next().length>0){
			weeklyRent += weeklyRent*rentalIncrease;
			weeklyRentCell = weeklyRentCell.next();
			weeklyRentCell.text('$'+weeklyRent.toFixed(0));

			//Annual rent loop
			annualRent = weeklyRent*(52 - annualVaccancy);
			annualRentCell.text('$'+annualRent.toFixed(0));
			annualRentCell = annualRentCell.next();

			//Property mngt loop
			propertyMangtResult = (annualRent*propertyMngtVal)/100
			propertyMngtCell.text('$'+propertyMangtResult.toFixed(0));
			propertyMngtCell = propertyMngtCell.next();



			//Maintenance CHANGE TO NUMVBERS NOT STRING
			var maintenanceValUnder10 = parseFloat($('#maintenance-underten').val().replace(/,/g, ''));

			var maintenanceResult = $('.r-maintenance').text('$'+annualRentVal*(maintenanceValUnder10/100));
			var maintenanceResultVal = annualRentVal*(maintenanceValUnder10/100);
			var maintenanceCell = $('.r-maintenance');

			console.log(maintenanceResultVal);


			// console.log(annualRentVal*(maintenanceValUnder10/100))

			while(maintenanceCell.next().length>0){
				maintenanceResultVal += parseFloat(annualRent*maintenanceValUnder10);
				maintenanceCell = maintenanceCell.next();
				maintenanceCell.text('$'+maintenanceResultVal);
			}


		}

	

	//Calcualte water and rates
	var water = $('#water').val().replace(/,/g, '');
	var rates = $('#rates').val().replace(/,/g, '');
	var ratesWaterValue= $('.r-rates-water').html('$'+(+water + +rates));

		//Calculate Increase
		var ratesWaterCell = $('.r-rates-water');
		var ratesWaterValue = parseFloat(+water + +rates);
		var costIncreases = $('#cost-increases').val()/100;

		while(ratesWaterCell.next().length>0){
			ratesWaterValue += ratesWaterValue*costIncreases;
			ratesWaterCell = ratesWaterCell.next();
			ratesWaterCell.text('$'+ratesWaterValue.toFixed(0));
		}



	//Body coroperate
	// var bodyCorpVal = parseFloat($('#body-corporate').val());
	var bodyCorp =parseFloat($('#body-corporate').val().replace(/,/g, ''));
	$('.r-body-corp').text('$'+bodyCorp);

		//Increase
		var bodyCorpCell = $('.r-body-corp');
		
		console.log(bodyCorp);
			

		while(bodyCorpCell.next().length>0){
				bodyCorp += bodyCorp*costIncreases;
				bodyCorpCell = bodyCorpCell.next();
				bodyCorpCell.text('$'+bodyCorp.toFixed(0));
		}

	//Insurance Calc
	var insuranceVal =$('#insurance').val().replace(/,/g, '');
	$('.r-insurance').text('$'+insuranceVal);

	var insuranceVal = parseFloat(insuranceVal);
	var insuranceCell = $('.r-insurance');
		//Calculate Increase
		while(insuranceCell.next().length>0){
			insuranceVal += insuranceVal*costIncreases;
			insuranceCell = insuranceCell.next();
			insuranceCell.text('$'+insuranceVal.toFixed(0));
		}


	

	// Annual Costs
	var maintenanceVal = annualRentVal*(maintenanceValUnder10/100)
	var annualCost = parseFloat((+maintenanceVal + +insuranceVal + +bodyCorp + +ratesWaterValue + +propertyMangtResult.toFixed(0))).toFixed(0);
	// console.log('Annual Cost: ' +annualCost)
	// console.log('Insurance Value: ' + insuranceVal)
	// console.log('Property Mangt: ' + propertyMangtResult.toFixed(0))
	// console.log('Body Corp: '+bodyCorp)
	// console.log('Rates: '+ ratesWaterValue)
	// console.log('Maintenance: '+maintenanceVal)
	var annualCostResult = $('.r-annual-costs').text(annualCost);


	//Annual interest
	var purchasePrice = $('#purchase-price').val().replace(/,/g, '');
		var deposit = $('#deposit').val().replace(/,/g, '');
		var loanAmount = $('.loan-amount').html(purchasePrice-deposit);
	var annualInterestVal = $('#annual-interest-rate').val();
	// console.log(loanAmount.html());

	var annualInterestResult  = $('.r-annual-interest').html('$'+(loanAmount.html()*(annualInterestVal/100))*-1);
	var annualInterest = (loanAmount.html()*(annualInterestVal/100)*-1)

	//Total expenses
	var totalExpenses = (annualCost - annualInterest)*-1;
	console.log(totalExpenses)

	//Gross Cashflow
	$('.r-gross-cashflow').html(+totalExpenses + +annualRentVal);

});




	


});