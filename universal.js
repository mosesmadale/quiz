let questionPad = document.querySelector('.question-title');
let currentPage = localStorage.getItem('currentPage');
if(window.innerWidth<1024){
		document.querySelector('.nav-list').innerHTML = 'Question: '+currentPage;
		console.log('here');
	}else if(window.innerWidth>1024){
		document.querySelector('.nav-list').innerHTML = `
					<div class="1 nav">1</div>
	                <div class="2 nav">2</div>
	                <div class="3 nav">3</div>
	                <div class="4 nav">4</div>
	                <div class="5 nav">5</div>
	                <div class="6 nav">6</div>
	                <div class="7 nav">7</div>
	                <div class="8 nav">8</div>
	                <div class="9 nav">9</div>
	                <div class="10 nav">10</div>
	                <div class="result nav">result</div>`;
	                console.log(currentPage,'this one');
					document.querySelectorAll('.nav')[currentPage-1].classList.add('selected');
	}





document.querySelector('.profile').innerText = localStorage.getItem('xps') + ' xp';
let geography = [
	{question:'Rivers conatin water.',isTrue:'true'},
	{question:'Nigeria is more populated than Tanzania',isTrue:'true'},
	{question:'Coasts are only found in lakes',isTrue:'false'},
	{question:'2+2 is 4',isTrue:'true'},
	{question:'Nairobi is the capital city of Kenya',isTrue:'true'},
	{question:'geography is the study of rocks',isTrue:'false'},
	{question:'white sand is only found in rivers',isTrue:'false'},
	{question:"clocks turn clockwise",isTrue:'true'},
	{question:'dogs are cats',isTrue:'false'},
	{question:'rain is red',isTrue:'false'}
];
let maths =[
	{question:'PI is 3.15',isTrue:'false'},
	{question:'+ is the opposite of x',isTrue:'false'},
	{question:'3km is 20 miles',isTrue:'false'},
	{question:'2+2 is 4',isTrue:'true'},
	{question:'adding is repeated subtraction',isTrue:'false'},
	{question:'sum is adding',isTrue:'true'},
	{question:'LCM is the same as HCF',isTrue:'false'},
	{question:"	There are 3 hours in a day",isTrue:'false'},
	{question:'-3 x 3 = 9',isTrue:'false'},
	{question:'humans know what 567 to the power 0',isTrue:'true'}
]
let biology =[
	{question:'asexual reproduction is slower than sexual reproduction',isTrue:'false'},
	{question:'gamets are haploid',isTrue:'true'},
	{question:'stamen is the female reproductive part of a flower',isTrue:'false'},
	{question:'plants need animals to reproduce',isTrue:'true'},
	{question:'all types of reproductions require 2 parents',isTrue:'false'},
	{question:'wind pollination is more common than insect pollination',isTrue:'false'},
	{question:'pollen gains have the male gamets',isTrue:'true'},
	{question:"ovules conatin ovaries",isTrue:'false'},
	{question:'bees assit asexual reproduction',isTrue:'false'},
	{question:'plants need a uterus to reproduce',isTrue:'false'}
]
let chemistry = [
	{question:'Cu2+ is an ion',isTrue:'true'},
	{question:'Ionic compounds made from ions',isTrue:'true'},
	{question:'reduction is loosing electrons',isTrue:'false'},
	{question:'both electrodes are positive',isTrue:'false'},
	{question:'all electrolytes conduct electricity',isTrue:'true'},
	{question:'the anode is positive',isTrue:'true'},
	{question:'anions get attracted by the cathode',isTrue:'true'},
	{question:"the cathode is an electrode",isTrue:'true'},
	{question:'all electrolytes must be liquid',isTrue:'true'},
	{question:'molten NaCl is an electrolyte',isTrue:'true'}
]
let points = localStorage.getItem('xps');



switch(localStorage.getItem('topic')){
	case 'Geography':
		questionPad.innerText = geography[currentPage-1].question;
		currentPage++;
		localStorage.setItem('currentPage',`${currentPage}`);
		break;
	case 'Maths':
		questionPad.innerText = maths[currentPage-1].question;
		currentPage++;
		localStorage.setItem('currentPage',`${currentPage}`);
		break;
	case 'Biology':
		questionPad.innerText = biology[currentPage-1].question;
		currentPage++;
		localStorage.setItem('currentPage',`${currentPage}`);
		break;
	case 'Chemistry':
		questionPad.innerText = chemistry[currentPage-1].question;
		currentPage++;
		localStorage.setItem('currentPage',`${currentPage}`);
		break;
	default:
		questionPad.innerText = 'Sorry, an error has occured';
}

$('.start').click(function(){
	$('.start').off();
	switch(localStorage.getItem('topic')){
		case 'Geography':
			validate(geography,this);
		break;
		case 'Maths':
			validate(maths,this);
		break;
		case 'Biology':
			validate(biology, this);
			break;
		case 'Chemistry':
			validate(chemistry, this);
			break;	
	}
	
})

function validate(currentLesson,e){
	if(e.innerText == currentLesson[currentPage-2].isTrue){
		points++;
		localStorage.setItem('xps',`${points}`);
		document.querySelector('.profile').innerText = localStorage.getItem('xps')+' xp';
		let val = document.createElement('div');
		let link = document.createElement('a');
		val.className = 'validation-correct';
		if(currentPage-1 <11){
			val.innerHTML = `<p>Correct!</p><span>click to continue</span>`;
			link.setAttribute('href',`q${currentPage}.html`);
		}else if(currentPage-1 == 11){
			console.log('moses won')
			val.innerHTML = `<p>Correct!</p><span><a href=results.html>click to continue</a></span>`;
		}
		document.querySelector('.comments').appendChild(link);
		link.appendChild(val);
	}else{
		console.log('false');
		let val = document.createElement('div');
		let link = document.createElement('a');
		val.className = 'validation-incorrect';
		if(currentPage-1 <11){
			val.innerHTML = `<p>Incorrect!</p><span>click to continue</span>`;
			link.setAttribute('href',`q${currentPage}.html`);
		}else if(currentPage-1 == 11){
			console.log('moses won');
			val.innerHTML = `<p>Incorrect!</p><span><a href=results.html>click to continue</a></span>`;
		}
		document.querySelector('.comments').appendChild(link);
		link.appendChild(val);
	}
}

console.log(currentPage-1)

if(currentPage-1 == 11){
	console.log('moses won')
	document.querySelector('.number').innerHTML = `mark: ${points/10}`;
}