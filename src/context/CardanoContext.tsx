"use client";
import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useContext,
  useState,
} from "react";
import { type Address, type LucidEvolution } from "@lucid-evolution/lucid";
import type { CardanoWallet } from "../types/Cardano";
// Wallet Provider to pass the wallet context

export type Cardano = {
  lucid?: LucidEvolution | null;
  wallet?: CardanoWallet | null;
  address?: Address | null;
  balance?: number | null;
};

type CardanoContextType = Cardano & {
  setCardano: Dispatch<SetStateAction<Cardano>>;
};

export const CardanoContext = createContext<CardanoContextType | undefined>(
  undefined
);

export default function CardanoProvider(props: { children: React.ReactNode }) {
  //   const [cardano, setCardano] = useState<Cardano>({
  //     lucid: null, // Explicitly null to reset values
  //     wallet: null, // Explicitly null to reset values
  //     address: null, // Explicitly null to reset values
  //     balance: null, // Explicitly null to reset values
  //   });
  const [cardano, setCardano] = useState<Cardano>({});

  const contextValue: CardanoContextType = {
    ...cardano,
    setCardano,
  };

  return (
    <CardanoContext.Provider value={contextValue}>
      {props.children}
    </CardanoContext.Provider>
  );
}

export const useCardano = () => {
  const context = useContext(CardanoContext);
  if (!context) {
    throw new Error("useCardano must be used within a CardanoProvider");
  }
  return context;
};
