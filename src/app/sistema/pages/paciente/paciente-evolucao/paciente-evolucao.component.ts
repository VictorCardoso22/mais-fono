import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EvolucaoService } from '../../../../services/evolucao.service';
import { Evolucao } from '../../../../models/evolucao';
import { ActivatedRoute } from '@angular/router';
import {  HttpClient } from '@angular/common/http'; 
import { QueryOptions } from '../../../../models/query-options';


@Component({
  selector: 'app-paciente-evolucao',
  templateUrl: './paciente-evolucao.component.html',
  styleUrls: ['./paciente-evolucao.component.css'],
 	providers: [EvolucaoService],
   encapsulation: ViewEncapsulation.None
}) 
export class PacienteEvolucaoComponent implements OnInit {
  evolucoes: Evolucao[];
  editState: boolean = false;
  pacienteId: String;
  time: Date;
  idPaciente = this.route.snapshot.paramMap.get('id'); 
  /*
    Alterar
    Pegar id do fono no login e setar como global
  */
  fonoadiologoId: "8u1i3tA5R0Gvp4FB91S";
  //Podendo usar somente uma para os dois casos.
  //Inicializa um evolução que servirá para edição
  evolucaoToEdit: Evolucao= {
    id: 0,
    dsc_evolucao: '',
    dsc_titulo: '',
    fk_flag_evolucao: 0
   };

  //Inicializa um evolução que servirá para inclusão 
  evolucao: Evolucao
  //  = {
  //   dsc_evolucao: '',
  //   dsc_titulo: '',
  //   fk_flag_evolucao: 0
  //  };

  teste: Object;
   
  constructor(private http: HttpClient, private evolucaoService: EvolucaoService, private route: ActivatedRoute) {  }
  
  ngOnInit() {
    this.evolucao = new Evolucao();
    this.evolucao.fk_flag_evolucao = 1
    this.evolucaoService.list(new QueryOptions).subscribe(data => {
      this.evolucoes = <any>data
    })
  }

  onSubmit() {
    console.log(this.evolucao)
    if(this.evolucao.dsc_evolucao != '' && this.evolucao.dsc_titulo != '' 
    && this.evolucao.fk_flag_evolucao > 0 && this.evolucao.fk_flag_evolucao < 4 ) {
      this.evolucao.fk_fonoaudiologo = 2;
      this.evolucao.fk_paciente = 1;

      this.evolucaoService.create(this.evolucao).subscribe(
        result => {
          console.log(result)
        }
        );;
    }
  }

  editEvolucao(event, evolucao) {
    this.editState = !this.editState;
    this.evolucaoToEdit = evolucao;
  }

  getEvolucoesRest(){    
    //passando como parametro o id do paciente e o id do fono
    return this.http.get('http://localhost/slim/public/evolucao/evolucoes/'+this.idPaciente+'/2')
  }

  setEvolucaoRest(evolucao){
    //passando como parametro o id do paciente e o id do fono  
    evolucao.fk_paciente = this.idPaciente;
    evolucao = JSON.stringify(evolucao);

     return this.http.post('http://localhost/slim/public/evolucao/create', evolucao)
     .subscribe(res => console.log("done"));

   }

  delEvolucaoRest(id){
     const response = confirm('Tem certeza que quer deletar este registro?');
     if (response ) {
       return this.http.delete('http://localhost/slim/public/evolucao/delete/'+id)
       .subscribe(res => console.log('Done'));
     }
     return;
   }

  updEvolucaoRest(evolucaoToEdit, id){
    //passando como parametro o evolução e o id da evolução    
    evolucaoToEdit = JSON.stringify(evolucaoToEdit);

     return this.http.put('http://localhost/slim/public/evolucao/update/'+id, evolucaoToEdit)
     .subscribe(res => console.log("done"));

   }
}