import {Role} from './role';

export class User {
    id:number;
    changed: number;
    enabled: number;
    matricule : string;
    nom : string;
    password : string;
    photo : string;
    prenom: string;
    username : string;
    role : Role[];
    token? : string;
    roles: Role[];
}