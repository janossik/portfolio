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
