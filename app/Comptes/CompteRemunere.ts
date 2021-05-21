import { Compte } from "./Compte";
import { IcompteRemunere } from "../Interfaces/ICompteRemunere";

export class CompteRemunere extends Compte implements IcompteRemunere{

    private _taux!: number;
    public getTaux(): number {
        return this._taux;
    }
    public setTaux(unTaux: number) {
        this._taux = unTaux;
    }

    constructor(taux: number){
        super();
        if(taux < 0 && taux > 1){
            console.log("Le taux doit être compris entre 0 et 1");
        }else{            
            this.setTaux(taux);
        }
    }

    public calculerInterets(): number{
        return this.getTaux() * this.solde;
    }

    public verserInterets(): void{
        this._solde += this.calculerInterets();
    }

}