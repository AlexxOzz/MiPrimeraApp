import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado-ng',
  templateUrl: './empleado-ng.component.html',
  styleUrls: ['./empleado-ng.component.css']
})
export class EmpleadoNGComponent implements OnInit {

  nombre="Daniel";
  //apellido="Ortiz";
  edad=80;
 // empresa="TCS";
  ciudadOrigen="Bogota";
 //EventBinding
 habilitarCuadro=false;
 usuarioRegistrado=false;
 textoDeRegistro="No hay nadie registrado";

getRegistroUsuario(){
  this.usuarioRegistrado=false;
}

setUsuarioRegistrado(event:Event){
  //alert("Check del usuario 😊");
 
  if((<HTMLInputElement>event.target).value=="si"){
    this.textoDeRegistro="El usuario se acaba de registrar";
  }else{
    this.textoDeRegistro="No hay nadie registrado";
  }
}
/*
CambiaCiudad(event:Event){
  this.ciudadOrigen=(<HTMLInputElement>event.target).value;

}
*/
llamaApellido(valur:string){

}


  constructor() { }

  ngOnInit(): void {
  }


}
