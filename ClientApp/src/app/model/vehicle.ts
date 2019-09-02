export interface Base{
    id: number;
    name: string;

}

export interface Contact{
    name: string;
    phone_number: string;
    email: string
}

export interface Vehicle{
    id: number;
    models: Base;
    makes: Base;
    features: Base[];
    isRegistered: boolean;
    contact: Contact;
    lastUpdate: string;
}

export class SaveVehicle{
    id: number;
    modelId: number;
    makeId: number;
    feature: number[];
    isRegisterd: boolean;
    contact: Contact;
}

export interface QueryResult{
    totalItems: number;
    items: Vehicle[];
}
export class VehicleQuery{
    makeId: number;
    isAscending: boolean;
    sortString: string;
    page: number;
    pageSize: number;
    constructor(_pageSize){
        this.pageSize = _pageSize;
    }
}