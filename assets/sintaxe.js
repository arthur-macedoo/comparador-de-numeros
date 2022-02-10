function comparaNumeros() {

    let n1 = Number(prompt("Insira o primero valor:"));
    let n2 = Number(prompt("Insira o segundo valor:"));
    let x = `Os números ${n1} e ${n2} são iguais.`
    let y = `Os números ${n1} e ${n2} não são iguais.`
    let resultado;
    let comparaDez;
    let comparaVinte;


    if(!n1 || !n2){
        alert("Erro. Parâmetros inválidos.");
        comparaNumeros();
    }
    else{
        function igualDiferente(){
            if(n1 == n2){
                return x;
            } 
            else{
                return y;
            }
        }
        function soma(){
            return resultado = n1 + n2;
        }
        function comparaDez(){
            if(resultado > 10){
                return comparaDez = "maior"; 
            }
            else{
                return comparaDez = "menor";
            } 
        }
        function comparaVinte(){
            if(resultado > 20){
                return comparaVinte = "maior";
            }
            else{
                return comparaVinte = "menor";
            }
        }

    alert(`${igualDiferente()} Sua soma é ${soma()}, que é ${comparaDez()} que 10 e ${comparaVinte()} que 20.`)    
    } 
}
comparaNumeros()