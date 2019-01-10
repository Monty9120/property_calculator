$(function() {



    $('.currency').mask('000,000,000', {
        reverse: true
    });

    $('#purchase-price, #deposit').on('input', function() {
        //Calculate Loan Amount
        var purchasePrice = $('#purchase-price').val().replace(/,/g, '');
        var deposit = $('#deposit').val().replace(/,/g, '');
        var loanAmount = $('.loan-amount').html(purchasePrice - deposit)

    });


    $('#refresh').on('click', function() {
        var address = $('#address').val();
        $('.address-output').html(address);



        //Caclulate Property Value

        var propertyValueCell = $('.r-property-value');
        var capitalGrowth = $('#capital-growth').val() / 100;
        var propertyValueInput = $('#property-value').val().replace(/,/g, '');
        var propertyValueValue = parseFloat(propertyValueInput);

        // $('.r-property-value').html(numeral((propertyValueValue+=propertyValueValue*capitalGrowth)).format('$ 0,0[.]00'))
        $('.r-property-value').html((propertyValueValue += propertyValueValue * capitalGrowth).toFixed(0));


        //Calculate Increase
        while (propertyValueCell.length > 0) {
            propertyValueValue += propertyValueValue * capitalGrowth;
            propertyValueCell = propertyValueCell.next();
            propertyValueCell.text((propertyValueValue).toFixed(0));
        }

        //Calculate annual rent 
        var purchasePrice = $('#purchase-price').val().replace(/,/g, '');
        var annualVaccancy = $('#annual-vaccancy').val()
        var rentalIncome = $('#rental-income').val().replace(/,/g, '');
        $('.r-annual-rent').html(+rentalIncome * (52 - annualVaccancy));

        var annualRentCell = $('.r-weekly-rent');


        //Calculate property managemnet
        annualRentVal = $('.r-annual-rent').html();

        var propertyMngtVal = $('#property-management').val().replace(/,/g, '');

        $('.r-property-mangt').html(+(annualRentVal * propertyMngtVal) / 100);


        var propertyMangtResult = (annualRentVal * propertyMngtVal) / 100



        //Calculate Rental Income
        var rentalIncome = $('#rental-income').val().replace(/,/g, '');
        $('.r-weekly-rent').html(+rentalIncome)

        // Calculate rental increase
        var weeklyRentCell = $('.r-weekly-rent');
        var weeklyRent = parseFloat($('#rental-income').val().replace(/,/g, ''));
        var rentalIncrease = $('#rental-increase').val() / 100;

        //Annual Rent
        var annualRentCell = $('.r-annual-rent').next();
        var annualRent = 0;

        //Property Management
        var propertyMngtCell = $('.r-property-mangt').next();
        // var propertyMngt = 0;

        while (weeklyRentCell.next().length > 0) {
            weeklyRent += weeklyRent * rentalIncrease;
            weeklyRentCell = weeklyRentCell.next();
            weeklyRentCell.text(+weeklyRent.toFixed(0));

            //Annual rent loop
            annualRent = weeklyRent * (52 - annualVaccancy);
            annualRentCell.text(+annualRent.toFixed(0));
            annualRentCell = annualRentCell.next();

            //Property mngt loop
            propertyMangtResult = ((annualRent.toFixed(0) * propertyMngtVal) / 100)
            propertyMngtCell.text(+propertyMangtResult.toFixed(0));
            propertyMngtCell = propertyMngtCell.next();




            var maintenanceValUnder10 = parseFloat($('#maintenance-underten').val().replace(/,/g, ''));
            var maintenanceValOver10 = parseFloat($('#maintenance-overten').val().replace(/,/g, ''));

            var cellAnualRent = $('.r-annual-rent');
            var maintenanceCell = $('.r-maintenance');
            var overTenCell = $('.overten')

            while (maintenanceCell.length > 0) {
                var annualRentCellValue = cellAnualRent.html();
   
                if (maintenanceCell.hasClass('overten')) {
                    var maintenanceResultValOver = parseFloat(+annualRentCellValue * (+maintenanceValOver10 / 100)).toFixed(0);
                    maintenanceCell.text(+ +maintenanceResultValOver);
                } else {
                    var maintenanceResultValUnder = parseFloat(+annualRentCellValue * (+maintenanceValUnder10 / 100)).toFixed(0);
                    maintenanceCell.text(+ +maintenanceResultValUnder);
                }

                
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
        var costIncreases = $('#cost-increases').val() / 100;

        while (ratesWaterCell.next().length > 0) {
            ratesWaterValue += ratesWaterValue * costIncreases;
            ratesWaterCell = ratesWaterCell.next();
            ratesWaterCell.text(+ratesWaterValue.toFixed(0));
        }



        //Body coroperate
        // var bodyCorpVal = parseFloat($('#body-corporate').val());
        var bodyCorp = parseFloat($('#body-corporate').val().replace(/,/g, ''));
        $('.r-body-corp').text(+bodyCorp);

        //Increase
        var bodyCorpCell = $('.r-body-corp');




        while (bodyCorpCell.next().length > 0) {
            bodyCorp += bodyCorp * costIncreases;
            bodyCorpCell = bodyCorpCell.next();
            bodyCorpCell.text(+bodyCorp.toFixed(0));
        }

        //Insurance Calc
        var insuranceVal = $('#insurance').val().replace(/,/g, '');
        $('.r-insurance').text(+insuranceVal);

        var insuranceVal = parseFloat(insuranceVal);
        var insuranceCell = $('.r-insurance');
        //Calculate Increase
        while (insuranceCell.next().length > 0) {
            insuranceVal += insuranceVal * costIncreases;
            insuranceCell = insuranceCell.next();
            insuranceCell.text(+insuranceVal.toFixed(0));
        }




        // Annual Costs
        var maintenanceCellVal = annualRentVal * (maintenanceValUnder10 / 100)
        var insuranceCellVal = $('#insurance').val().replace(/,/g, '');
        var ratesCellVal = $('.r-rates-water').html();
        var propertyMangCellVal = $('.r-property-mangt').html();
        var bodyCorpCell = $('.r-body-corp').html();
        var annualCost = parseFloat((+maintenanceCellVal + +insuranceCellVal + +bodyCorpCell + +ratesCellVal + +propertyMangCellVal));




        var annualCostResult = $('.r-annual-costs').text(annualCost);


        //Annual Cost Loop 	-	-	-	-	-	-	-	-	-	-	-	-	
        annualCostResult.next()

        var cellInsurance = $('.r-insurance');
        var cellRates = $('.r-rates-water');
        var cellBodyCorp = $('.r-body-corp');
        var cellPropMan = $('.r-property-mangt');
        var cellMaintenance = $('.r-maintenance');

        var cellAnnualCost = $('.r-annual-costs')




        while (cellAnnualCost.length > 0) {
            //Define cells
            var insuranceCellVal = +cellInsurance.html();
            var ratesCellVal = +cellRates.html();
            var bodyCorpCellVal = +cellBodyCorp.html();
            var cellPropManVal = +cellPropMan.html();
            var cellMaintenanceVal = +cellMaintenance.html();

            //Get total
            var total = insuranceCellVal + ratesCellVal + bodyCorpCellVal + cellPropManVal + cellMaintenanceVal;
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
        var loanAmount = $('.loan-amount').html(purchasePrice - deposit);
        var loanValue = purchasePrice - deposit;
        var annualInterestVal = $('#annual-interest-rate').val();



        var annualInterestValue = ((loanValue * (annualInterestVal / 100)) * -1).toFixed(0);
        var annualInterestResult = $('.r-annual-interest').html(+(annualInterestValue));
        // var annualInterest = (loanAmount.html()*(annualInterestVal/100)*-1)




        //Total expenses
        var totalExpenses = (annualCost - annualInterestValue) * -1;
        $('.r-total-expenses').html(totalExpenses)

        var cellAnnualCost = $('.r-annual-costs');
        var cellTotalExpenses = $('.r-total-expenses');

        while (cellTotalExpenses.length > 0) {
            var annualCostsCellValue = cellAnnualCost.html();
            var totalExpenses = (+annualCostsCellValue - annualInterestValue) * -1;

            cellTotalExpenses.html(+totalExpenses);
            cellTotalExpenses = cellTotalExpenses.next();
            cellAnnualCost = cellAnnualCost.next();

        }


        //Chattelss Depr
        var chattelsInput = $('#chattels').val().replace(/,/g, '');
        var depreciationRateInput = $('#depreciation-rate').val() / 100;
        var chattelsOutput = (chattelsInput * depreciationRateInput) * -1;


        // $('.r-chattels-depr').html(chattelsOutput);
        $('.r-depr-rem').html(+chattelsInput + +chattelsOutput);

        //Get cells
        var cellChattels = $('.r-chattels-depr');
        var cellDep = $('.r-depr-rem');


        var currentChattelsValue = chattelsInput;

        while (cellChattels.length > 0) {

            cellChattels.html(chattelsOutput);

            currentChattelsValue = +currentChattelsValue + chattelsOutput;

            cellDep.html(currentChattelsValue);

            chattelsOutput = -(depreciationRateInput * +currentChattelsValue).toFixed(0);

            cellChattels = cellChattels.next();
            cellDep = cellDep.next();

        }




        //Gross Cashflow and Taxable Income
        var grossCashflowVal = (+totalExpenses + +annualRentVal);

        //define things you need value of
        var cellAnnualRent = $('.r-annual-rent');
        var cellTotalExpenses2 = $('.r-total-expenses');
        var cellGrossCashflow = $('.r-gross-cashflow');

        var cellTaxableIncome = $('.r-taxable-income');
        var cellChattels = $('.r-chattels-depr')

        while (cellGrossCashflow.length > 0) {
            //get value of cells
            var annualRentCellValue = cellAnnualRent.html();
            var totalExpensesCellValue = cellTotalExpenses2.html();
            var taxableIncomeCellValue = cellTaxableIncome.html();
            var cellChattelsValue = cellChattels.html();


            var grossCashflowVal = (+totalExpensesCellValue + +annualRentCellValue).toFixed(0);
            var chattelsOutput = (chattelsInput * depreciationRateInput) * -1;



            //Gross cashflow html
            cellGrossCashflow.html(+grossCashflowVal);
            //TaxableIncome html
            cellTaxableIncome.html(+(+totalExpensesCellValue + +annualRentCellValue + +cellChattelsValue).toFixed(0));


            cellTotalExpenses2 = cellTotalExpenses2.next();
            cellGrossCashflow = cellGrossCashflow.next();
            cellAnnualRent = cellAnnualRent.next();
            cellTaxableIncome = cellTaxableIncome.next();
            cellChattels = cellChattels.next();


        }


        //Tax/Rebate
        var cellTaxRebate = $('.r-tax-rebate')
        var cellTaxableIncome = $('.r-taxable-income');


        while (cellTaxRebate.length > 0) {
            var taxableIncomeCellValue = cellTaxableIncome.html();

            //TaxRebate Calcs
            var taxableIncomeVal = (+totalExpenses + +chattelsOutput + +annualRentVal)
            var marginalTaxRate = $('#marginal-tax-rate').val() / 100;

            cellTaxRebate.html(+((+taxableIncomeCellValue * +marginalTaxRate) * -1).toFixed(0))

            cellTaxableIncome = cellTaxableIncome.next();
            cellTaxRebate = cellTaxRebate.next();


        }

        //Net Cashflow

        var cellTaxRebate = $('.r-tax-rebate')
        var cellGrossCashflow = $('.r-gross-cashflow');
        var cellNetCashflow = $('.r-net-cashflow');

        while (cellTaxRebate.length > 0) {
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


        while (cellEquity.length > 0) {

            //Get values of related cells
            var propertyValueCellValue = cellPropertyValue.html();
            var loanAmountValue = (purchasePrice - deposit);

            cellEquity.html(+ +(propertyValueCellValue - loanAmountValue).toFixed(0));


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


        var equityCellValue = cellEquity.html();
        var propertyValueCellValue = cellPropertyValue.html();
        var capitalCosts = $('#capital-costs').val().replace(/,/g, '');
        var netCashflowValue = cellNetCashflow.html();
        var prevCellEquityValue = prevCellEquity.html();


        var roiFirstSum = ((((+equityCellValue + +netCashflowValue) / (+deposit + +capitalCosts) - 1) * 100).toFixed(2) + '%');


        while (cellEquity.length > 0) {

            //Get values of related cells
            var equityCellValue = cellEquity.html();
            var propertyValueCellValue = cellPropertyValue.html();
            var capitalCosts = $('#capital-costs').val().replace(/,/g, '');
            var netCashflowValue = cellNetCashflow.html();
            var prevCellEquityValue = prevCellEquity.html();




            cellRoi.html(((((+equityCellValue + +netCashflowValue) / +prevCellEquityValue) - 1) * 100).toFixed(2) + '%');

            cellEquityPercent.html(((+equityCellValue / +propertyValueCellValue) * 100).toFixed(2) + '%');



            cellEquity = cellEquity.next();
            cellPropertyValue = cellPropertyValue.next();
            cellEquityPercent = cellEquityPercent.next();
            cellRoi = cellRoi.next();
            cellNetCashflow = cellNetCashflow.next();
            prevCellEquity = prevCellEquity.next();


        }
        $('.r-roi').html(roiFirstSum);

        // Return on Capital sum-	-	-	-	-	-
        var cellSum = $('.r-return-capital-sum');
        cellGrossCash = $('.r-gross-cashflow');
        //var deposit
        var sum = 0;
        while (cellSum.length > 0) {

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
        while (cellReturnCapital.length > 0) {
            var capitalCosts = $('#capital-costs').val().replace(/,/g, '');
            var equityCellValue = cellEquity.html();
            var grossCashflowCellValue = cellGrossCashflow.html();
            var nextgrossCashFlow = cellGrossCashflow.next().html();
            var cellSumValue = cellSum.html();


            cellReturnCapital.html(((+cellSumValue + (+equityCellValue - (+capitalCosts + +deposit))) / (+capitalCosts + +deposit) * 100).toFixed(0) + '%');


            cellSum = cellSum.next();
            cellEquity = cellEquity.next();
            cellGrossCashflow = cellGrossCashflow.next();
            cellReturnCapital = cellReturnCapital.next();

        }




        var paymentsPerYear = 26;
        var loanTerm = $('#loan-term').val()
        var paymentsLoan = parseFloat(paymentsPerYear * +loanTerm);

        var interestRate = annualInterestVal / 100;

        var interestRateFn = ((Math.pow(1 + interestRate, 1 / 26) - 1) * 100).toFixed(2);




        // PRINCIPAL SCENARIO -	-	-	-	-	-	-	-	-	-	-	-	-	-	-	-
        //PMT
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
                return -(pv + fv) / np;

            pvif = Math.pow(1 + ir, np);
            pmt = -ir * pv * (pvif + fv) / (pvif - 1);

            if (type === 1)
                pmt /= (1 + ir);

            return pmt;
        }

        //IPMT
        function IPMT(pv, pmt, rate, per) {
            var tmp = Math.pow(1 + rate, per);
            return 0 - (pv * tmp * rate + pmt * (tmp - 1));
        }
        //PPMT
        function PPMT(rate, per, nper, pv, fv, type) {
            if (per < 1 || (per >= nper + 1)) return null;
            var pmt = PMT(rate, nper, pv, fv, type);
            var ipmt = IPMT(pv, pmt, rate, per - 1);
            return pmt - ipmt;
        }

        var pmt = (PMT((Math.pow(1 + interestRate, 1 / 26) - 1), +paymentsLoan, +loanAmountValue, 0, 0)).toFixed(2);
        var ipmt = (IPMT(+loanAmountValue, pmt, (Math.pow(1 + interestRate, 1 / 26) - 1), 1)).toFixed(2);
        var ppmt = (PPMT((Math.pow(1 + interestRate, 1 / 26) - 1), 1, +paymentsLoan, +loanAmountValue, 0, 0))



        //Get Annual Interest and Principal Raw Data. Loop through raw data and get sum.
        var fortnight = 0;
        var fortnight2 = 1;
        var cellInt = $('.r-raw-int');

        var cellPrincipal = $('.r-raw-principal')

        cellPrincipal.html('1');

        var annualInterest2Sum = 0;
        var principal2Sum = 0;
        while (cellInt.length > 0) {
            var ipmt = (IPMT(+loanAmountValue, pmt, (Math.pow(1 + interestRate, 1 / 26) - 1), fortnight)).toFixed(2);
            var ppmt = (PPMT((Math.pow(1 + interestRate, 1 / 26) - 1), fortnight2, +paymentsLoan, +loanAmountValue, 0, 0))

            cellInt.html(ipmt);
            cellPrincipal.html(ppmt);

            fortnight = fortnight + 1;
            fortnight2 = fortnight2 + 1;

            annualInterest2Sum += +ipmt;
            principal2Sum += +ppmt;

            cellInt = cellInt.next();
            cellPrincipal = cellPrincipal.next();

        }
        $('.r-annual-interest2').html(annualInterest2Sum.toFixed(0));
        $('.r-principal').html(principal2Sum.toFixed(0));


        ///sum 26 thingy ANNUAL INTEREST
        var annualInterst2 = $('.r-annual-interest2');
        var rawData = $('.rawdata>td').not('.table-heading');


        var outerIndex = 0;
        while (annualInterst2.length > 0) {
            var sum26 = 0;

            var start = outerIndex * 26;
            var end = start + 25;
            outerIndex++;
            for (var i = start; i <= end; i++) {
                sum26 += parseFloat(rawData[i].innerHTML);
            }

            annualInterst2.html(sum26.toFixed(0));
            annualInterst2 = annualInterst2.next();

        }

        ///sum 26 thingy PRINICPAL
        var prinicpal2 = $('.r-principal2');
        var rawData = $('.rawdata-principal>td').not('.table-heading');


        var outerIndex = 0;
        while (prinicpal2.length > 0) {
            var sum26 = 0;

            var start = outerIndex * 26;
            var end = start + 25;
            outerIndex++;
            for (var i = start; i <= end; i++) {
                sum26 += parseFloat(rawData[i].innerHTML);
            }

            prinicpal2.html(sum26.toFixed(0));
            prinicpal2 = prinicpal2.next();

        }



        ///---------------------

        var loanCell = $('.r-loan-balance').next();
        var prevLoanCell = loanCell.prev();
        var principalCell = $('.r-principal2');
        var principalValue = principalCell.html()

        var pLoanBalance = (+loanValue + +principalValue);
        $('.r-loan-balance').html(pLoanBalance)




        while (principalCell.length > 0) {

            var loanPrevValue = prevLoanCell.html();
            var principalValue = principalCell.next().html();

            loanCell.html((+loanPrevValue + +principalValue).toFixed(0))

            loanCell = loanCell.next();
            principalCell = principalCell.next();
            prevLoanCell = prevLoanCell.next();
        }


        //P Total Expenses 
        var principalValue = principalCell.html();
        var pTotalExpenses = (+principal2Sum + +annualInterest2Sum - +annualCost).toFixed(0)
        $('.r-total-expenses2').html(pTotalExpenses);


        //prinicpal + annual interest - annualcosts
        var cellTotalExpenses = $('.r-total-expenses2');
        //Cells we need value of
        var cellAnnualCost = $('.r-annual-costs');
        var principalCell = $('.r-principal2');
        var annualInterst2 = $('.r-annual-interest2');


        while (cellTotalExpenses.length > 0) {
            //values
            var annualCostVal = cellAnnualCost.text();
            var principalVal = principalCell.text();
            var annualInterestVal = annualInterst2.text();


            sum = (+principalVal + +annualInterestVal - +annualCostVal);
            cellTotalExpenses.html(sum);

            //Move cells accross
            cellTotalExpenses = cellTotalExpenses.next();
            cellAnnualCost = cellAnnualCost.next();
            principalCell = principalCell.next();
            annualInterst2 = annualInterst2.next();

        }


        //P Gross Cashflow 
        var pGrossCashflow = (+pTotalExpenses + +annualRentVal)
        $('.r-gross-cashflow2').html(pGrossCashflow);

        //Gross Cashflow and Taxable Income
        var grossCashflowVal = (+totalExpenses + +annualRentVal);

        //define things you need value of
        var cellAnnualRent = $('.r-annual-rent');
        var cellTotalExpenses2 = $('.r-total-expenses2');
        var cellGrossCashflow = $('.r-gross-cashflow2');



        while (cellGrossCashflow.length > 0) {
            //get value of cells
            var annualRentCellValue = cellAnnualRent.html();
            var totalExpensesCellValue = cellTotalExpenses2.html();


            var grossCashflowVal = (+totalExpensesCellValue + +annualRentCellValue).toFixed(0);
            var chattelsOutput = (chattelsInput * depreciationRateInput) * -1;

            //Gross cashflow html
            cellGrossCashflow.html(+grossCashflowVal);


            cellTotalExpenses2 = cellTotalExpenses2.next();
            cellGrossCashflow = cellGrossCashflow.next();
            cellAnnualRent = cellAnnualRent.next();


        }



        //P Taxable Income 
        var cellTaxableIncome2 = $('.r-taxable-income2');
        //define things you need value of
        var cellAnnualRent = $('.r-annual-rent');
        var cellAnnualCost = $('.r-annual-costs');
        var cellAnnualInterest2 = $('.r-annual-interest2');
        var cellChattels = $('.r-chattels-depr');


        while (cellTaxableIncome2.length > 0) {
            //get value of cells
            var annualRentCellValue = cellAnnualRent.html();
            var annualInterest2Value = cellAnnualInterest2.html();
            var annualCostValue = cellAnnualCost.html();
            var chattelsValue = cellChattels.html();


            var sum = (+annualRentCellValue + +annualInterest2Value + +chattelsValue) - +annualCostValue


            //TaxableIncome html
            cellTaxableIncome2.html(sum);

            cellTaxableIncome2 = cellTaxableIncome2.next();
            cellAnnualRent = cellAnnualRent.next();
            cellChattels = cellChattels.next();
            cellAnnualInterest2 = cellAnnualInterest2.next();
            cellAnnualCost = cellAnnualCost.next();


        }

        //Tax/Rebate2
        var cellTaxRebate = $('.r-tax-rebate2')
        var cellTaxableIncome = $('.r-taxable-income2');


        while (cellTaxRebate.length > 0) {
            var taxableIncomeCellValue = cellTaxableIncome.html();

            //TaxRebate Calcs
            var taxableIncomeVal = (+totalExpenses + +chattelsOutput + +annualRentVal)
            var marginalTaxRate = $('#marginal-tax-rate').val() / 100;

            cellTaxRebate.html(+((+taxableIncomeCellValue * +marginalTaxRate) * -1).toFixed(0))

            cellTaxableIncome = cellTaxableIncome.next();
            cellTaxRebate = cellTaxRebate.next();


        }




        //Net Cashflow2

        var cellTaxRebate = $('.r-tax-rebate2')
        var cellGrossCashflow = $('.r-gross-cashflow2');
        var cellNetCashflow = $('.r-net-cashflow2');

        while (cellTaxRebate.length > 0) {
            //Get values of related cells
            var grossCashflowCellValue = cellGrossCashflow.html();
            var taxRebateCellValue = cellTaxRebate.html();



            cellNetCashflow.html(+((+grossCashflowCellValue + +taxRebateCellValue)).toFixed(0))

            cellGrossCashflow = cellGrossCashflow.next();
            cellTaxRebate = cellTaxRebate.next();
            cellNetCashflow = cellNetCashflow.next();


        }

        //Equity
        var cellPropertyValue = $('.r-property-value');
        var pEquity = (+cellPropertyValue.html() - +pLoanBalance);

        $('.r-equity2').html(pEquity);
        //Equity %
        var pEquityPercent = (+pEquity / +cellPropertyValue.html())


        //P Roi after tax




        //Equity
        var cellEquity = $('.r-equity2');
        var cellPropertyValue = $('.r-property-value');
        var cellLoanBalance = $('.r-loan-balance');

        while (cellEquity.length > 0) {

            //Get values of related cells
            var propertyValueCellValue = cellPropertyValue.html();
            var pLoanBalance = cellLoanBalance.html();

            cellEquity.html(+ +(+propertyValueCellValue - +pLoanBalance).toFixed(0));


            cellEquity = cellEquity.next();
            cellPropertyValue = cellPropertyValue.next();
            cellLoanBalance = cellLoanBalance.next();


        }


        // Equity Percentage and ROI
        var cellEquity = $('.r-equity2');
        var prevCellEquity = $('.r-equity2').prev();
        var cellPropertyValue = $('.r-property-value');
        var cellEquityPercent = $('.r-equity-percent2');
        var cellRoi = $('.r-roi-2');
        var cellNetCashflow = $('.r-net-cashflow2');

        var equityCellValue = cellEquity.html();
        var propertyValueCellValue = cellPropertyValue.html();
        var capitalCosts = $('#capital-costs').val().replace(/,/g, '');
        var netCashflowValue = cellNetCashflow.html();
        var prevCellEquityValue = prevCellEquity.html();


        var roiFirstSum = ((((+equityCellValue + +netCashflowValue) / (+deposit + +capitalCosts) - 1) * 100).toFixed(2) + '%');

        while (cellEquity.length > 0) {

            //Get values of related cells
            var equityCellValue = cellEquity.html();
            var propertyValueCellValue = cellPropertyValue.html();
            var capitalCosts = $('#capital-costs').val().replace(/,/g, '');
            var netCashflowValue = cellNetCashflow.html();
            var prevCellEquityValue = prevCellEquity.html();

            cellEquityPercent.html(((+equityCellValue / +propertyValueCellValue) * 100).toFixed(2) + '%');

            cellRoi.html(((((+equityCellValue + +netCashflowValue) / +prevCellEquityValue) - 1) * 100).toFixed(2) + '%');




            cellEquity = cellEquity.next();
            cellPropertyValue = cellPropertyValue.next();
            cellEquityPercent = cellEquityPercent.next();
            cellRoi = cellRoi.next();
            cellNetCashflow = cellNetCashflow.next();
            prevCellEquity = prevCellEquity.next();


        }
        $('.r-roi-2').html(roiFirstSum);


        // Return on Capital sums 2-   -   -   -   -   -
        var cellSum = $('.r-return-capital2-sum');
        var cellSum2 = $('.r-return-capital2-sum2')
        cellPrincipal = $('.r-principal2');
        cellNetCashflow2 = $('.r-net-cashflow2')
        
        var sum = 0;
        var sum2 = 0;
        while (cellSum.length > 0) {

            var cellPrincipalValue = cellPrincipal.html();
            var netCashCellValue = cellNetCashflow2.html();

            sum += parseFloat(cellPrincipalValue);
            sum2 += parseFloat(netCashCellValue);
            cellSum.html(sum);
            cellSum2.html(sum2);

            cellSum = cellSum.next();
            cellSum2 = cellSum2.next();
            cellPrincipal = cellPrincipal.next();
            cellNetCashflow2 = cellNetCashflow2.next();

        }

        // Return on Capital -   -   -   -   -   -

        var cellEquity = $('.r-equity2');
        var cellNetCashflow = $('.r-net-cashflow2');
        var cellReturnCapital2 = $('.r-return-capital2');
        var cellSum = $('.r-return-capital2-sum');
        var cellSum2 = $('.r-return-capital2-sum2');
        //var deposit
        while (cellReturnCapital2.length > 0) {
            var equityCellValue = cellEquity.html();
            var grossCashflowCellValue = cellNetCashflow.html();
            var nextgrossCashFlow = cellNetCashflow.next().html();
            var cellSumValue = cellSum.html();
            var cellSumValue2 = cellSum2.html();


            //CALCULATION FOR SECOND RETURN ON CAPITAL:
            let thing = ((equityCellValue - +deposit)/(+deposit + +cellSumValue2))
            let testSum = (+cellSumValue + (thing)/100)
      
            var firstHalf = ((+cellSumValue2) + (+equityCellValue - +deposit))
            var secondHalf = ((+deposit + (+cellSumValue *-1)))

            cellReturnCapital2.html(((+firstHalf / +secondHalf)*100).toFixed(0)+'%');

            
            cellEquity = cellEquity.next();
            cellNetCashflow = cellNetCashflow.next();
            cellSum = cellSum.next();
            cellSum2 = cellSum2.next();
            cellReturnCapital2 = cellReturnCapital2.next();

            // console.log(cellReturnCapital2.html());

        }




        // -    -   -   -   -   -   -   - CHARTS -    -   -   -   -   -   -

        var cellLoanBalance = $('.r-loan-balance');
        var dataLoan = [
            cellLoanBalance.html(),
            cellLoanBalance.nextAll().html(),
            cellLoanBalance.nextAll().eq(1).html(),
            cellLoanBalance.nextAll().eq(2).html(),
            cellLoanBalance.nextAll().eq(3).html(),
            cellLoanBalance.nextAll().eq(4).html( ),
            cellLoanBalance.nextAll().eq(5).html(),
            cellLoanBalance.nextAll().eq(6).html(),
            cellLoanBalance.nextAll().eq(7).html(),
            cellLoanBalance.nextAll().eq(8).html(),
            cellLoanBalance.nextAll().eq(9).html(),
            cellLoanBalance.nextAll().eq(10).html(),
            cellLoanBalance.nextAll().eq(11).html(),
            cellLoanBalance.nextAll().eq(12).html(),
            cellLoanBalance.nextAll().eq(13).html(),
            cellLoanBalance.nextAll().eq(14).html(),
        ]
  
        var propertyValueCell = $('.r-property-value');
        var dataPropertyValue = [
            propertyValueCell.html(),
            propertyValueCell.nextAll().html(),
            propertyValueCell.nextAll().eq(1).html(),
            propertyValueCell.nextAll().eq(2).html(),
            propertyValueCell.nextAll().eq(3).html(),
            propertyValueCell.nextAll().eq(4).html(),
            propertyValueCell.nextAll().eq(5).html(),
            propertyValueCell.nextAll().eq(6).html(),
            propertyValueCell.nextAll().eq(7).html(),
            propertyValueCell.nextAll().eq(8).html(),
            propertyValueCell.nextAll().eq(9).html(),
            propertyValueCell.nextAll().eq(10).html(),
            propertyValueCell.nextAll().eq(11).html(),
            propertyValueCell.nextAll().eq(12).html(),
            propertyValueCell.nextAll().eq(13).html(),
            propertyValueCell.nextAll().eq(14).html(),
        ]

        var cellEquity = $('.r-equity');
        var dataEquity = [
            cellEquity.html(),
            cellEquity.nextAll().html(),
            cellEquity.nextAll().eq(1).html(),
            cellEquity.nextAll().eq(2).html(),
            cellEquity.nextAll().eq(3).html(),
            cellEquity.nextAll().eq(4).html(),
            cellEquity.nextAll().eq(5).html(),
            cellEquity.nextAll().eq(6).html(),
            cellEquity.nextAll().eq(7).html(),
            cellEquity.nextAll().eq(8).html(),
            cellEquity.nextAll().eq(9).html(),
            cellEquity.nextAll().eq(10).html(),
            cellEquity.nextAll().eq(11).html(),
            cellEquity.nextAll().eq(12).html(),
            cellEquity.nextAll().eq(13).html(),
            cellEquity.nextAll().eq(14).html(),
        ]
        



        var ctx = $("#myChart");
        var lineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels:["y1", "y2", "y3", "y4", "y5", "y6", "y7", "y8", "y9", "y10", "y11", "y12", "y13", "y14", "y15"],
                datasets:[
                    {
                        label: "Loan",
                        data: dataLoan,
                        backgroundColor: 'rgba(100,200,200,0.5)',
                    },
                    {
                        label: "Property Value",
                        data: dataPropertyValue,
                        backgroundColor: 'rgba(200,100,100,0.5)',
                    },
                    {
                        label: "Equity (Interest Only)",
                        data: dataEquity,
                        backgroundColor: 'rgba(100,100,200,0.5)',
                    },
                ]
            },
            // options: options
        });



    //format currency and make negatives red  
        $('[data-format="currency"]>td').not(':first-child').each(function(i,el){
            el.innerHTML = accounting.formatMoney(parseFloat(el.innerHTML));

            if (el.innerHTML.includes('-')) {
                $(this).addClass('red')
  
                $(this).prepend('(').append(')')
            }else{
                $(this).removeClass('red')
            }
        });

    });//end of refresh
    $('.pdf-download').on('click', function(e) {
        e.preventDefault();


        window.print();
    });




    //default test:
    $('#address').val('123, Fake Street, Te Aro, Wellington')
    $('#property-value').val('200,000');
    $('#purchase-price').val('200,000');
    $('#deposit').val('80,000');
    $('#capital-costs').val('0');
    $('#rates').val('800');
    $('#body-corporate').val('0');
    $('#insurance').val('300');
    $('#maintenance-underten').val('5');
    $('#maintenance-overten').val('5')
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