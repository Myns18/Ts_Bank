export interface IcompteRemunere{
    calculerInterets(): number;
    verserInterets(): void;
    getTaux(): number;
    setTaux(unTaux: number): void;
}