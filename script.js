console.log('js test')
$(function(){
	console.log('jquery test')



$('#deposit').on('input',function(){
	var purchasePrice = $('#purchase-price').val()
	var deposit = $('#deposit').val()


	$('.loan-amount').html(purchasePrice-deposit)
})


	
})