$(document).keydown(function(e) {
	if((e.key == "b" || e.key == "B") && e.ctrlKey){
		var random = '';
		var option = '';

		$('input[name="name"]').val('Teste de Rotina - Favor Ignorar');
		$('input[name="email"]').val(roll4digitos()+'@teste.com');
		$('input[name="phone"]').val(rollfones());
		$('input[name="cpf"]').val(rollcpf());
		$('input[name="input_value"]').val(rollpreco());

		options = $('select[name="type_service"] > option');
		random = Math.floor(options.length * (Math.random() % 1));
		if(random == 0){
			random += 1;
		}
		$('select[name="type_service"] > option').attr('selected',false).eq(random).attr('selected',true);

		options = $('select[name="contactreason"] > option');
		random = Math.floor(options.length * (Math.random() % 1));
		if(random == 0){
			random += 1;
		}
		$('select[name="contactreason"] > option').attr('selected',false).eq(random).attr('selected',true);

		options = $('select[name="version"] > option');
		random = Math.floor(options.length * (Math.random() % 1));
		if(random == 0){
			random += 1;
		}
		$('select[name="version"] > option').attr('selected',false).eq(random).attr('selected',true);

		options = $('select[name="unit"] > option');
		random = Math.floor(options.length * (Math.random() % 1));
		if(random == 0){
			random += 1;
		}
		$('select[name="unit"] > option').attr('selected',false).eq(random).attr('selected',true);
		

		$('input[name="model_car"]').val('Teste AutoForce');
		$('input[name="plate"]').val('AAA0000');
		$('input[name="year"]').val('2015');
		$('input[name="km"]').val('100000');
		$('input[name="data"]').val('01/12/2020');
		$('textarea[name="message"]').val('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
		$('textarea[name="cargo"]').val('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');


		$('input#vehicle_exchange_no').attr('checked', 'true');
	}

	function rollpreco(){
		var roll = Math.floor(10000 + (30000 - 10000) * Math.random());
		return 'R$'+' '+roll+',00';
	}

	function rollcpf(){
		var roll1 = Math.floor(100 + (999 - 100) * Math.random());
		var roll2 = Math.floor(100 + (999 - 100) * Math.random());
		var roll3 = Math.floor(100 + (999 - 100) * Math.random());
		var roll4 = Math.floor(10 + (99 - 10) * Math.random());
		return roll1+'.'+roll2+'.'+roll3+'-'+roll4;
	}

	function rollfones(){
		var roll1 = Math.floor(10 + (99 - 10) * Math.random());
		var roll2 = Math.floor(10000 + (99999 - 10000) * Math.random());
		var roll3 = Math.floor(1000 + (9999 - 1000) * Math.random());
		return '('+roll1+')'+' '+roll2+'-'+roll3;
	}

	function roll4digitos(){
		var roll = Math.floor(1000 + (9999999 - 1000) * Math.random());
		return roll;
	}
});