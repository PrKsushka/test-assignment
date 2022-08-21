import {createContext} from "react";
import {ElementsForModalActivation} from "../types/types";

export const AppContext=createContext<ElementsForModalActivation>({} as ElementsForModalActivation);