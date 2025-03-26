document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters to determine which plan was selected
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan');
    const price = urlParams.get('price');

    // Update the order summary
    if (plan && price) {
        document.getElementById('plan-name').textContent = plan;
        document.getElementById('plan-price').textContent = price;
    }

    // Payment method details
    const paymentDetails = {
        vodafone: {
            title: 'Vodafone Cash Payment',
            instructions: 'Send the payment to the following Vodafone Cash number:',
            number: '01002667790'
        },
        etisalat: {
            title: 'Etisalat Cash Payment',
            instructions: 'Send the payment to the following Etisalat Cash number:',
            number: '01113579824'
        },
        instapay: {
            title: 'InstaPay Payment',
            instructions: 'Send the payment to the following InstaPay account:',
            account: '01002667790'
        },
        binance: {
            title: 'Binance Payment',
            instructions: 'Send the payment to the following Binance wallet address:',
            wallet: 'bnb1234567890abcdef'
        }
    };

    // Add click handlers to payment options
    document.querySelectorAll('.payment-option').forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            document.querySelectorAll('.payment-option').forEach(opt => {
                opt.style.background = '#1a1a1a';
            });
            
            // Add active class to selected option
            this.style.background = '#ff3333';
            
            // Get payment method from class name
            const method = this.classList[1];
            const details = paymentDetails[method];
            
            // Update payment details section
            const detailsSection = document.getElementById('payment-details');
            detailsSection.innerHTML = `
                <div class="payment-info">
                    <h4>${details.title}</h4>
                    <p>${details.instructions}</p>
                    <div class="wallet-address">
                        ${details.number || details.account || details.wallet}
                    </div>
                    <p>After sending the payment, please contact us on Discord with your transaction details.</p>
                </div>
            `;
            detailsSection.classList.add('active');
        });
    });
}); 