export interface Button {
  text: string;
  link: string;
}

export interface Paquete {
  name: string;
  description: string;
  price: number;
  discount: number;
  button: Button;
}

export interface Plan {
  name: string;
  description: string;
  price: number;
  button: Button;
}

// Actualizamos RecargasData para que coincida con los datos de Recargas y API
export interface RecargasData {
  recargas: {
    title: string;
    description: string;
    paquetes: Paquete[];
  };
  api?: {
    title: string;
    plans: Plan[];
  };
}
