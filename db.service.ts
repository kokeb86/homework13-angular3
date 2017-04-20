
//service class

export class DataService {

    constructor() {}

    private data = [{id:'1',name: 'Assad Saad', email:'asaad@mum.edu'},
   {id:'2',name: 'Kokeb Abera', email:'kbeyene@mum.edu'},
   {id:'3',name: 'Birtukan Tafere', email:'bsinshaw@mum.edu'},
   {id:'4',name: 'abirham Abera', email:'aabera@mum.edu'}];

    getData() {
        return this.data;
    }


}
