export interface EndPoints {
    location:string;
    categories:string;
    offSet:number;
    limit:number;
    price:number[]
    // latitude:number;
    // longitude:number;
    
}
// `location=az&categories=mexican&offset=20&limit=50`;
export interface FinalEndPoint {
    API_EndPoint:string;
}