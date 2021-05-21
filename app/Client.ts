import { Compte } from "./Comptes/Compte";
import {v4 as uuidv4} from 'uuid';

export class Client{

    private _nom!: string;
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }

    private _prenom!: string;
    public get prenom(): string {
        return this._prenom;
    }
    public set prenom(value: string) {
        this._prenom = value;
    }

    private _age!: number;
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }

    private _numero!: string;
    public get numero(): string {
        return this._numero;
    }

    private _compte: Compte[] = [];
    public get compte(): Compte[] {
        return this._compte;
    }
    public set compte(value: Compte[]) {
        this._compte = value;
    }

    constructor(nom: string, prenom: string, age: number){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        let genererIdClient = uuidv4();
        this._numero = genererIdClient;
    }

    public ajouterCompte(unCompte : Compte) :void{
        if(this.compte.length > 4){
            console.log("Vous ne pouvez pas avoir plus de 5 comptes");
        }else{
            this.compte.push(unCompte);
        }
    }

    public getCompte(numeroCompte: number){
        if(numeroCompte <= this.compte.length){
            console.log(`${this.compte[numeroCompte].numero}`);
        }else{
            console.log("Le compte n'existe pas !");
        }
    }
}