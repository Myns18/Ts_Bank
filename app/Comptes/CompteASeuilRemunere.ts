import { ICompteASeuil } from "../Interfaces/ICompteASeuil";
import { CompteRemunere } from "./CompteRemunere";

export class CompteASeuilRemunere extends CompteRemunere implements ICompteASeuil{

    private _seuil: number = 0;
    public getSeuil(): number {
        return this._seuil;
    }
    public setSeuil(value: number) {
        this._seuil = value;
    }

    public retirer(uneValeur: number): void{
        if(this.solde - uneValeur < this.getSeuil()){
            console.log("Vous ne pouvez pas retirer car vous allez être en négatif");
        }else{
            this._solde = this.solde - uneValeur;
        }
    }
}