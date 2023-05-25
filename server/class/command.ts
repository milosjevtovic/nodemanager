export class Command {
    description!: string;
    usage!: string;
    public action!: Function;
    constructor(body : any) {
        this.description = body.description;
        this.usage = body.usage;
        this.action = body.action;
    }
    public arguments = () : number => { return this.action.arguments.length };
}

