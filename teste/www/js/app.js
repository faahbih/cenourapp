$('.collection-item').on('click', function(){

	var $badge = $('.badge', this);
	if ($badge.length == 0){
		$badge = $('<span class="badge brown-text">0</span>').appendTo(this);
	}

	$badge.text(parseInt($badge.text()) + 1);


});

$('#confirmar').on('click', function(){


	var texto = '';

	$('.badge').parent().each(function(){
		var produto = this.firstChild.textContent;
		var quantidade = this.lastChild.textContent;

		texto += produto + ': ' + quantidade + ', ';

		// var nomeProduto = this.firstChild.textContent;
		// Materialize.toast(nomeProduto + ' adicionado', 1000);
	});

	$('#resumo').text(texto);
});

$('.modal-trigger').leanModal();//inicializa plugin de modal do materialize


$('.collection').on('click', '.badge', function(){
	$(this).remove();
	return false;

});

$('.acao-limpar').on('click', function() {
	$('#numero-mesa').val('');
	$('.badge').remove();
})

$('scan-qrcode').click(function(){
	cordova.plugins.barcodeScanner.scan(function(resultado){
		// alert(resultado.text);

		if (resultado.text){
			Materialize.toast('Mesa ' + resultado.text, 2000);
			$('#numero-mesa').val(resultado.text);
		}
	},
	function(erro){
		Materialize.toast('Erro ' + erro, 2000, 'red-text');
	});
})