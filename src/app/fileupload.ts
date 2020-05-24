export class FileUpload {
 
    key: string;
    name: string;
    url: string;
    file: File;
    size: number;
    type:string;
 
    constructor(file: File) {
        this.file = file;
    }
}