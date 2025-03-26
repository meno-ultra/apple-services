document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan');
    const price = urlParams.get('price');

    // Update the order summary
    document.getElementById('plan-name').textContent = plan || 'No plan selected';
    document.getElementById('plan-price').textContent = price || '$0.00';

    // Payment method buttons
    const paymentButtons = document.querySelectorAll('.payment-option');
    const paymentDetails = document.getElementById('payment-details');

    // Payment details for each method
    const paymentInfo = {
        vodafone: {
            title: 'Vodafone Cash Payment',
            details: 'Please send the payment to: 01002667790\n\nAfter sending, please contact us with the transaction ID.',
            contact: 'WhatsApp: +20 100 266 7790'
        },
        etisalat: {
            title: 'Etisalat Cash Payment',
            details: 'Please send the payment to: 01113579824\n\nAfter sending, please contact us with the transaction ID.',
            contact: 'WhatsApp: +20 111 357 9824'
        },
        instapay: {
            title: 'InstaPay Payment',
            details: 'Please send the payment to: 01002667790\n\nAfter sending, please contact us with the transaction ID.',
            contact: 'WhatsApp: +20 100 266 7790'
        },
        binance: {
            title: 'Binance Payment',
            details: 'Please send the payment in USDT (TRC20) to:\n\nbnb1234567890abcdef\n\nAfter sending, please contact us with the transaction ID.',
            contact: 'WhatsApp: +20 100 266 7790'
        }
    };

    // Add click event listeners to payment buttons
    paymentButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            paymentButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get payment method from button class
            const method = button.classList[1]; // vodafone, etisalat, etc.
            
            // Display payment details
            const info = paymentInfo[method];
            paymentDetails.innerHTML = `
                <div class="payment-info">
                    <h4>${info.title}</h4>
                    <p>Amount to Pay: <span class="price">${price}</span></p>
                    <p>${info.details}</p>
                    <div class="wallet-address">
                        ${info.contact}
                    </div>
                </div>
            `;
            
            // Show payment details section
            paymentDetails.classList.add('active');
        });
    });
}); 
