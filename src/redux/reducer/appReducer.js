import {
  ALLDATA,
  GETADMINACCOUNT,
  GETALLDEACTIVEDOCTORS,
  GETALLDOCTORS,
  GETALLPATIENTSADMIN,
  GETAPPOINTMENT,
  GETDOCTORDATA,
  GETDOCTORTIMETABLE,
  GETDOCTORTIMETABLEADMIN,
  GETUSER,
  LOGOUT,
  POSTLOGIN,
  SESSIONCHECK,
  TOGGLE,
  DOCTORAPPOINTMENT,
} from "../types/type";

const Initial = {
  loginOrRegister: true,
  doctorData: {},
  doctorTimeTable: {},
  loginStatus: 0,
  admin: {},
  allDoctors: [],
  adminAllPatient: [],
  doctorTimeTableAdmin: {},
  allAppointment: [],
  allDactiveDoctors: [],
  DoctorAppointment: [],
};

export const appReducer = (state = Initial, action) => {
  switch (action.type) {
    case SESSIONCHECK:
      return { ...state, loginStatus: action.status };
    case POSTLOGIN:
      return { ...state, loginStatus: action.status };
    case LOGOUT:
      return { ...state, loginStatus: action.status };
    case GETADMINACCOUNT:
      return { ...state, admin: action.data };
    case GETALLPATIENTSADMIN:
      return { ...state, adminAllPatient: action.data };
    case TOGGLE:
      return { ...state, loginOrRegister: !state.loginOrRegister };
    case GETDOCTORDATA:
      return { ...state, doctorData: action.data };
    case GETDOCTORTIMETABLE:
      return { ...state, doctorTimeTable: action.data };
    case GETDOCTORTIMETABLEADMIN:
      return { ...state, doctorTimeTableAdmin: action.data };
    case GETALLDOCTORS:
      return { ...state, allDoctors: action.data };
    case GETAPPOINTMENT:
      return { ...state, allAppointment: action.data };
    case GETALLDEACTIVEDOCTORS:
      return { ...state, allDactiveDoctors: action.data };
    case DOCTORAPPOINTMENT:
      return { ...state, DoctorAppointment: action.data };
    default:
      return { ...state };
  }
};
