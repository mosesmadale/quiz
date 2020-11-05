let questionPad = document.querySelector('.question-title');
let currentPage = localStorage.getItem('currentPage');
document.querySelector('.profile').innerText = localStorage.getItem('xps') + ' xp';
let geography = [
	{question:'Rivers conatin water.',isTrue:'true'},
	{question:'Nigeria is more populated than Tanzania',isTrue:'true'},
	{question:'Coasts are only found in lakes',isTrue:'false'},
	{question:'Rivers conatin water.',isTrue:'true'},
	{question:'Nigeria is more populated than Tanzania',isTrue:'true'},
	{question:'Coasts are only found in lakes',isTrue:'false'},
	{question:'Rivers conatin water.',isTrue:'true'},
	{question:'Nigeria is more populated than Tanzania',isTrue:'true'},
	{question:'Coasts are only found in lakes',isTrue:'false'}
];
let points = localStorage.getItem('xps');



switch(localStorage.getItem('topic')){
	case 'Geography':
		questionPad.innerText = geography[currentPage-1].question;
		currentPage++;
		localStorage.setItem('currentPage',`${currentPage}`);
		break;
		default:
		questionPad.innerText = 'Sorry, an error has occured';
}

document.querySelector('.start').onclick = function(){
	if(document.querySelector('.start').innerText == geography[localStorage.getItem('currentPage')-1].isTrue){
		points++;
		console.log('correct')
		localStorage.setItem('xps',`${points}`);
		document.querySelector('.profile').innerText = localStorage.getItem('xps')+' xp';

	}
}


