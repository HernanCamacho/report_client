import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

// Model
import { User } from '../../models/user';

// Services
import { UserService } from '../../services/user.service';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    providers: [UserService]
})

export class RegisterComponent implements OnInit{
    public title: string;
    public welcome: string;
    public button: string;
    public user: User;
    public success: string;

    constructor(
        private _route:  ActivatedRoute,
		private _router: Router,
        private _userService: UserService
    ){
        this.title = 'Únete a Report';
        this.welcome = 'Registrate para continuar, es gratis.';
        this.button = 'Registrarme';
        this.user = new User("","","","","");
        this.success = 'stand-by';
    }

    ngOnInit(){
        console.log('RegisterComponent initialized');
    }

    onSubmit(form){
        this._userService.register(this.user).subscribe(
            response =>{
                if(response.email && response.id){
                    this.success = 'success';
                    form.reset();
                }else{
                    this.success = 'fail';
                }
            }, error =>{
                console.log(<any>error);
            }
        );
    }



}
