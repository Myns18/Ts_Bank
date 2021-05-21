import { Client } from "./Client";
import { Compte } from "./Comptes/Compte";
import { CompteASeuil } from "./Comptes/CompteASeuil";
import { CompteASeuilRemunere } from "./Comptes/CompteASeuilRemunere";
import { CompteRemunere } from "./Comptes/CompteRemunere";


const compte = new Compte();
compte.ajouter(5);
const client = new Client("Sansnom", "Pierre", 21);
const compterenumerer = new CompteRemunere(0.40);
const compteaseul = new CompteASeuil();
const compteASeuilRemunere = new CompteASeuilRemunere(0.50);




client.ajouterCompte(compte);
client.ajouterCompte(compterenumerer);
client.ajouterCompte(compteaseul);
client.ajouterCompte(compteASeuilRemunere);
console.log("--------------------------");
console.log("--------------------------");
console.log("--------------------------");
compterenumerer.ajouter(5);
compteASeuilRemunere.ajouter(10);
compterenumerer.calculerInterets();
compterenumerer.verserInterets();

// client.compte.forEach((comptes: Compte)=>{
//     if(compte instanceof CompteRemunere){
//         compte.verserInterets();
//     }
// })

console.log(client);