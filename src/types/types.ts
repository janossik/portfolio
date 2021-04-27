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
  src: string;
  alt: string;
  url: string;
}

export interface ISignpost {
  vertical?: boolean;
  page: string;
  github: string;
}
export interface ICard {
  id: number;
  name: string;
  src: string;
  page: string;
  github: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  tech_stack: {
    id: number;
    name: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  }[];
}

export interface IChapter extends IComponentWithChildren {
  id?: string;
  title: string;
  description: string;
}
export interface IBook {
  id: number;
  title: string;
  subtitle: string;
  authors: { id: number; name: string }[];
  status: "plans" | "read" | "readed";
}

export interface IModal {
  children: React.ReactElement;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
