// gestionnaire de score de Molky Clément

let scoreToWin = parseInt(prompt("En combien de points se jouera la partie ?"));;
let teamName1 = prompt("Veuillez indiquer le nom de l\'équipe A");
let teamName2 = prompt("Veuillez indiquer le nom de l\'équipe B");
let team1Score = 0;
let team2Score = 0;
let pinDown; // nombre de quilles renversées
let gameOver = false;

function team1Throw(){
    let number = parseInt(prompt("Combien de quilles ont été renversées par l'équipe " + teamName1 + " ?"));
    while(isNaN(number) || number > 12){
       number = parseInt(prompt("Veuillez entrez un nombre valide (il n\'y a que douze quilles au Molky !"))
    }
    if (number == 1){
        pinDown = parseInt(prompt("Quel est le score de la quille ?"))
        return team1Score += pinDown
    } else {
        return team1Score += number;
    }
}

function team2Throw(){
    let number2 = parseInt(prompt("Combien de quilles ont été renversées " + teamName2 + " ?"));
    while(isNaN(number2) || number2 > 12){
        number2 = parseInt(prompt("Veuillez entrez un nombre valide (il n\'y a que douze quilles au Molky !"))
    }    
    if (number2 == 1){
        pinDown = parseInt(prompt("Quel est le score de la quille ?"))        
        return team2Score += pinDown
    } else {
        return team2Score += number2
    }
}
// fonction pour ajuster les scores
function adjustingScores(){
    if(team1Score > scoreToWin){
        team1Score = scoreToWin / 2;    
    }
    if(team2Score > scoreToWin){
        team2Score = scoreToWin / 2;
    }   
}

function gameOverTeamAWins(){
    if(team1Score == scoreToWin){
        confirm("Nous avons un gagnant ! Félicitation à l\'équipe " + teamName1 + " !");
        gameOver = true;
    } // un peu lourd et sale mais ça marche, même si l'appli envoie un tour team2Throw en cas de gain de l'équipeA
}
function gameOverTeamBWins(){
    if(team2Score == scoreToWin){
        confirm("Nous avons un gagnant ! Félicitation à l\'équipe " + teamName2 + " !");
        gameOver = true;
    }
}


    while(!gameOver){         
         
            team1Throw();
            adjustingScores();
            console.log("le score de l\'équipe " + teamName1 + " s\'élève à " + team1Score + "/" + scoreToWin + " contre " + team2Score + "/" + scoreToWin + " pour l\'équipe " + teamName2);
            gameOverTeamAWins()
            
            team2Throw();
            adjustingScores();
            console.log("le score de l\'équipe " + teamName1 + " s\'élève à " + team1Score + "/" + scoreToWin + " contre " + team2Score + "/" + scoreToWin + " pour l\'équipe " + teamName2)
            gameOverTeamBWins();
            
    };
