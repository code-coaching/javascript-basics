# English

The starting point of the excersise can be found in the directory `begin`.

The goal of the excercise is to make use of inheritance:
    - Add a new class `Teacher`.
    - A `Teacher` and a `Student` have all properties and methods in common.
    - Provide a super class `Person`.
    - Create a new variable `teachers` containing an array.
    - Add two instances of `Teacher` to the `teachers` array.
    - Overwrite the `greeting` method of `Teacher`, it should return a string that contains the greeting of the super class `Person`, appended with `I'm a teacher!`, e.g. `Hello, my name is Bart Duisters! I'm a teacher!`.
    - Rewrite the `printStudentInformation` function to a function called `printInformation` that takes an array as argument and prints out the greeting of whatever array is passed in. So, there will be one method, that is invoked twice, once with students as an argument and once with teachers as an argument.

The `solution` folder contains the solution to the excersise. It should solely be used as a directory in which a viable solution to the exersise can be found to compoare to your own solution, it should not be used as a directory in which you look for the solution to the exersise.

The end result of the excersise, will have the exact same output as the begin situation. Two extra lines will be added to the end of the output, the greetings of the teachers.
From the root of the repository, executing the following commands will have the same output in the console:

```sh
node ex-3/begin/index.js;
```

```sh
node ex-3/own-solution/index.js;
```

# Nederlands

Het startpunt van de oefening kan worden gevonden in de map `begin`.

Het doel van de oefening is om gebruik te maken van overerving:
    - Voeg een nieuwe class `Teacher` toe
    - Een `Teacher` en een `Student` hebben alle eigenschappen en methoden gemeen
    - Zorg voor een super class `Person`
    - Maak een nieuwe variabele `teachers` die een array bevat
    - Voeg twee instanties van `Teacher` toe aan de `teachers` array
    - Overschrijf de `greeting`-methode van `Teacher`, deze moet een string teruggeven die de greeting van de super class `Person` bevat, aangevuld met `Ik ben een leraar!`, bv. `Hello, my name is Bart Duisters! I'm a teacher!`
    - Herschrijf de `printStudentInformation` functie naar een functie genaamd `printInformation` die een array als argument accepteert en de `greeting` uitprint van de array die wordt doorgegeven. Er zal dus één methode zijn, die tweemaal wordt aangeroepen, eenmaal met studenten als argument en eenmaal met leraren als argument. 

De `solution` map bevat de oplossing van de oefening. Deze map dient alleen gebruikt te worden als map waarin een mogelijke oplossing staat om te vergelijken met de eigen oplossing, het is niet de bedoeling om deze map te bekijken om de oefening zelf op te lossen.

Het eindresultaat van de oefening, zal exact dezelfde output hebben als de beginsituatie. Met twee extra lijnen aan het einde van de output, de begroetingen van de leerkrachten.
Vanuit de root van de repository, zal het uitvoeren van de volgende commando's dezelfde output in de console geven:

```sh
node ex-3/begin/index.js;
```

```sh
node ex-3/own-solution/index.js;
```
