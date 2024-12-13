'use client'

import { createContext, useContext, useState, useReducer } from "react";

interface TankType {
  label: string;
  value: {
    name: string;
    length: number;
    width: number;
    height: number;
  } | null;
}

interface StockItem {
  genus: string;
  species: string;
  commonName: string;
  grouping: string;
  length: number;
  diet: string;
  foodLvl: string;
  reefSafe: boolean;
  minTankSize: number;
  minTankLength: number | null;
  minTankHeight: number | null;
  multiSpecies: boolean;
  multiGenus: boolean;
  specialNeeds: string;
  comments: string;
}

interface Dimensions {
  length: number;
  width: number;
  height: number;
}

interface TankContextType {
  tank: {
    type: TankType;
    dimensions?: Dimensions;
  } | null;
  stockList?: StockItem[];
  dispatch?: React.Dispatch<React.SetStateAction<any>>;
}

const TankContext = createContext<TankContextType>({
  tank: null,
});

export const TankProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const initState = {
    tank: null,
    stockList: [],
  };

  const reducer = (
    state: {
      tank: { type: TankType; dimensions?: Dimensions } | null;
      stockList: StockItem[];
    },
    action: any
  ) => {
    return state;
  };

  const [tankState, dispatch] = useReducer(reducer, initState);
  return (
    <TankContext.Provider
      value={{
        tank: tankState.tank,
        stockList: tankState.stockList,
        dispatch,
      }}
    >
      {children}
    </TankContext.Provider>
  );
};

export const useTankContext = () => useContext(TankContext);
