export interface ICompteASeuil{
    retirer(uneValeur: number): void;
    getSeuil(): number;
    setSeuil(unSeuil: number): void;
}