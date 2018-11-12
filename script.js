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
	var propertyValueValue = parseFloat(propertyValueInput);

		$('.r-property-value').html('$'+(propertyValueValue+=propertyValueValue*capitalGrowth))
	

		//Calculate Increase
		

		while(propertyValueCell.length>0){
			propertyValueValue += propertyValueValue*capitalGrowth;
			propertyValueCell = propertyValueCell.next();
			propertyValueCell.text('$'+propertyValueValue.toFixed(0));
		}





	//Calculate annual rent 
	var purchasePrice = $('#purchase-price').val().replace(/,/g, '');
	var annualVaccancy = $('#annual-vaccancy').val()
	var rentalIncome = $('#rental-income').val().replace(/,/g, '');
	$('.r-annual-rent').html('$'+rentalIncome*(52-annualVaccancy));

	var annualRentCell = $('.r-weekly-rent');


	//Calculate property managemnet
	annualRentVal = $('.r-annual-rent').html().substring(1);

	var propertyMngtVal = $ ('#property-management').val().replace(/,/g, '');

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

			var cellAnualRent = $('.r-annual-rent');
			var maintenanceCell = $('.r-maintenance');

			while(maintenanceCell.length>0){
				var annualRentCellValue = cellAnualRent.html().substring(1);
				var maintenanceResultVal = parseFloat(+annualRentCellValue * (+maintenanceValUnder10/100)).toFixed(0);

				
				maintenanceCell.text('$'+ +maintenanceResultVal);
				maintenanceCell = maintenanceCell.next();
				cellAnualRent = cellAnualRent.next();
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
	var insuranceCellVal = $('#insurance').val().replace(/,/g, '');
	var ratesCellVal = $('.r-rates-water').html().substring(1);
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

	
	//Annual Cost Loop 	-	-	-	-	-	-	-	-	-	-	-	-	
	annualCostResult.next()

	var cellInsurance = $('.r-insurance');
	var cellRates = $('.r-rates-water');
	var cellBodyCorp = $('.r-body-corp');
	var cellPropMan = $('.r-property-mangt');
	var cellMaintenance = $('.r-maintenance');

	var cellAnnualCost= $('.r-annual-costs')


	

	while(cellAnnualCost.length > 0){
		//Define cells
		var insuranceCellVal = +cellInsurance.html().substring(1);
		var ratesCellVal = +cellRates.html().substring(1);
		var bodyCorpCellVal = +cellBodyCorp.html().substring(1);
		var cellPropManVal = +cellPropMan.html().substring(1);
		var cellMaintenanceVal = +cellMaintenance.html().substring(1);

		//Get total
		var total = insuranceCellVal + ratesCellVal +bodyCorpCellVal + cellPropManVal + cellMaintenanceVal;
		cellAnnualCost.html('$'+total);

		//Get values
		cellInsurance = cellInsurance.next();
		cellRates = cellRates.next();
		cellBodyCorp = cellBodyCorp.next();
		cellPropMan = cellPropMan.next();
		cellMaintenance = cellMaintenance.next();

		cellAnnualCost = cellAnnualCost.next();



	}
	// -	-	-	-	-	-	-	-	-	-	-	-	-	-	-	-	-	-

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

		var cellAnnualCost = $('.r-annual-costs');
		var cellTotalExpenses = $('.r-total-expenses');

		while(cellTotalExpenses.length>0){
			var annualCostsCellValue = cellAnnualCost.html().substring(1);
			var totalExpenses = (+annualCostsCellValue - annualInterestValue)*-1;

			cellTotalExpenses.html('$'+totalExpenses);
			cellTotalExpenses = cellTotalExpenses.next();
			cellAnnualCost = cellAnnualCost.next();

		}




	//Gross Cashflow and Taxable Income
	var grossCashflowVal = (+totalExpenses + +annualRentVal);

	//define things you need value of
	var cellAnnualRent = $('.r-annual-rent');
	var cellTotalExpenses2 = $('.r-total-expenses');
	var cellGrossCashflow = $('.r-gross-cashflow');

	var cellTaxableIncome = $('.r-taxable-income');


	while(cellGrossCashflow.length>0){
		//get value of cells
		var annualRentCellValue = cellAnnualRent.html().substring(1);
		var totalExpensesCellValue = cellTotalExpenses2.html().substring(1);
		var taxableIncomeCellValue = cellTaxableIncome.html().substring(1);
	

		var grossCashflowVal = (+totalExpensesCellValue + +annualRentCellValue).toFixed(0);
		var chattelsOutput  = (chattelsInput*depreciationRateInput)*-1;
		
		

		//Gross cashflow html
		cellGrossCashflow.html('$'+grossCashflowVal);
		//TaxableIncome html
		cellTaxableIncome.html('$'+ (+totalExpensesCellValue + +annualRentCellValue + 0).toFixed(0));
	

		cellTotalExpenses2 = cellTotalExpenses2.next();
		cellGrossCashflow = cellGrossCashflow.next();
		cellAnnualRent = cellAnnualRent.next();
		cellTaxableIncome = cellTaxableIncome.next();
	

}

	

var cellTaxRebate = $('.r-tax-rebate')
var cellTaxableIncome = $('.r-taxable-income');


	while (cellTaxRebate.length>0) {
		var taxableIncomeCellValue = cellTaxableIncome.html().substring(1);

		//TaxRebate Calcs
		var taxableIncomeVal = (+totalExpenses + +chattelsOutput + +annualRentVal)
		var marginalTaxRate = $('#marginal-tax-rate').val()/100;
		
		cellTaxRebate.html('$'+((+taxableIncomeCellValue* +marginalTaxRate)*-1).toFixed(0))

		cellTaxableIncome = cellTaxableIncome.next();
		cellTaxRebate = cellTaxRebate.next();


	}

//Net CASHFLow

var cellTaxRebate = $('.r-tax-rebate')
var cellGrossCashflow = $('.r-gross-cashflow');
var cellNetCashflow = $('.r-net-cashflow');

	while (cellTaxRebate.length>0) {
		//Get values of related cells
		var grossCashflowCellValue = cellGrossCashflow.html().substring(1);
		var taxRebateCellValue = cellTaxRebate.html().substring(1);


		
		cellNetCashflow.html('$'+((+grossCashflowCellValue + +taxRebateCellValue)).toFixed(0))

		cellGrossCashflow = cellGrossCashflow.next();
		cellTaxRebate = cellTaxRebate.next();
		cellNetCashflow = cellNetCashflow.next();


	}


//Equity
var cellEquity = $('.r-equity');
var cellPropertyValue = $('.r-property-value');


	while(cellEquity.length>0){

		//Get values of related cells
		var propertyValueCellValue = cellPropertyValue.html().substring(1);
		var loanAmountValue = (purchasePrice-deposit);
		

		cellEquity.html('$'+ +(propertyValueCellValue-loanAmountValue).toFixed(0));


		cellEquity = cellEquity.next();
		cellPropertyValue = cellPropertyValue.next();


	}
	
// Equity Percentage

	
var cellEquity = $('.r-equity');
var cellPropertyValue = $('.r-property-value');
var cellEquityPercent = $('.r-equity-percent');
var cellRoi = $('.r-roi');
var cellNetCashflow = $('.r-net-cashflow');


	while(cellEquity.length>0){

		//Get values of related cells
		var equityCellValue = cellEquity.html().substring(1);
		var propertyValueCellValue = cellPropertyValue.html().substring(1);
		var capitalCosts = $('#capital-costs').val().replace(/,/g, '');
		var netCashflowValue = cellNetCashflow.html().substring(1)

		cellEquityPercent.html(((+equityCellValue/ +propertyValueCellValue)*100).toFixed(2));
		cellRoi.html(((+netCashflowValue + +equityCellValue)/(+deposit + +capitalCosts)-1)*100);




		cellEquity = cellEquity.next();
		cellPropertyValue = cellPropertyValue.next();
		cellEquityPercent = cellEquityPercent.next();
		cellRoi = cellRoi.next();
		cellNetCashflow = cellNetCashflow.next();


	}
	



	//ROI after tax
	// var propertyValueValue = parseFloat(propertyValueInput);
	// var capitalCosts = $('#capital-costs').val().replace(/,/g, '');
	// var roiAfterTax = (((+netCashflowVal + +equityValue)/(+deposit + +capitalCosts) -1) * 100).toFixed(2)
	// $('.r-roi').html(roiAfterTax + '%') ;


	


	//Cattelss Depr
	var chattelsInput = $('#chattels').val().replace(/,/g, '');
	var depreciationRateInput = $('#depreciation-rate').val()/100;
	var chattelsOutput  = (chattelsInput*depreciationRateInput)*-1;
	$('.r-chattels-depr').html(chattelsOutput);


	//Net Cashflow
	// var netCashflow = $('.r-net-cashflow').html(+grossCashflowVal + +taxRebateVal);

	// var netCashflowVal = (+grossCashflowVal + +taxRebateVal)


	//Equity
	// var loanAmountValue = (purchasePrice-deposit)
	// var proeprtyValueInput = $('.r-property-value').html().substring(1);

	// var equityValue = (proeprtyValueInput - loanAmountValue).toFixed(0);
	// $('.r-equity').html(equityValue)

	//Equity %
	// var equityPercentage = ((+equityValue/ +proeprtyValueInput)*100).toFixed(2)
	// $('.r-equity-percent').html(equityPercentage +'%')




	//Return on Capital


	// var returnOnCapital = ((+grossCashflowVal + (+equityValue - (+deposit + +capitalCosts)))/(+deposit + +capitalCosts)*100).toFixed(0);

	// $('.r-return-capital').html(returnOnCapital + '%');










});




	


});