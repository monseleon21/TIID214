const persona =
{
nombre: "Maria Monserrat Campuzano León",
edad: 22,
direccion: {
ciudad: "Qro",
pais: "MX"
}
};

const {nombre, edad, direccion:{ciudad} }= persona;
console.log(`Me llamo ${nombre} tengo ${edad} y vivo en ${ciudad}`);
