export interface EstacioMeteorologica {
  codi: string;
  nom: string;
  tipus: string;
  coordenades: Coordenades;
  emplacament: string;
  altitud: number;
  municipi: Municipi;
  comarca: Comarca;
  provincia: Provincia;
  xarxa: Xarxa;
  estats: Estat[];
}

export interface Coordenades {
  latitud: number;
  longitud: number;
}

export interface Municipi {
  codi: string;
  nom: string;
}

export interface Comarca {
  codi: number;
  nom: string;
}

export interface Provincia {
  codi: number;
  nom: string;
}

export interface Xarxa {
  codi: number;
  nom: string;
}

export interface Estat {
  codi: number;
  dataInici: string;
  dataFi: string | null;
}
