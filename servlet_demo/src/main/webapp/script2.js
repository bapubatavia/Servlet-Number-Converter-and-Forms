    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('.needs-validation');


        form.addEventListener('submit', function (event) {
            // Check if the form is valid
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {

                // 1. Validate email
                const email = document.getElementById('inputEmail').value;
                if (!isValidEmail(email)) {
                    event.preventDefault();
                    alert('Please enter a valid email address');
                }

                // 2. Check if the passwords match
                const password = document.getElementById('inputPassword').value;
                const passwordAgain = document.getElementById('inputPasswordAgain').value;
                if (password !== passwordAgain) {
                    event.preventDefault();
                    alert('Passwords do not match');
                }

            }
            form.classList.add('was-validated');
        });

        // Disable future dates

        var today = new Date().toISOString().split('T')[0];
        document.getElementById("inputDOB").setAttribute("max", today);

        // Email validation function
        function isValidEmail(email) {
            // Use a simple regex for email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    });