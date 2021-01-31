import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PasswordGenerator';
  password = '';
  useLetter = false;
  useNumber = false;
  useSymbol = false;
  length = 0;


  passwordLength(event: any){
    const parsedValue = parseInt(event);
    if (!isNaN(parsedValue) ){
        this.length = parsedValue;
    }

  }
  onChangeUseLetter(){
    this.useLetter = !this.useLetter;
  }
  onChangeUseNumber(){
    this.useNumber = !this.useNumber;
  }
  onChangeUseSymbol(){
    this.useSymbol = !this.useSymbol;
  }



  generate(){
    const letter = 'abcdefghijklmnopqrstuvwxzQWERTYUIOPLKJHGFDSAZXCVBNM';
    const number = '1234567890';
    const symbol = '@$%&/?';
    let validPasswordString = '';
    if (this.useLetter){
      validPasswordString += letter;


    }
    if (this.useNumber){
      validPasswordString += number;
    }
    if (this.useSymbol){
      validPasswordString += symbol;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validPasswordString.length);
      generatedPassword += validPasswordString[index];
    }

    this.password = generatedPassword;
  }
}
