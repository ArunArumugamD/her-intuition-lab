// types/astronomia.d.ts
declare module 'astronomia' {
  export namespace julian {
    export function CalendarGregorianToJD(year: number, month: number, day: number): number;
  }
  
  export namespace solar {
    export function position(jd: number): { lon: number; lat: number; r: number };
  }
  
  export namespace moonposition {
    export function position(jd: number): { lon: number; lat: number; r: number };
  }
}