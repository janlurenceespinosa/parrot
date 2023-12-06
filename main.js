const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = "JANELLE";
    
    if(n == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "Thank you!!!";
    }

    if (n.length > 0) {
	alert("what if...HAHAHAH");
	alert("what if crush teka");
        alert("What if dle nani atik2");
        alert('What if kita nalang:(');
        alert('apas na lagi tas pasko' + n + 'huhuhuhu');
        main.style.display = 'block';
        break;
    }
}