var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} hrs`)
if (hora<12){
    console.log(`Bom dia, são ${hora} hrs`)
}else if (hora=12 || hora<18){
    console.log(`Boa tarde, são ${hora} hrs`)
}else{
    console.log(`Boa noite, são ${hora} hrs`)
}