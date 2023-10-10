export class Ember{
    constructor(public name:string, public price:number ,public productecode:string){
        if(name.trim()==''){
            throw new Error('Nevet megadni kötelező');
        }
        else if(productecode.length!=11){
            throw new Error('A product code 11 karakterből kell álnia');
        }
        else if(price<100 || isNaN(price)){
            throw new Error('Az árnak 100 ft-nál töbnek kell lennie')
        }
    }
}