import React from "react";

export interface IActiveState {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IComponentWithChildren {
  children: React.ReactElement | React.ReactElement[];
}

export interface IBox {
  title: string;
  children: string;
  url?: string;
  linkText?: string;
}

export interface IHero extends IBox {
  src?: string;
  alt?: string;
}
export interface ISign {
  id: string;
  src: string;
  alt: string;
  url: string;
}

export interface ISignpost {
  vertical?: boolean;
  signs: ISign[];
}
export interface ICard {
  id: string;
  src: string;
  signs: ISign[];
  techStack: string[];
}

export interface IChapter extends IComponentWithChildren {
  id?: string;
  title: string;
  description: string;
}
