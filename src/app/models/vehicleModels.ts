// Modellen voor een vehicle, auto/motor/scooter en de lijst aan subtypes
// Alles is in een object zodat het een label kan krijgen met een toekomstige mogelijkheid van kortingen o.i.d.
// Dan hoeft dingen niet gerefactored te worden later.
export interface Vehicle {
  label: string;
  subtypes: Subtype[];
}

export interface Subtype {
  label: string;
}
