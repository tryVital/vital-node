import { SourceClientFacing } from './user_models';

/* tslint:disable */
/* eslint-disable */
/**
/* This file was automatically generated from pydantic models by running pydantic2ts.
/* Do not modify it by hand - just update the pydantic models and then re-run the script
*/

export interface MealInDBBaseClientFacingSource {
    id: string;
    user_id: string;
    priority_id: number;
    source_id: number;
    provider_id: string;
    timestamp: string;
    name: string;
    energy?: Energy;
    macros?: Macros;
    micros?: Micros;
    source: SourceClientFacing;
    created_at: string;
    updated_at: string;
  }
  export interface Energy {
    unit: "kcal";
    value: number;
  }
  export interface Macros {
    carbs?: number;
    protein?: number;
    fats?: Fats;
    alcohol?: number;
    water?: number;
    fibre?: number;
    sugar?: number;
  }
  export interface Fats {
    saturated?: number;
    monounsaturated?: number;
    polyunsaturated?: number;
    omega3?: number;
    omega6?: number;
    total?: number;
  }
  export interface Micros {
    minerals?: {
      [k: string]: number;
    };
    trace_elements?: {
      [k: string]: number;
    };
    vitamins?: {
      [k: string]: number;
    };
  }

  export interface ClientFacingMealResponse {
    meals: MealInDBBaseClientFacingSource[];
  }
  