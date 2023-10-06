// consegna

// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21


// versione richiesta consegna

// // variabili
// let nome = prompt('qual è il tuo nome?');
// let cognome = prompt('qual è il tuo cognome?');
// let colorepreferito = prompt('qual è il tuo colore preferito?');
// const fixedNumber=21;

// // stampa
// console.log(nome+cognome+colorepreferito+fixedNumber);



// versione carina

document.addEventListener("DOMContentLoaded", function () {


    let Nome = document.getElementById("nome");
    let Cognome = document.getElementById("cognome");
    let Colore = document.getElementById("colore");
    const fixedNumber=21;
    
    let mostraValoreButton = document.getElementById("mostraValore");
    let outputDiv = document.getElementById("output");
    
    mostraValoreButton.addEventListener("click", function () {
        let valoreInputNome = Nome.value; 
        let valoreInputCognome = Cognome.value; 
        let valoreInputColore = Colore.value; 
        let outputText = valoreInputNome + valoreInputCognome + valoreInputColore + fixedNumber;
    
        outputDiv.textContent = outputText;
        console.log("La tua password è " + outputText);
        
    });


    
    });
