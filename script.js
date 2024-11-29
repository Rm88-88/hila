const dictionary = [
    { hebrew: "שלום", english: "hello" },
    { hebrew: "בוקר טוב", english: "good morning" },
    { hebrew: "ערב טוב", english: "good evening" },
    // הוסף כאן עוד מילים לפי הסדר האלפביתי
];

const searchInput = document.getElementById('search');
const resultsList = document.getElementById('results');

function search() {
    const searchTerm = searchInput.value.toLowerCase();
    resultsList.innerHTML = '';

    const filteredWords = dictionary.filter(word => {
        return word.hebrew.toLowerCase().includes(searchTerm) || word.english.toLowerCase().includes(searchTerm);
    });

    filteredWords.sort((a, b) => {
        if (a.hebrew.toLowerCase() < b.hebrew.toLowerCase()) {
            return -1;
        }
        if (a.hebrew.toLowerCase() > b.hebrew.toLowerCase()) {
            return 1;
        }
        return 0;
    });

    filteredWords.forEach(word => {
        const row = document.createElement('tr');
        const hebrewCell = document.createElement('td');
        const englishCell = document.createElement('td');
        hebrewCell.textContent = word.hebrew;
        englishCell.textContent = word.english;
        row.appendChild(hebrewCell);
        row.appendChild(englishCell);
        resultsList.appendChild(row);
    });
}

searchInput.addEventListener('input', search);