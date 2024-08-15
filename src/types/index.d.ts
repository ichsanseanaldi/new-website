export interface AppItem{
    name:string,
    github?:string,
    liveapp?:string | undefined
    isFinished?:boolean
}

export interface Apps{
    apps:AppItem[]
}