function submitSurvey() {
    const options = document.getElementsByName('language');
    let selectedOption = null;
    for (const option of options) {
        if (option.checked) {
            selectedOption = option.value;
            break;
        }
    }

    const resultElement = document.getElementById('survey-result');
    if (selectedOption) {
        resultElement.textContent = `You selected: ${selectedOption}`;
    } else {
        resultElement.textContent = 'Please select an option.';
    }
}
