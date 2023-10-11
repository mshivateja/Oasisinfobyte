const convertBtn = document.getElementById('convertBtn');
const inputTemp = document.getElementById('inputTemp');
const unitFrom = document.getElementById('unitFrom');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', () => {
    const temperature = parseFloat(inputTemp.value);
    const selectedUnit = unitFrom.value;
    
    if (selectedUnit === 'celsius') {
        const fahrenheit = (temperature * 9/5) + 32;
        resultDiv.textContent = `${temperature}°C is ${fahrenheit.toFixed(2)}°F`;
    } else if (selectedUnit === 'fahrenheit') {
        const celsius = (temperature - 32) * 5/9;
        resultDiv.textContent = `${temperature}°F is ${celsius.toFixed(2)}°C`;
    }
});