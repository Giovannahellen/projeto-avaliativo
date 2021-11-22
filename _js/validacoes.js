/*
Início verificação de preenchimento de campos do formulário
*/
function verifica(){
var nome = document.getElementById('nome').value;
var email = document.getElementById('email').value;
var celular = document.getElementById('cel').value;
var cpf = document.getElementById('cpf').value;
// || !celular || !cpf
	if(!nome || !email || !celular || !cpf){
	 alert("Campos não preenchidos, favor preenchê-los");
	} else{
		alert("Campos preenchidos com sucesso");
	}
}
/*
Fim verificação de preenchimento de campos do formulário
*/

/*#########
Inicio: Máscara de telefone
*/
/*
function maskFone(){
 var numeroAtual= document.getElementsByid('fone').value;
 const isCelular=numeroAtual.lengt=== 11;
 const isfone=numeroAtual.lengt=== 10;
let numeroAjustado;
if(isCelular){
	const part1 = numeroAtual.slice(0,2);
	const part2=numeroAtual.slice(2,6);
	const part3=numeroAtual.slice(6,10);
	numeroAjustado = ´(${part1}) ${part2}-${part3}´
 } else if(isfone){

}
}*/