document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('converterForm');
    const amountInput = document.getElementById('amount');
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const resultElement = document.getElementById('conversionResult');

    const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
    const API_URL = 'https://api.exchangerate-api.com/v4/latest/';

    async function fetchExchangeRates(baseCurrency) {
        try {
            const response = await fetch(`${API_URL}${baseCurrency}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data.rates;
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            alert('Failed to fetch exchange rates. Please try again later.');
        }
    }

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const amount = parseFloat(amountInput.value);
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;

        if (fromCurrency === toCurrency) {
            resultElement.textContent = `Converted Amount: ${amount} ${toCurrency}`;
            return;
        }

        const rates = await fetchExchangeRates(fromCurrency);

        if (rates && rates[toCurrency]) {
            const convertedAmount = amount * rates[toCurrency];
            resultElement.textContent = `Converted Amount: ${convertedAmount.toFixed(4)} ${toCurrency}`;
        } else {
            resultElement.textContent = 'Error: Conversion rate not available.';
        }
    });
});
