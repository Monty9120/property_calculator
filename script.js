$(function(){
	console.log('jquery test')


	$('.currency').mask('000,000,000', {reverse: true});

	$('#purchase-price, #deposit').on('input',function(){
		//Calculate Loan Amount
		var purchasePrice = $('#purchase-price').val().replace(/,/g, '');
		var deposit = $('#deposit').val().replace(/,/g, '');
		var loanAmount = $('.loan-amount').html(purchasePrice-deposit)

});


if($('tr:contains("5")')){
	$(this).addClass('red');
	console.log(this)
}


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

	var propertyMngtVal = $ ('#property-management').val().replace(/,/g, '');

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
			propertyMangtResult = ((annualRent.toFixed(0)*propertyMngtVal)/100)
			propertyMngtCell.text('$'+propertyMangtResult.toFixed(0));
			propertyMngtCell = propertyMngtCell.next();




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
	$('.r-rates-water').html('$'+(+water + +rates));

		//Calculate Increase
		var ratesWaterCell = $('.r-rates-water');
		var ratesWaterValue = (+water + +rates);
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
	var maintenanceCellVal = annualRentVal*(maintenanceValUnder10/100)
	var insuranceCellVal =$('#insurance').val().replace(/,/g, '');
	var ratesCellVal =$('.r-rates-water').html().substring(1);
	var propertyMangCellVal = $('.r-property-mangt').html().substring(1);
	var bodyCorpCell = $('.r-body-corp').html().substring(1);
	var annualCost = parseFloat((+maintenanceCellVal + +insuranceCellVal + +bodyCorpCell + +ratesCellVal + +propertyMangCellVal));
	// console.log('Annual Cost: ' +annualCost)
	// console.log('Insurance Value: ' + insuranceCellVal)
	// console.log('Property Mangt: ' + propertyMangCellVal)
	// console.log('Body Corp: '+bodyCorpCell)
	// console.log('Rates: '+ ratesCellVal)
	// console.log('Maintenance: '+maintenanceCellVal)
	var annualCostResult = $('.r-annual-costs').text(annualCost);


	//Annual interest
	var purchasePrice = $('#purchase-price').val().replace(/,/g, '');
		var deposit = $('#deposit').val().replace(/,/g, '');
		var loanAmount = $('.loan-amount').html(purchasePrice-deposit);
		var loanValue = purchasePrice-deposit;
	var annualInterestVal = $('#annual-interest-rate').val();



	var annualInterestValue=((loanValue*(annualInterestVal/100))*-1).toFixed(0);
	var annualInterestResult  = $('.r-annual-interest').html('$'+(annualInterestValue));
	// var annualInterest = (loanAmount.html()*(annualInterestVal/100)*-1)


	//Total expenses
	var totalExpenses = (annualCost - annualInterestValue)*-1;
	$('.r-total-expenses').html(totalExpenses)


	//Gross Cashflow
	$('.r-gross-cashflow').html(+totalExpenses + +annualRentVal);
	var grossCashflowVal = (+totalExpenses + +annualRentVal)


	//Cattelss Depr
	var chattelsInput = $('#chattels').val().replace(/,/g, '');
	var depreciationRateInput = $('#depreciation-rate').val()/100;
	var chattelsOutput  = (chattelsInput*depreciationRateInput)*-1;
	$('.r-chattels-depr').html(chattelsOutput);


	//Taxable Income
	var taxableIncomeVal = (+totalExpenses + +chattelsOutput + +annualRentVal);
	$('.r-taxable-income').html('$'+ taxableIncomeVal);



	//Tax/rebate
	var marginalTaxRate = $('#marginal-tax-rate').val()/100;

	$('.r-tax-rebate').html(((taxableIncomeVal*marginalTaxRate)*-1).toFixed(0));
	var taxRebateVal = ((taxableIncomeVal*marginalTaxRate)*-1).toFixed(0)

	console.log('cashflow val: '+grossCashflowVal)
	console.log('taxrebate val: '+taxRebateVal)
	//Net Cashflow
	$('.r-net-cashflow').html(+grossCashflowVal + +taxRebateVal);

});




	


});