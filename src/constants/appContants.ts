export const DASHBOARD_MODULE = "Dashboard";

/** Facility Lookup */
export const FACILITY_CREWS = "Facility.Crews";
export const FACILITY_SHIFTS = "Facility.Shifts";
export const FACILITY_DEPARTMENTS = "Facility.Departments";
export const WR_WORKREQUESTSTATUSES = "WR.WorkRequestStatuses";
export const WR_CRAFTS = "WR.Crafts";
export const WR_EMPLOYEES = "WR.Employees";
export const WR_WORKORDERTYPES = "WR.WorkOrderTypes";
export const WR_WORKORDERSUBTYPES = "WR.WorkOrderSubTypes";
export const WR_WORKORDERSUBSTATUSES = "WR.WorkOrderSubStatuses";
export const WR_FAILURECODES = "WR.FailureCodes";
export const WR_DEPARTMENTSRESPONSIBLE = "WR.DepartmentsResponsible";
export const WR_SEVERITIES = "WR.Severities";
export const WR_REJECTREASONS = "WR.RejectReasons";
export const WR_PRIORITIES = "WR.Priorities";
export const WR_PERMITS = "WR.Permits";
export const WR_ASSIGNEDTOS = "WR.AssignedTos";
export const WR_FACILITYINFO = "WR.FacilityInfo";
export const WR_STATUSES = "WR.Statuses";

// Data Grid Configuration
/**
 * ROW LAYOUTS describes different types of row sizes
 * @typedef ROW_LAYOUTS
 * @property {string} layoutName
 */
export const ROW_LAYOUTS = ["Roomy", "Comfortable", "Compact"];
/**
 * PAGE SIZE describes different types of page size lengths
 * @typedef PAGE_SIZE
 * @property {string} size
 */
export const PAGE_SIZE = ["50", "100", "500", "1000"];

// #region Local Storage
/**
 * NOTIFICATION KEY
 * @typedef NOTIFICATION_KEY
 * @property {string} value
 */
export const NOTIFICATION_KEY = "Core.Notifications";
// #endregion

// Work box settings
/**
 * APPLICATION SHELL
 * @typedef APPLICATION_SHELL
 * @property {string} value
 */
export const APPLICATION_SHELL = "application-shell";
// #region Index Db Databases


/**
 * Dashboard
 * @typedef DASHBOARD
 * @property {string} value
 */
export const DASHBOARD = "Dashboard";
/**
 * Application Configurations
 * @typedef CORE_STORE
 * @property {string} value
 */
export const CORE_STORE = "Core";
/** Facilities */
export const FACILITIES_MODULE = "FACILITIES";
export const FACILITY_CODE = "Core.FacilityCode";
export const FACILITY_AUTHORIZATION = "Core.FacilityAuth";
export const FACILITY_LOOKUPS = "FACILITY_LOOKUPS";
export const WR_AVAILABLE_STATUSES = "WR.AvailableStatuses";

/** Settings */
export const ROW_LAYOUT = "Core.DataGrid.RowLayout";
export const DEFAULT_LIMIT = "Core.DataGrid.ItemsPerPage";

/** App Configs */
export const APP_CONFIG_GLOBAL = "Global App Config";
export const APP_CONFIG_FACILITY = "Facility App Config";
export const APP_CONFIG = "App Config";
export const APP_CONFIG_MODIFICATION = "Modify App Config";

// #endregion

/**
 * ASSETS IMAGES
 * @typedef ASSETS_IMAGES
 * @property {string} value
 */
export const ASSETS_IMAGES = "assets-images";

// Dropdowns
/**
 * FEEDBACK_TYPES describes different types of feedback options
 * @typedef FEEDBACK_TYPES
 * @property {string} feedbacks
 */
export const FEEDBACK_TYPES = ["Suggest a feature", "Report an issue"];

// User Module
/**
 * UserSortControl describes different types of sort label/values
 * @typedef UserSortControl
 * @property {string} names
 */
export const USER_SORT_CONTROLS = [
  "name",
  "email",
  "department",
  "gender",
  "phone",
  "address",
];
/** Export const User Module
 *  @constant
 *  @type {string}
 *  @default
 */
export const USER_MODULE = "User";

/**
 * USER_BULK_ACTIONS describes different types of bulk operations available
 * @typedef USER_BULK_ACTIONS
 * @property {string} actions
 */
export const USER_BULK_ACTIONS = ["Delete", "Active", "Inactive"];

/**
 * BOOLEAN_VALUES describes boolen values
 * @constant
 * @typedef BOOLEAN_VALUES
 * @property {string} text
 * @property {string} id
 * @return {string} True/False
 */
export const BOOLEAN_VALUES = [
  { label: "(All)", value: "" },
  { label: "Checked", value: "true" },
  { label: "Not Checked", value: "false" },
];

/** GhaphQL_OPERATORS */
/** Export const CONTAINS_OP
 * @constant {string}
 */
export const CONTAINS_OP = "CTS";
/** Export const EQUALS_OP
 * @constant {string}
 */
export const EQUALS_OP = "eq";
/** Export const NOT_EQUALS_OP
 * @constant {string}
 */
export const NOT_EQUALS_OP = "neq";
/** Export const GREATER_THAN_OP
 * @constant {string}
 */
export const GREATER_THAN_OP = "gt";
/** Export const GREATER_THAN_EQUAL_OP
 * @constant {string}
 */
export const GREATER_THAN_EQUAL_OP = "gte";
/** Export const LESS_THAN_OP
 * @constant {string}
 */
export const LESS_THAN_OP = "lt";
/** Export const LESS_THAN_EQUAL_OP
 * @constant {string}
 */
export const LESS_THAN_EQUAL_OP = "lte";
/** Export const Starts_WITH_OP
 * @constant {string}
 */
export const STARTS_WITH_OP = "str";
/** Export const ENDS_WITH_OP
 * @constant {string}
 */
export const ENDS_WITH_OP = "end";

/** Preferences  */
export const PREFERENCES_TILELAYOUT = "Preferences_TileLayout";

/** Dashboard  */
export const DASHBOARD_TILELAYOUT = "Dashboard_TileLayout";

/** Authorization */
export const ACCESS_TOKEN = "Core.AccessToken";
export const ID_TOKEN = "Core.IdToken";
export const REFRESH_TOKEN = "Core.RefreshToken";
export const SKIP_SPLASH = "Core.SkipSplash";
export const PKCE_CODE_VERIFIER = "Core.PKCECodeVerifier";
export const EXPIRE_AT = "Core.Expires_at";
export const PATH = "Core.Path";

export const JWT_KEY = ID_TOKEN;
export const REFRESH_TIME_FACTOR = 0.8; // min value 0.1, max value 0.9
export const AUTH_CHECK_INTERVAL = 15000; // in milisecounds

/** Device */
export const DEVICE_TOKEN = "Core.DeviceToken";

export const EQUIPMENT_LOOKUPS = "EQUIPMENT_LOOKUPS";
export const Location_Hierarchy = "Location_Hierarchy";
export const Equipment_Hierarchy = "Equipment_Hierarchy";
export const WR_EQUIPMENTS = "WR.Equipments";
export const CORE_EQUIPMENTS = "Core.Equipments";
export const EQUIPMENT_LOOKUP = "Equipments";

/**
 * Workbox Startegy
 */
export const WorkboxStartegy = {
  NETWORKFIRST: "networkFirst",
  CACHEFIRST: "cacheFirst",
};

/** Export const SYNC_PROCESS_DELAY
 *  @constant
 *  @type {string}
 *  @default
 */

export const SYNC_PROCESS_INTERVAL = {
  /**
   * Facility Module
   */
  FACILITIES_MODULE: 320000,
  FACILITY_AUTHORIZATION: 301000,
  FACILITY_LOOKUPS: 601000,

  /**
   * Save App Config
   */
  APP_CONFIG_MODIFICATION: 120000,
};

/**
 * Default Grid filter operators:
 */
export const FilterOperators = {
  text: [
    { text: "grid.filterContainsOperator", operator: "contains" },
    { text: "grid.filterEqOperator", operator: "eq" },
    { text: "grid.filterNotEqOperator", operator: "neq" },
    { text: "grid.filterStartsWithOperator", operator: "startswith" },
    { text: "grid.filterEndsWithOperator", operator: "endswith" },
  ],
  numeric: [
    { text: "grid.filterEqOperator", operator: "eq" },
    { text: "grid.filterNotEqOperator", operator: "neq" },
    { text: "grid.filterGteOperator", operator: "gte" },
    { text: "grid.filterGtOperator", operator: "gt" },
    { text: "grid.filterLteOperator", operator: "lte" },
    { text: "grid.filterLtOperator", operator: "lt" },
  ],
  date: [
    { text: "grid.filterEqOperator", operator: "eq" },
    { text: "grid.filterNotEqOperator", operator: "neq" },
    { text: "grid.filterAfterOrEqualOperator", operator: "gte" },
    { text: "grid.filterAfterOperator", operator: "gt" },
    { text: "grid.filterBeforeOperator", operator: "lt" },
    { text: "grid.filterBeforeOrEqualOperator", operator: "lte" },
  ],
  boolean: [
    { text: "grid.filterEqOperator", operator: "eq" },
    { text: "grid.filterNotEqOperator", operator: "neq" },
  ],
};
