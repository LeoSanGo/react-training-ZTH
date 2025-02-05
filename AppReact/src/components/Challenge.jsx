
const Challenge = () => {
    const numbers = {
        a: 3,
        b:2
    }
    
    const somaNumeros = () => {
        return console.log(numbers.a + numbers.b);
        
    }

    return(
      <>
        <h1>Soma dos numeros {numbers.a} e {numbers.b}</h1>
        <button onClick={somaNumeros}>
            Somar
        </button>
      </>
    )
}

export default Challenge