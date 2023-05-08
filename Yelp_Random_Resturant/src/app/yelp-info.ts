export interface Yelpinfo {
    businesses: Business[];
}

export interface Business {
    id:            string;
    // alias:         string;
    name:          string;
    imageUrl:     string;
    is_closed:     boolean;
    url:           string;
    reviewCount:  number;
    categories:    Category[];
    rating:        number;
    // coordinates:   Coordinates;
    transactions:  string[];
    price:         string;
    // location:      Location;
    phone:         string;
    display_phone: string;
    distance:      number;
}

export interface Category {
    alias: string;
    title: string;
}

// export interface Coordinates {
//     latitude:  number;
//     longitude: number;
// }

export interface Location {
    address1:        string;
    address2:        string;
    address3:        string;
    city:            string;
    zip_code:        string;
    country:         string;
    state:           string;
    display_address: string[];
}


// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
// export class Convert {
//     public static toYelpinfo(json: string): Yelpinfo {
//         return cast(JSON.parse(json), r("Yelpinfo"));
//     }

//     public static yelpinfoToJson(value: Yelpinfo): string {
//         return JSON.stringify(uncast(value, r("Yelpinfo")), null, 2);
//     }
// }

// function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
//     const prettyTyp = prettyTypeName(typ);
//     const parentText = parent ? ` on ${parent}` : '';
//     const keyText = key ? ` for key "${key}"` : '';
//     throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
// }

// function prettyTypeName(typ: any): string {
//     if (Array.isArray(typ)) {
//         if (typ.length === 2 && typ[0] === undefined) {
//             return `an optional ${prettyTypeName(typ[1])}`;
//         } else {
//             return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
//         }
//     } else if (typeof typ === "object" && typ.literal !== undefined) {
//         return typ.literal;
//     } else {
//         return typeof typ;
//     }
// }

// function jsonToJSProps(typ: any): any {
//     if (typ.jsonToJS === undefined) {
//         const map: any = {};
//         typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
//         typ.jsonToJS = map;
//     }
//     return typ.jsonToJS;
// }

// function jsToJSONProps(typ: any): any {
//     if (typ.jsToJSON === undefined) {
//         const map: any = {};
//         typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
//         typ.jsToJSON = map;
//     }
//     return typ.jsToJSON;
// }

// function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
//     function transformPrimitive(typ: string, val: any): any {
//         if (typeof typ === typeof val) return val;
//         return invalidValue(typ, val, key, parent);
//     }

//     function transformUnion(typs: any[], val: any): any {
//         // val must validate against one typ in typs
//         const l = typs.length;
//         for (let i = 0; i < l; i++) {
//             const typ = typs[i];
//             try {
//                 return transform(val, typ, getProps);
//             } catch (_) {}
//         }
//         return invalidValue(typs, val, key, parent);
//     }

//     function transformEnum(cases: string[], val: any): any {
//         if (cases.indexOf(val) !== -1) return val;
//         return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
//     }

//     function transformArray(typ: any, val: any): any {
//         // val must be an array with no invalid elements
//         if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
//         return val.map(el => transform(el, typ, getProps));
//     }

//     function transformDate(val: any): any {
//         if (val === null) {
//             return null;
//         }
//         const d = new Date(val);
//         if (isNaN(d.valueOf())) {
//             return invalidValue(l("Date"), val, key, parent);
//         }
//         return d;
//     }

//     function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
//         if (val === null || typeof val !== "object" || Array.isArray(val)) {
//             return invalidValue(l(ref || "object"), val, key, parent);
//         }
//         const result: any = {};
//         Object.getOwnPropertyNames(props).forEach(key => {
//             const prop = props[key];
//             const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
//             result[prop.key] = transform(v, prop.typ, getProps, key, ref);
//         });
//         Object.getOwnPropertyNames(val).forEach(key => {
//             if (!Object.prototype.hasOwnProperty.call(props, key)) {
//                 result[key] = transform(val[key], additional, getProps, key, ref);
//             }
//         });
//         return result;
//     }

//     if (typ === "any") return val;
//     if (typ === null) {
//         if (val === null) return val;
//         return invalidValue(typ, val, key, parent);
//     }
//     if (typ === false) return invalidValue(typ, val, key, parent);
//     let ref: any = undefined;
//     while (typeof typ === "object" && typ.ref !== undefined) {
//         ref = typ.ref;
//         typ = typeMap[typ.ref];
//     }
//     if (Array.isArray(typ)) return transformEnum(typ, val);
//     if (typeof typ === "object") {
//         return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
//             : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
//             : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
//             : invalidValue(typ, val, key, parent);
//     }
//     // Numbers can be parsed by Date but shouldn't be.
//     if (typ === Date && typeof val !== "number") return transformDate(val);
//     return transformPrimitive(typ, val);
// }

// function cast<T>(val: any, typ: any): T {
//     return transform(val, typ, jsonToJSProps);
// }

// function uncast<T>(val: T, typ: any): any {
//     return transform(val, typ, jsToJSONProps);
// }

// function l(typ: any) {
//     return { literal: typ };
// }

// function a(typ: any) {
//     return { arrayItems: typ };
// }

// function u(...typs: any[]) {
//     return { unionMembers: typs };
// }

// function o(props: any[], additional: any) {
//     return { props, additional };
// }

// function m(additional: any) {
//     return { props: [], additional };
// }

// function r(name: string) {
//     return { ref: name };
// }

// const typeMap: any = {
//     "Yelpinfo": o([
//         { json: "businesses", js: "businesses", typ: a(r("Business")) },
//     ], false),
//     "Business": o([
//         { json: "id", js: "id", typ: "" },
//         { json: "alias", js: "alias", typ: "" },
//         { json: "name", js: "name", typ: "" },
//         { json: "image_url", js: "image_url", typ: "" },
//         { json: "is_closed", js: "is_closed", typ: true },
//         { json: "url", js: "url", typ: "" },
//         { json: "review_count", js: "review_count", typ: 0 },
//         { json: "categories", js: "categories", typ: a(r("Category")) },
//         { json: "rating", js: "rating", typ: 3.14 },
//         { json: "coordinates", js: "coordinates", typ: r("Coordinates") },
//         { json: "transactions", js: "transactions", typ: a("any") },
//         { json: "price", js: "price", typ: "" },
//         { json: "location", js: "location", typ: r("Location") },
//         { json: "phone", js: "phone", typ: "" },
//         { json: "display_phone", js: "display_phone", typ: "" },
//         { json: "distance", js: "distance", typ: 3.14 },
//     ], false),
//     "Category": o([
//         { json: "alias", js: "alias", typ: "" },
//         { json: "title", js: "title", typ: "" },
//     ], false),
//     "Coordinates": o([
//         { json: "latitude", js: "latitude", typ: 3.14 },
//         { json: "longitude", js: "longitude", typ: 3.14 },
//     ], false),
//     "Location": o([
//         { json: "address1", js: "address1", typ: "" },
//         { json: "address2", js: "address2", typ: "" },
//         { json: "address3", js: "address3", typ: "" },
//         { json: "city", js: "city", typ: "" },
//         { json: "zip_code", js: "zip_code", typ: "" },
//         { json: "country", js: "country", typ: "" },
//         { json: "state", js: "state", typ: "" },
//         { json: "display_address", js: "display_address", typ: a("") },
//     ], false),
// };
