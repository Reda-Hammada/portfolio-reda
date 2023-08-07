import { ComponentElement, ReactComponentElement, ReactNode } from "react"
import React from "react"

export type ProjectTypeProps = {
    containerStyle:string,
    title:string,
    description:string,
    img:string,
    linkFront?:string,
    linkBack?:string,
    sourceCode?:string,
    linkLive?:string,
    List:string[] ,
}