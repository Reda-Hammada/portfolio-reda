import { ComponentElement, ReactComponentElement, ReactNode } from "react"
import React from "react"

export type ProjectTypeProps = {
    containerStyle:string,
    title:string,
    description:string,
    img:string,
    linkFront?:string,
    linkBack?:string,
    List:ReactNode,
}