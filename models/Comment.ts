export interface Comment {
    comment: string
}

export class iComment extends Comment {
    comment?: string
    constructor(comment?: string ) {
        super()
        this.comment = comment;
    }

}