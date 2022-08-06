const data = [
	{
		name: 'Rohan Das',
		age: 18,
		city: 'Kolkata',
		language: 'Python',
		framework: 'Django',
		image: 'https://randomuser.me/api/portraits/men/51.jpg'
	},

	{
		name: 'Shubham Sharma',
		age: 28,
		city: 'Bangalore',
		language: 'JavaScript',
		framework: 'Angular',
		image: 'https://randomuser.me/api/portraits/men/54.jpg'
	},

	{
		name: 'Camella Cabello',
		age: 18,
		city: 'Kolkata',
		language: 'Python',
		framework: 'Django',
		image: 'https://randomuser.me/api/portraits/women/55.jpg'
	},

	{
		name: 'Aishwariya Rai',
		age: 45,
		city: 'Mumbai',
		language: 'Python',
		framework: 'Flask',
		image: 'https://randomuser.me/api/portraits/women/57.jpg'
	},

	{
		name: 'Rohit Sharma',
		age: 34,
		city: 'Jharkhand',
		language: 'Go',
		framework: 'Go Framework',
		image: 'https://randomuser.me/api/portraits/men/61.jpg'
	}
]
function cvIterator(profiles) {
	let nextIndex = 0;
	return {
		next: function () {
			return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
		}

	}
}
const Candidate = cvIterator(data);
nextCV();
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
	const currentCandidate = Candidate.next().value;
	let image = document.getElementById('image');
	let profile = document.getElementById('profile');
	if (currentCandidate != undefined) {
		image.innerHTML = `<img src='${currentCandidate.image}'>`;
		profile.innerHTML = `<ul class="list-group">
		<li class="list-group-item">Name: ${currentCandidate.name}</li>
		<li class="list-group-item">${currentCandidate.age} years old</li>
		<li class="list-group-item">Lives in ${currentCandidate.city}</li>
		<li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
		<li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
	  </ul>`;
	}

	else {
		let alerting = document.getElementById('alerting');
		let html = `<div class="alertBox">
						<p>End of applications</p>
					</div>`
		alerting.innerHTML = html;
		setTimeout(function () {
			alerting.innerHTML = '';
		}, 1590);
		setInterval(() => {

			window.location.reload();
		}, 1000);
	}

}
