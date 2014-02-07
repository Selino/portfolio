// JavaScript Document

$(document).ready(function() {
	$('#memory-checkbox').click(function() {
	  $('#inmemory').slideToggle();
	});
	$('#other-amount').click(function() {
		$('#dollaramount').show();
	});
	$('.set-amount').click(function() {
		$('#dollaramount').hide();
	});
	$('#monthly_checkbox_on').click(function() {
		$('#monthly_donation').slideDown();
	});
	$('#monthly_checkbox_off').click(function() {
		$('#monthly_donation').slideUp();
	});
	$('input:radio').change(function(){
	  calcTotal();
	})
	$('#donation_months').change(function(){
	  calcTotal();
	})
	$('#dollaramount').keyup(function(){
	  calcTotal();
	})
});

function calcTotal() {
	nMonths = $('#donation_months').val();
	nDonationAmount = $('input[@name="amount"]:checked').val();
	
	if (nDonationAmount != parseInt(nDonationAmount) && nDonationAmount != 'other') {
	  $('#monthstotal').html('Select an amount');
	} else if (nDonationAmount == 'other') {
		nDonationAmount = $('#dollaramount').val();
		nNewTotal = nMonths * nDonationAmount;
		
		if (nNewTotal == parseInt(nNewTotal)){
			$('#monthstotal').html('$' + nNewTotal);
		} else {
			$('#monthstotal').html('Select an amount');
		}
	} else {
		nNewTotal = nMonths * nDonationAmount;
	  $('#monthstotal').html('$' + nNewTotal);
	}

}
