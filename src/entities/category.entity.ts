type CategoryProps = {
    title:string;
    color:string,
    _id?:string
}


export class Category {
    public title:string
    public color:string
    public _id?:string

    constructor({title,color,_id}:CategoryProps){
        this.title = title
        this.color = color.toUpperCase()
        this._id = _id
    }

}