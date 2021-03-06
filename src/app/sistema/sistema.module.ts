import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from 'ng-fullcalendar';
import { FormsModule }   from '@angular/forms';
import { HomeRoutingModule } from './home.routing.module';
import { SistemaComponent } from './sistema.component';
import { DashComponent } from './pages/dash/dash.component';
import { VideoComponent } from './pages/video/video.component';
import { PacienteModule } from './pages/paciente/paciente.module';
import { PacienteSelecionarComponent } from './pages/paciente/paciente-selecionar/paciente-selecionar.component';
import { RoleMenuComponent } from '../role-menu/role-menu.component';
import { LoadComponent } from '../load/load.component';
import { AppModule } from '../app.module';
import { VideochamadaComponent } from '../videochamada/videochamada.component';
import { UserStatusComponent } from './user-status/user-status.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { VideocallIconComponent } from './videocall-icon/videocall-icon.component';
import { DashPacienteComponent } from './pages/dash-paciente/dash-paciente.component';




@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FullCalendarModule,
    FormsModule
   
  ],
  declarations: [SistemaComponent,
     DashComponent,
     VideoComponent,
     LoadComponent,
     PacienteSelecionarComponent,
    RoleMenuComponent,
    LeftSideComponent,
    VideochamadaComponent,
    UserStatusComponent,
    VideocallIconComponent,
    DashPacienteComponent],
    
    exports:[LoadComponent,UserStatusComponent,LeftSideComponent,VideocallIconComponent]
})
export class SistemaModule { }
