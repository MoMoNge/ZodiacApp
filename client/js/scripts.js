function getAlerted(){
	var person1 = {name:'Su' ,age:22, location:'Singapore', graduated: true};
	var person2 = {name:'Mee Nge' ,age:21, location:'KyaukTaGa',graduated: false};
	var person3 = {name:'Moe' ,age:33, location:'Yangon' ,graduated: true};
	
	var people = [person1,person2,person3];
	for(var i= 0 ;i < people.length; i++){
		
		if(people[i].graduated == true){
			document.getElementById('demo').innerHTML  += people[i].name + ' ' + "is graduated."+ '<br />';
		}else{
			document.getElementById('demo').innerHTML  += people[i].name + ' ' + "is not graduated." + '<br />';
		}

		
	}
}