function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;

    if (!birthdate) {
        document.getElementById("result").innerHTML = "Please select a valid date!";
        return;
    }

    const today = new Date();
    const birthDate = new Date(birthdate);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

   
    if (months < 0) {
        years--;
        months += 12;
    }

    
    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

 
    document.getElementById("result").innerHTML = `
        <p><strong>Years:</strong> ${years}</p>
        <p><strong>Months:</strong> ${months}</p>
        <p><strong>Days:</strong> ${days}</p>
    `;
}
