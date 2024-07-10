import { useState } from "react";
import styles from './Calculadora.module.css';

const Calculadora = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [classificacao, setClassificacao] = useState(0);

    const calculandoIMC = () => {
        const imc = peso / (altura * altura);
        const formatoIMC = imc.toFixed(2);
        setResultado (formatoIMC);
        classificaIMC (classificacao);
    };

    const classificaIMC = (formatoIMC) => {
        if (formatoIMC < 17.00) {
            setClassificacao('Muito abaixo do peso');
        } else if (formatoIMC >= 17.00 && formatoIMC < 18.49) {
            setClassificacao('Abaixo do peso');
        } else if (formatoIMC >= 18.5 && formatoIMC < 24.99) {
            setClassificacao('Peso normal');
        } else if (formatoIMC >= 25.00 && formatoIMC < 29.99) {
            setClassificacao('Acima do peso');
        } else if (formatoIMC >= 30.00 && formatoIMC < 34.99) {
            setClassificacao('Obesidade grau 1');
        } else if (formatoIMC >= 35.00 && formatoIMC < 39.99) {
            setClassificacao('Obesidade grau 2 (Severa)');
        } else { 
            setClassificacao('Obesidade grau 3 (Mórbida)');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        calculateIMC(peso, altura);
    };

    return (
        <div className={styles.container}>
            <header>
                <h1>Calculadora IMC</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <label>
                    Peso (kg)
                    <input
                        type="number"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        placeholder="Peso (Kg)"
                    />
                </label>
                <label>
                    Altura (cm)
                    <input
                        type="number"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        placeholder="Altura (M)"
                    />
                </label>
                <button className={styles.button} onClick={calculandoIMC}>
                    Calcular
                </button>                
            </form>
            <div className={styles.classifica}>
                <h3>Seu IMC é {resultado}</h3>
                <h3>Sua classificação é: {classificacao}</h3>  
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>IMC</th>
                            <th>Classificação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Menor que 17</td>
                            <td>Muito abaixo do peso</td>
                        </tr>
                        <tr>
                            <td>Entre 17 e 18,49</td>
                            <td>Abaixo do peso</td>
                        </tr>
                        <tr>
                            <td>Entre 18,5 e 24,99</td>
                            <td>Peso normal</td>
                        </tr>
                        <tr>
                            <td>Entre 25 e 29,99</td>
                            <td>Acima do Peso</td>
                        </tr>
                        <tr>
                            <td>Entre 30 e 34,99</td>
                            <td>Obesidade I</td>
                        </tr>
                        <tr>
                            <td>Entre 35 e 39,99</td>
                            <td>Obesidade II (severa)</td>
                        </tr>
                        <tr>
                            <td>Acima de 40</td>
                            <td>Obesidade III (Mórbida)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default Calculadora;