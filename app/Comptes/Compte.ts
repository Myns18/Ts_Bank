import {v4 as uuidv4} from 'uuid';

export class Compte{

    private _numero!: string;
    public get numero(): string {
        return this._numero;
    }
    protected _solde!: number; // double
    public get solde(): number {
        return this._solde;
    }

    public constructor(){
        let genererIdCompte = uuidv4();
        this._numero = genererIdCompte;
        this._solde = 0;
    }

    public ajouter(unMontant: number): void{
        if(unMontant > 0){
            this._solde += unMontant;
        }else{
            console.log("Le montant est négatif.");
            
        }
    }
    public retirer(unMontant: number): void{
        if(unMontant < 0){
            this._solde -= unMontant;
        }else{
            console.log("Le montant est positif.");
        }
    }
}