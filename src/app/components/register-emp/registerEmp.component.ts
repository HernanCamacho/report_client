import { Component, OnInit } from '@angular/core';

import { Deparment } from '../../models/deparment';
import { UserEmployee } from '../../models/user_employee';
import { DeparmentService } from '../../services/department.service';
import { UserEmpService } from '../../services/userEmp.service';
@Component({
    selector: 'registerEmpl',
    templateUrl: './registerEmp.component.html',
    providers: [DeparmentService, UserEmpService]
})

export class RegisterEmplComponent implements OnInit{
    public title: string;
    public welcome: string;
    public button: string;
    public success: string;
    public response: Deparment[];
    public userEmp: UserEmployee;

    constructor(
        private _departmentService: DeparmentService,
        private _userEmpService: UserEmpService
    ){
        this.title = '¡Comienza a usar Report ahora!';
        this.welcome = 'Desde Report atenderás de una manera más eficiente las incidencias de tu comunidad.';
        this.userEmp = new UserEmployee("","","","","","","");
        this.button = 'Registrarme';
    }

    ngOnInit(){
        console.log('RegisterEmplComponent initialized');
        this.getDeparments();
    }

    getDeparments(){
        this._departmentService.getDeparments().subscribe(
            response => {
                if(!response){
                    this.success = 'fail';
                }else{
                    console.log(response);
                    this.response = response;
                }

            }, error =>{
                var errorMessage = <any>error;
    			console.log(errorMessage);
    			if(errorMessage != null){
    				this.success = 'error';
    			}
            }
        )
    }

    onSubmit(form){
        this.userEmp.role_id = '5';
        this._userEmpService.saveUserEmp(this.userEmp).subscribe(
            response =>{
                if(!response){
                    this.success = 'fail';
                }else{
                    console.log(response);
                }
            }, error =>{
                console.log(<any>error);
            }

        );
    }

}
