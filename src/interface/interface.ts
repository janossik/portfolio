import React from "react";

export interface IActiveState {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IComponentWithChildren {
  children: React.ReactElement | React.ReactElement[];
}
