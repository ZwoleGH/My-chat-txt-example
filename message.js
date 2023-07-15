var a=2;

var messageComp=[{
    id:"1", name:"Zwole", deger:"Hazır deneme"}];
module.exports=class messages{
    constructor(id,name,deger){
        if(id>0){this.id=id;}
        
        else{this.id=a;a++;}
        

        this.name=name;
        this.deger=deger;
    }

    saveMessages(){
        messageComp.push(this);
    }
    
    static getAll(){
        return messageComp;
    }
    static getById(id){
        const text=messageComp.find(i=>i.id===id);
        return text;
    }
    static delMsg(id){
        const index=messageComp.findIndex(i=>i.id===id);
        messageComp.splice(index, 1);
    }
}