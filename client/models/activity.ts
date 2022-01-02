import { SourceClientFacing } from './user_models';

export interface ClientFacingActivity {
  /**
   *
   * @type {string}
   * @memberof ClientFacingActivity
   */
  id: string;
  /**
   * Date for specified record
   * @type {Date}
   * @memberof ClientFacingActivity
   */
  date: Date;
  /**
   * Total energy consumption during the day including Basal Metabolic Rate in kilocalories.::kilocalories
   * @type {number}
   * @memberof ClientFacingActivity
   */
  calories_total: number;
  /**
   * Energy consumption caused by the physical activity of the day in kilocalories.::kilocalories
   * @type {number}
   * @memberof ClientFacingActivity
   */
  calories_active: number;
  /**
   * Total number of steps registered during the day.::steps
   * @type {number}
   * @memberof ClientFacingActivity
   */
  steps?: number;
  /**
   * Daily physical activity as equal meters i.e. amount of walking needed to get the same amount of activity.::meters
   * @type {number}
   * @memberof ClientFacingActivity
   */
  daily_movement?: number;
  /**
   * Number of minutes during the day with low intensity activity (e.g. household work).::minutes
   * @type {number}
   * @memberof ClientFacingActivity
   */
  low?: number;
  /**
   * Number of minutes during the day with medium intensity activity (e.g. walking).::minutes
   * @type {number}
   * @memberof ClientFacingActivity
   */
  medium?: number;
  /**
   * Number of minutes during the day with high intensity activity (e.g. running).::minutes
   * @type {number}
   * @memberof ClientFacingActivity
   */
  high?: number;
  /**
   * Source the data has come from.
   * @type {SourceClientFacing}
   * @memberof ClientFacingActivity
   */
  source: SourceClientFacing;
  user_id: string;
}

interface ClientFacingCholesterol {
  timestamp: Date;
  value: number;
  type: string;
  unit: string;
  user_id: string;
}

interface ClientFacingGlucose {
  timestamp: Date;
  value: number;
  type: string;
  unit: string;
  user_id: string;
  source_id: number;
  source: SourceClientFacing;
}

export interface ClientActivityResponse {
  activity: ClientFacingActivity[];
}

export interface ClientGlucoseResponse {
  glucose: ClientFacingGlucose[];
}

export interface ClientCholesterolResponse {
  cholesterol: ClientFacingCholesterol[];
}

export interface TimeseriesPoint {
  timestamp: Date;
  value: number;
  type: string;
  unit: string;
}

enum RespiratoryAllergen {
  D_PTERONYSSINUS = 'd_pteronyssinus',
  D_FARINAE = 'd_farinae',
  CAT_DANDER = 'cat_dander',
  DOG_DANDER = 'dog_dander',
  HORSE_DANDER = 'horse_dander',
  MOUSE_URINE = 'mouse_urine',
  COCKROACH = 'cockroach',
  ALTERNARIA_ALTERNATA = 'alternaria_alternata',
  ASPERGILLUS_FUMIGATUS = 'aspergillus_fumigatus',
  CLADOSPORIUM_HERBARUM = 'cladosporium_herbarum',
  PENICILLIUM_NOTATUM = 'penicillium_notatum',
  AUREOBASIDIUM_PULLULANS = 'aureobasidium_pullulans',
  BAHIA_GRASS = 'bahia_grass',
  BERMUDA_GRASS = 'bermuda_grass',
  JOHNSON_GRASS = 'johnson_grass',
  PERENNIAL_RYEGRASS = 'perennial_ryegrass',
  TIMOTHY_GRASS = 'timothy_grass',
  ACACIA = 'acacia',
  ALDER = 'alder',
  AUSTRALIAN_PINE = 'australian_pine',
  BIRCH = 'birch',
  COTTONWOOD = 'cottonwood',
  ELM = 'elm',
  MAPLE_BOX_ELDER = 'maple_box_elder',
  MAPLE_LEAF_SYCAMORE = 'maple_leaf_sycamore',
  MOUNTAIN_CEDAR = 'mountain_cedar',
  MULBERRY = 'mulberry',
  OAK = 'oak',
  OLIVE = 'olive',
  PECAN_HICKORY = 'pecan_hickory',
  WALNUT = 'walnut',
  WHITE_ASH = 'white_ash',
  COMMON_RAGWEED = 'common_ragweed',
  MUGWORT = 'mugwort',
  NETTLE = 'nettle',
  ROUGH_MARSH_ELDER = 'rough_marsh_elder',
  ROUGH_PIGWEED = 'rough_pigweed',
  RUSSIAN_THISTLE = 'russian_thistle',
  SHEEP_SORREL = 'sheep_sorrel',
  BLOMIA_TROPICALIS = 'blomia_tropicalis',
}

interface Ige {
  timestamp: Date;
  unit: string;
  user_id: string;
  order_id?: string;
  source_id: number;
  value: number;
  type: RespiratoryAllergen;
  priority_id?: number;
}

enum FoodAllergen {
  CHEDDAR_CHEESE = 'cheddar_cheese',
  COTTAGE_CHEESE = 'cottage_cheese',
  COW_MILK = 'cow_milk',
  MOZZARELLA_CHEESE = 'mozzarella_cheese',
  YOGURT = 'yogurt',
  EGG_WHITE = 'egg_white',
  EGG_YOLK = 'egg_yolk',
  APPLE = 'apple',
  AVOCADO = 'avocado',
  BANANA = 'banana',
  BLUEBERRY = 'blueberry',
  CANTALOUPE = 'cantaloupe',
  COCONUT = 'coconut',
  GRAPE = 'grape',
  GRAPEFRUIT = 'grapefruit',
  LEMON = 'lemon',
  ORANGE = 'orange',
  PEACH = 'peach',
  PEAR = 'pear',
  PINEAPPLE = 'pineapple',
  STRAWBERRY = 'strawberry',
  TOMATO = 'tomato',
  WATERMELON = 'watermelon',
  BAKERS_YEAST = 'bakers_yeast',
  BARLEY = 'barley',
  BRAN = 'bran',
  BREWERS_YEAST = 'brewers_yeast',
  BROWN_RICE = 'brown_rice',
  GLUTEN = 'gluten',
  MALT = 'malt',
  OATS = 'oats',
  RYE = 'rye',
  WHEAT = 'wheat',
  GREEN_BEAN = 'green_bean',
  GREEN_PEA = 'green_pea',
  LIMA_BEAN = 'lima_bean',
  PEANUT = 'peanut',
  SOYBEAN = 'soybean',
  BEEF = 'beef',
  CHICKEN = 'chicken',
  LAMB = 'lamb',
  PORK = 'pork',
  TURKEY = 'turkey',
  CLAM = 'clam',
  CODFISH = 'codfish',
  CRAB = 'crab',
  HADDOCK = 'haddock',
  LOBSTER = 'lobster',
  PRAWN = 'prawn',
  SALMON = 'salmon',
  SCALLOP = 'scallop',
  SOLE = 'sole',
  SWORDFISH = 'swordfish',
  TUNA = 'tuna',
  ALMOND = 'almond',
  BLACK_WALNUT = 'black_walnut',
  CASHEW = 'cashew',
  CHIA_SEED = 'chia_seed',
  SAFFLOWER = 'safflower',
  SESAME = 'sesame',
  SUNFLOWER = 'sunflower',
  ASPARAGUS = 'asparagus',
  BELL_PEPPER = 'bell_pepper',
  BROCCOLI = 'broccoli',
  CABBAGE = 'cabbage',
  CARROT = 'carrot',
  CAULIFLOWER = 'cauliflower',
  CELERY = 'celery',
  CORN = 'corn',
  CUCUMBER = 'cucumber',
  EGGPLANT = 'eggplant',
  GREEN_OLIVE = 'green_olive',
  KALE = 'kale',
  KELP = 'kelp',
  LETTUCE = 'lettuce',
  MUSHROOM = 'mushroom',
  ONION = 'onion',
  POTATO = 'potato',
  SPINACH = 'spinach',
  SQUASH = 'squash',
  SWEET_POTATO = 'sweet_potato',
  BASIL = 'basil',
  BAY_LEAF = 'bay_leaf',
  BLACK_PEPPER = 'black_pepper',
  BLACK_TEA = 'black_tea',
  COCOA = 'cocoa',
  COFFEE = 'coffee',
  COLA = 'cola',
  CINNAMON = 'cinnamon',
  DILL = 'dill',
  GARLIC = 'garlic',
  GINGER = 'ginger',
  HONEY = 'honey',
  MUSTARD = 'mustard',
  OREGANO = 'oregano',
  TARRAGON = 'tarragon',
}

interface Igg {
  timestamp: Date;
  unit: string;
  user_id: string;
  order_id: string;
  source_id: number;
  value: number;
  type: FoodAllergen;
  priority_id?: number;
}

export interface ClientIgeResponse {
  ige: Ige[];
}

export interface ClientIggResponse {
  igg: Igg[];
}

interface hba1c {
  timestamp: Date;
  unit: string;
  user_id: string;
  source_id: number;
  value: number;
  priority_id: number;
  type: string;
}

export interface ClientHba1cResponse {
  hba1c: hba1c[];
}
