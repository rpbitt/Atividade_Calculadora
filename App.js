import React, {
  useState
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default function App() {
  // Mapeamento de teclas
  const buttons = ['LIMPAR', 'DEL', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '+/-', '='];

  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  function calculator() {
    const splitNumbers = currentNumber.split(' ');
    const firstNumber = parseFloat(splitNumbers[0]);
    const lastNumber = parseFloat(splitNumbers[2]);
    const operator = splitNumbers[1];
    // Faz ação referente tecla pressionada
    switch (operator) {
      case '+':
        setCurrentNumber(((firstNumber) + (lastNumber)).toString());
        return;
      case '-':
        setCurrentNumber(((firstNumber) - (lastNumber)).toString());
        return;
      case 'x':
        setCurrentNumber(((firstNumber) * (lastNumber)).toString());
        return;
      case '/':
        setCurrentNumber(((firstNumber) / (lastNumber)).toString());
        return;
      case '%':
        setCurrentNumber(((firstNumber / 100) * (lastNumber)).toString());
        return;
    }
  }

  function handleInput(buttonPressed) {
    console.log(buttonPressed); // Mostra no Console a tecla pressionada
    if (buttonPressed === '+' || buttonPressed === '-' || buttonPressed === 'x' || buttonPressed === '/' || buttonPressed === '%') {
      setCurrentNumber(currentNumber + ' ' + buttonPressed + ' ');
      return;
    }
    switch (buttonPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)));
        return;
      case 'LIMPAR': // Limpa todo o conteúdo
        setLastNumber('');
        setCurrentNumber('');
        return;
      case '=':
        setLastNumber(currentNumber + ' = ');
        calculator();
        return;
      case '+/-':
        setCurrentNumber(currentNumber * (-1));
        // calculator();
        return;
    }
    setCurrentNumber(currentNumber + buttonPressed);
  }
  console.log('CurrentNumber: ', currentNumber, 'LastNumber', lastNumber)
  console.log('Resultado', (30 / 100) * 700)
  return ( <
    View style = {
      styles.container
    } > {
      /* Area onde o resultado é exibido */ } <
    View style = {
      styles.results
    } >
    <
    Text style = {
      styles.historyText
    } > {
      lastNumber
    } < /Text> <
    Text style = {
      styles.resultText
    } > {
      currentNumber
    } < /Text> <
    /View> {
      /* Area onde os botões são exibidos*/ } <
    View style = {
      styles.buttons
    } >

    {
      buttons.map((button) =>
        button === '=' ? // Mapeamento do botão =
        <
        TouchableOpacity onPress = {
          () => handleInput(button)
        }
        key = {
          button
        }
        style = {
          [styles.button, {
            backgroundColor: '#006400'
          }]
        } >
        <
        Text style = {
          [styles.textButton, {
            color: "white",
            fontSize: 30
          }]
        } > {
          button
        } < /Text> <
        /TouchableOpacity> : // Mapeamento dos outros botões
        <
        TouchableOpacity onPress = {
          () => handleInput(button)
        }
        key = {
          button
        }
        style = {
          styles.button
        } >
        <
        Text style = {
          [styles.textButton, {
            color: typeof (button) === 'number' ? '#FCFCFC' : '#191970'
          }]
        } > {
          button
        } < /Text> <
        /TouchableOpacity>
      )
    } <
    /View> <
    /View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  results: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#006400"
  },
  resultText: {
    color: "#FCFCFC",
    fontSize: 32,
    fontWeight: "bold",
    padding: 12,
    textAlign: "right"
  },
  historyText: {
    color: "#191970",
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#00FA9A',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    minHeight: 90,
    flex: 2,
  },
  textButton: {
    color: "#191970",
    fontSize: 20,
  }
});