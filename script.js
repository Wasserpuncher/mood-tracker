const moodForm = document.getElementById('mood-form');
const moodList = document.getElementById('mood-list');

moodForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const mood = document.getElementById('mood').value;
    const note = document.getElementById('note').value;

    const moodEntry = document.createElement('div');
    moodEntry.innerHTML = `<strong>${date}</strong>: <span>${mood}</span> <p>${note}</p>`;
    moodList.appendChild(moodEntry);

    moodForm.reset();
});
