export default function removeAttrEmptyObjet (obj: { [key: string]: string}){
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== ""))
}