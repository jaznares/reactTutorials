import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PropState = ({style}) => {
  const [texto, setTexto] = useState("Hola Mundo state!");

  const actualizarTexto = () => {
    if(texto == 'Chao mundo state!')
      setTexto('cambiado');
    else
      setTexto("Chao mundo state!");
  }

  return (
     <Text  style= {[styles.text, style]} onPress={actualizarTexto}> {texto}</Text>
  )
}

const  Texto = (props) => {
  const { texto } = props;
  return (
      <Text>{ texto }</Text>
  )
}

const  PropChildren = (props) => {
  const { children } = props;
  return (
      <Text>{ children }</Text>
  )
}


const Tutorial1 = () => {

  return (
    <View style={styles.container}>
      <PropState style={styles.red}/>
      <PropState  style={styles.blue}/>
      <PropState  style={styles.green}/>
      <Texto texto = {'Hola mundo Jorge'}></Texto>
      <Texto texto = {'Adios mundo'}></Texto>
      <PropChildren>
        No entiendo
      </PropChildren>
    </View>
  )
}

const TutorialTextInput = () => {
  const [text, setText] = useState('')

  return (
    <View style={styles.container}>
      <Text>Texto: {text}</Text>
      <TextInput 
        style={styles.input} 
        onChangeText= {t => setText(t)} 
        placeholder ='Escribir aquí ' 
        defaultValue= {text}/>
        <Button onPress={() => {
          setText(text)
          alert('Texto enviado con exito ' +  text)
        }} style={{marginTop: 20, paddingTop: 25}} title="Aceptar" />
      </View>
  );
}

const TutorialScrollView = () => {
  return (
    <ScrollView>
      <TutorialTextInput></TutorialTextInput>
    </ScrollView>
  );
}
const TutorialFlatList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data= {[
          { key: '1', name: 'Jorge'},
          { key: '2', name: 'Isa'},
          { key: '3', name: 'Oscar'},
          { key: '4', name: 'Josema'},
          { key: '5', name: 'Pedro'},
          { key: '6', name: 'Mansilla'},
          { key: '7', name: 'Erik'},
          { key: '8', name: 'Aaron'},
          { key: '9', name: 'Ribi'},
          { key: '10', name: 'Adri'},
          { key: '11', name: 'Angel'},
          { key: '12', name: 'Pau'},
          { key: '13', name: 'Ferpo'},
          { key: '14', name: 'Hideki'},
          { key: '15', name: '...'}
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}
export default function App() {

  return (
    <TutorialTextInput />
  );
}

// Crear estilos
const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    fontSize: 25,
    width: windowWidth
  },
  text: {
    color: 'white',
    height: 100,
    width: 100,
    fontSize: 20
  },
  red: {
    flex: 1,
    backgroundColor: 'red'
  },
  blue: {
    flex:2,
    backgroundColor: 'blue'
  },
  green: {
    flex: 3,
    backgroundColor: 'green'
  },
  input: {
    height: 40, 
    //backgroundColor: '#eee',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '70%',
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
