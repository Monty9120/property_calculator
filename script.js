$(function(){
	console.log('jquery test')


	$('.currency').mask('000,000,000', {reverse: true});

	$('#purchase-price, #deposit').on('input',function(){
		//Calculate Loan Amount
		var purchasePrice = $('#purchase-price').val().replace(/,/g, '');
		var deposit = $('#deposit').val().replace(/,/g, '');
		var loanAmount = $('.loan-amount').html(purchasePrice-deposit)

});

// $( window ).scroll(function(){
// 	$('.table-heading').addClass('fixed')
// })
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

		// $('.r-property-value').html(numeral((propertyValueValue+=propertyValueValue*capitalGrowth)).format('$ 0,0[.]00'))
		$('.r-property-value').html((propertyValueValue+=propertyValueValue*capitalGrowth).toFixed(0));
	

		//Calculate Increase
		

		while(propertyValueCell.length>0){
			propertyValueValue += propertyValueValue*capitalGrowth;
			propertyValueCell = propertyValueCell.next();
			propertyValueCell.text((propertyValueValue).toFixed(0));
		}





	//Calculate annual rent 
	var purchasePrice = $('#purchase-price').val().replace(/,/g, '');
	var annualVaccancy = $('#annual-vaccancy').val()
	var rentalIncome = $('#rental-income').val().replace(/,/g, '');
	$('.r-annual-rent').html(+rentalIncome*(52-annualVaccancy));

	var annualRentCell = $('.r-weekly-rent');


	//Calculate property managemnet
	annualRentVal = $('.r-annual-rent').html();

	var propertyMngtVal = $ ('#property-management').val().replace(/,/g, '');

	 $('.r-property-mangt').html(+(annualRentVal*propertyMngtVal)/100);

	 
	 var propertyMangtResult = (annualRentVal*propertyMngtVal)/100



	//Calculate Rental Income
	var rentalIncome = $('#rental-income').val().replace(/,/g, '');
	$('.r-weekly-rent').html(+rentalIncome)
	
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
			weeklyRentCell.text(+weeklyRent.toFixed(0));

			//Annual rent loop
			annualRent = weeklyRent*(52 - annualVaccancy);
			annualRentCell.text(+annualRent.toFixed(0));
			annualRentCell = annualRentCell.next();

			//Property mngt loop
			propertyMangtResult = ((annualRent.toFixed(0)*propertyMngtVal)/100)
			propertyMngtCell.text(+propertyMangtResult.toFixed(0));
			propertyMngtCell = propertyMngtCell.next();




			var maintenanceValUnder10 = parseFloat($('#maintenance-underten').val().replace(/,/g, ''));
			var maintenanceValOver10 = parseFloat($('#maintenance-overten').val().replace(/,/g, ''));

			var cellAnualRent = $('.r-annual-rent');
			var maintenanceCell = $('.r-maintenance');

			while(maintenanceCell.length>0){
				var annualRentCellValue = cellAnualRent.html();
				
				if (maintenanceCell.length>10) {
					var maintenanceResultVal = parseFloat(+annualRentCellValue * (+maintenanceValOver10/100)).toFixed(0);
				}else{
					var maintenanceResultVal = parseFloat(+annualRentCellValue * (+maintenanceValUnder10/100)).toFixed(0);

				}
				
				maintenanceCell.text(+ +maintenanceResultVal);
				maintenanceCell = maintenanceCell.next();
				cellAnualRent = cellAnualRent.next();
			}


		}


	//Calcualte water and rates
	var water = $('#water').val().replace(/,/g, '');
	var rates = $('#rates').val().replace(/,/g, '');
	$('.r-rates-water').html(+(+water + +rates));

		//Calculate Increase
		var ratesWaterCell = $('.r-rates-water');
		var ratesWaterValue = (+water + +rates);
		var costIncreases = $('#cost-increases').val()/100;

		while(ratesWaterCell.next().length>0){
			ratesWaterValue += ratesWaterValue*costIncreases;
			ratesWaterCell = ratesWaterCell.next();
			ratesWaterCell.text(+ratesWaterValue.toFixed(0));
		}



	//Body coroperate
	// var bodyCorpVal = parseFloat($('#body-corporate').val());
	var bodyCorp =parseFloat($('#body-corporate').val().replace(/,/g, ''));
	$('.r-body-corp').text(+bodyCorp);

		//Increase
		var bodyCorpCell = $('.r-body-corp');
		
		console.log(bodyCorp);
			

		while(bodyCorpCell.next().length>0){
				bodyCorp += bodyCorp*costIncreases;
				bodyCorpCell = bodyCorpCell.next();
				bodyCorpCell.text(+bodyCorp.toFixed(0));
		}

	//Insurance Calc
	var insuranceVal =$('#insurance').val().replace(/,/g, '');
	$('.r-insurance').text(+insuranceVal);

	var insuranceVal = parseFloat(insuranceVal);
	var insuranceCell = $('.r-insurance');
		//Calculate Increase
		while(insuranceCell.next().length>0){
			insuranceVal += insuranceVal*costIncreases;
			insuranceCell = insuranceCell.next();
			insuranceCell.text(+insuranceVal.toFixed(0));
		}




	

	// Annual Costs
	var maintenanceCellVal = annualRentVal*(maintenanceValUnder10/100)
	var insuranceCellVal = $('#insurance').val().replace(/,/g, '');
	var ratesCellVal = $('.r-rates-water').html();
	var propertyMangCellVal = $('.r-property-mangt').html();
	var bodyCorpCell = $('.r-body-corp').html();
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
		var insuranceCellVal = +cellInsurance.html();
		var ratesCellVal = +cellRates.html();
		var bodyCorpCellVal = +cellBodyCorp.html();
		var cellPropManVal = +cellPropMan.html();
		var cellMaintenanceVal = +cellMaintenance.html();

		//Get total
		var total = insuranceCellVal + ratesCellVal +bodyCorpCellVal + cellPropManVal + cellMaintenanceVal;
		cellAnnualCost.html(+total);

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
	var annualInterestResult  = $('.r-annual-interest').html(+(annualInterestValue));
	// var annualInterest = (loanAmount.html()*(annualInterestVal/100)*-1)







	//Total expenses
	var totalExpenses = (annualCost - annualInterestValue)*-1;
	$('.r-total-expenses').html(totalExpenses)

		var cellAnnualCost = $('.r-annual-costs');
		var cellTotalExpenses = $('.r-total-expenses');

		while(cellTotalExpenses.length>0){
			var annualCostsCellValue = cellAnnualCost.html();
			var totalExpenses = (+annualCostsCellValue - annualInterestValue)*-1;

			cellTotalExpenses.html(+totalExpenses);
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
		var annualRentCellValue = cellAnnualRent.html();
		var totalExpensesCellValue = cellTotalExpenses2.html();
		var taxableIncomeCellValue = cellTaxableIncome.html();
	

		var grossCashflowVal = (+totalExpensesCellValue + +annualRentCellValue).toFixed(0);
		var chattelsOutput  = (chattelsInput*depreciationRateInput)*-1;
		
		

		//Gross cashflow html
		cellGrossCashflow.html(+grossCashflowVal);
		//TaxableIncome html
		cellTaxableIncome.html(+ (+totalExpensesCellValue + +annualRentCellValue + 0).toFixed(0));
	

		cellTotalExpenses2 = cellTotalExpenses2.next();
		cellGrossCashflow = cellGrossCashflow.next();
		cellAnnualRent = cellAnnualRent.next();
		cellTaxableIncome = cellTaxableIncome.next();
	

}

	

var cellTaxRebate = $('.r-tax-rebate')
var cellTaxableIncome = $('.r-taxable-income');


	while (cellTaxRebate.length>0) {
		var taxableIncomeCellValue = cellTaxableIncome.html();

		//TaxRebate Calcs
		var taxableIncomeVal = (+totalExpenses + +chattelsOutput + +annualRentVal)
		var marginalTaxRate = $('#marginal-tax-rate').val()/100;
		
		cellTaxRebate.html(+((+taxableIncomeCellValue* +marginalTaxRate)*-1).toFixed(0))

		cellTaxableIncome = cellTaxableIncome.next();
		cellTaxRebate = cellTaxRebate.next();


	}

//Net Cashflow

var cellTaxRebate = $('.r-tax-rebate')
var cellGrossCashflow = $('.r-gross-cashflow');
var cellNetCashflow = $('.r-net-cashflow');

	while (cellTaxRebate.length>0) {
		//Get values of related cells
		var grossCashflowCellValue = cellGrossCashflow.html();
		var taxRebateCellValue = cellTaxRebate.html();


		
		cellNetCashflow.html(+((+grossCashflowCellValue + +taxRebateCellValue)).toFixed(0))

		cellGrossCashflow = cellGrossCashflow.next();
		cellTaxRebate = cellTaxRebate.next();
		cellNetCashflow = cellNetCashflow.next();


	}


//Equity
var cellEquity = $('.r-equity');
var cellPropertyValue = $('.r-property-value');


	while(cellEquity.length>0){

		//Get values of related cells
		var propertyValueCellValue = cellPropertyValue.html();
		var loanAmountValue = (purchasePrice-deposit);

		cellEquity.html(+ +(propertyValueCellValue-loanAmountValue).toFixed(0));


		cellEquity = cellEquity.next();
		cellPropertyValue = cellPropertyValue.next();


	}
	
// Equity Percentage and ROI

	
var cellEquity = $('.r-equity');
var prevCellEquity = $('.r-equity').prev();
var cellPropertyValue = $('.r-property-value');
var cellEquityPercent = $('.r-equity-percent');
var cellRoi = $('.r-roi');
var cellNetCashflow = $('.r-net-cashflow');


	while(cellEquity.length>0){

		//Get values of related cells
		var equityCellValue = cellEquity.html();
		var propertyValueCellValue = cellPropertyValue.html();
		var capitalCosts = $('#capital-costs').val().replace(/,/g, '');
		var netCashflowValue = cellNetCashflow.html();
		var prevCellEquityValue = prevCellEquity.html();

		cellEquityPercent.html(((+equityCellValue/ +propertyValueCellValue)*100).toFixed(2)+'%');


		cellRoi.html(((((+equityCellValue + +netCashflowValue) / +prevCellEquityValue)-1)*100).toFixed(2)+'%');





		cellEquity = cellEquity.next();
		cellPropertyValue = cellPropertyValue.next();
		cellEquityPercent = cellEquityPercent.next();
		cellRoi = cellRoi.next();
		cellNetCashflow = cellNetCashflow.next();
		prevCellEquity = prevCellEquity.next();


	}


	// Return on Capital sum-	-	-	-	-	-


	var cellSum = $('.r-return-capital-sum');
	cellGrossCash = $('.r-gross-cashflow');
	//var deposit
	var sum = 0;
	while(cellSum.length>0){

		var equityCellValue = cellGrossCash.html();

		sum += parseFloat(equityCellValue);
		cellSum.html(sum);

		cellSum = cellSum.next();
		cellGrossCash = cellGrossCash.next()
	
	}
	
	// Return on Capital -	-	-	-	-	-

	
	var cellEquity = $('.r-equity');
	var cellGrossCashflow = $('.r-gross-cashflow');
	var cellReturnCapital = $('.r-return-capital');
	var cellSum = $('.r-return-capital-sum');
	//var deposit
	while(cellReturnCapital.length>0){
		var capitalCosts = $('#capital-costs').val().replace(/,/g, '');
		var equityCellValue = cellEquity.html();
		var grossCashflowCellValue = cellGrossCashflow.html();
		var nextgrossCashFlow = cellGrossCashflow.next().html();
		var cellSumValue = cellSum.html();


		cellReturnCapital.html(((+cellSumValue+(+equityCellValue - (+capitalCosts + +deposit)))/(+capitalCosts + +deposit)*100).toFixed(0)+'%');


		cellSum = cellSum.next();
		cellEquity = cellEquity.next();
		cellGrossCashflow = cellGrossCashflow.next();
		cellReturnCapital = cellReturnCapital.next();
		
	}



	//Cattelss Depr
	var chattelsInput = $('#chattels').val().replace(/,/g, '');
	var depreciationRateInput = $('#depreciation-rate').val()/100;
	var chattelsOutput  = (chattelsInput*depreciationRateInput)*-1;
	$('.r-chattels-depr').html(chattelsOutput);






 var paymentsPerYear = 26;
 var loanTerm = $('#loan-term').val()
 var paymentsLoan = parseFloat(paymentsPerYear * +loanTerm);

 var interestRate = annualInterestVal/100;
 console.log(interestRate)
 var interestRateFn = ((Math.pow(1+interestRate,1/26)-1) *100).toFixed(2);

console.log('Hi');
console.log(interestRateFn)





//PMT
function pmt(rate, nper, pv, fv, type) {
	if (!fv) fv = 0;
	if (!type) type = 0;

	if (rate == 0) return -(pv + fv)/nper;
	
	var pvif = Math.pow(1 + rate, nper);
	var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

	if (type == 1) {
		pmt /= (1 + rate);
	};

	return pmt;
}

function PMT(ir, np, pv, fv, type) {
    /*
     * ir   - interest rate per month
     * np   - number of periods (months)
     * pv   - present value
     * fv   - future value
     * type - when the payments are due:
     *        0: end of the period, e.g. end of month (default)
     *        1: beginning of period
     */
    var pmt, pvif;

    fv || (fv = 0);
    type || (type = 0);

    if (ir === 0)
        return -(pv + fv)/np;

    pvif = Math.pow(1 + ir, np);
    pmt = - ir * pv * (pvif + fv) / (pvif - 1);

    if (type === 1)
        pmt /= (1 + ir);

    return pmt;
}

//IPMT
function IPMT (pv, pmt, rate, per) {
    var tmp = Math.pow(1 + rate, per);
    return 0 - (pv * tmp * rate + pmt * (tmp - 1));
}
//PPMT
function PPMT (rate, per, nper, pv, fv, type) {
    if (per < 1 || (per >= nper + 1)) return null;
    var pmt = this.PMT(rate, nper, pv, fv, type);
    var ipmt = this.IPMT(pv, pmt, rate, per - 1);
    return pmt - ipmt;
}

console.log('rate:' + interestRateFn)
console.log('loan: ' + loanAmountValue)
console.log('payments loan ' +paymentsLoan)
var pmt = ((PMT((Math.pow(1+interestRate,1/26)-1), +paymentsLoan , +loanAmountValue,0,0)).toFixed(2));
console.log('pmt: ' + pmt)
var ipmt = (IPMT(+loanAmountValue, pmt, (Math.pow(1+interestRate,1/26)-1), 0)).toFixed(2);
console.log('ipmt: ' + ipmt)

console.log('ppmt: ' + (PPMT((Math.pow(1+interestRate,1/26)-1),1,+paymentsLoan,+loanAmountValue,0,0)))



});



//default test:
$('#property-value').val('200,000');
$('#purchase-price').val('200,000');
$('#deposit').val('80,000');
$('#capital-costs').val('0');
$('#rates').val('800');
$('#body-corporate').val('0');
$('#insurance').val('300');
$('#maintenance-underten').val('5');
$('#water').val('0');
$('#annual-interest-rate').val('7');

$('#loan-term').val('25');
$('#rental-income').val('300');
$('#property-management').val('8.5');
$('#annual-vaccancy').val('2');
$('#chattels').val('0');
$('#depreciation-rate').val('18');
$('#capital-growth').val('4.6');
$('#rental-increase').val('3');
$('#cost-increases').val('3');
$('#marginal-tax-rate').val('30');








});



