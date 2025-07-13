import axios from "axios";
import {
  ALLDATA,
  BASEURL,
  DOCTORAPPOINTMENT,
  GETADMINACCOUNT,
  GETALLDEACTIVEDOCTORS,
  GETALLDOCTORS,
  GETALLPATIENTSADMIN,
  GETAPPOINTMENT,
  GETDOCTORDATA,
  GETDOCTORTIMETABLE,
  GETDOCTORTIMETABLEADMIN,
  GETUSER,
  LOGIN,
  LOGOUT,
  POSTLOGIN,
  SESSIONCHECK,
  TOGGLE,
  UPDATED,
} from "../types/type";
import { useState } from "react";

export const changeDate = (date) => {
  const dateOfBirth = new Date(date);
  const mm =
    dateOfBirth.getUTCMonth() > 9
      ? `${dateOfBirth.getUTCMonth() + 1}`
      : `0${dateOfBirth.getUTCMonth() + 1}`;
  const dd =
    dateOfBirth.getDate() + 1 > 9
      ? `${dateOfBirth.getDate()}`
      : `0${dateOfBirth.getDate()}`;
  const ele = `${dateOfBirth.getFullYear()}-${mm}-${dd}`;
  return ele;
};
export const logData = () => {
  return {
    type: ALLDATA,
    data: "ahmed yahia",
    age: 22,
  };
};

export const toggleLogin = () => {
  return {
    type: TOGGLE,
  };
};

export const sessionCheck = () => {
  return async (disp) => {
    const res = await axios.get(`${BASEURL}/sessioncheck`, {
      withCredentials: true,
    });
    disp({ type: SESSIONCHECK, status: res.status });
  };
};

export const postLoginUser = (ele) => {
  console.log(ele);
  return async (disp) => {
    const res = await axios.post(`${BASEURL}/login`, ele, {
      withCredentials: true,
    });
    // if (res.status=== 200)
    disp({ type: POSTLOGIN, status: res.status });
  };
};
export const sessionLogOut = () => {
  return async (disp) => {
    const res = await axios.get(`${BASEURL}/logout`, {
      withCredentials: true,
    });
    console.log(res);
    // sessionCheck();
    disp({ type: LOGOUT, status: res.status });
  };
};

export const getAdminAcc = () => {
  return async (disp) => {
    const res = await axios.get(`${BASEURL}/admin/getadminaccount`, {
      withCredentials: true,
    });
    // console.log(res);
    disp({ type: GETADMINACCOUNT, data: res.data });
  };
};
export const updateAdminAcc = (ele) => {
  return async (disp) => {
    const res = await axios.patch(`${BASEURL}/admin/updateadminaccount`, ele, {
      withCredentials: true,
    });
    // console.log(res);
    disp({ type: GETADMINACCOUNT, data: res.data });
  };
};
export const getDoctorData = () => {
  return async (disp) => {
    const res = await axios.get(`${BASEURL}/doctor/getaccount`, {
      withCredentials: true,
    });
    disp({ type: GETDOCTORDATA, data: res.data });
  };
};
export const updateDoctorData = (ele) => {
  return async (disp) => {
    const res = await axios.patch(`${BASEURL}/doctor/updateaccount`, ele, {
      withCredentials: true,
    });
    disp({ type: GETDOCTORDATA, data: res.data });
  };
};

export const getDoctorTimeTable = () => {
  return async (disp) => {
    const res = await axios.get(`${BASEURL}/doctor/gettimetable`, {
      withCredentials: true,
    });
    disp({ type: GETDOCTORTIMETABLE, data: res.data });
  };
};
export const updateDoctorTimeTable = (data) => {
  console.log("data", data);
  return async (disp) => {
    const res = await axios.patch(`${BASEURL}/doctor/updatetimetable`, data, {
      withCredentials: true,
    });
    disp({ type: UPDATED, data: res.data });
  };
};

export const getAllDoctors = () => {
  return async (disp) => {
    const res = await axios.get(`${BASEURL}/admin/getalldoctors`, {
      withCredentials: true,
    });
    // console.log(res);
    disp({ type: GETALLDOCTORS, data: res.data });
  };
};
export const activeDoctor = (mobile) => {
  return async (disp) => {
    const res = await axios.patch(`${BASEURL}/admin/activedoctor/${mobile}`, {

    }, {withCredentials: true });
    // getAllDoctors();
    // disp({ type: GETALLDOCTORS, data: res.data });
  };
};
export const dactiveDoctor = (mobile) => {
  return async (disp) => {
    const res = await axios.patch(`${BASEURL}/admin/dactivedoctor/${mobile}`, {
      
    },{withCredentials: true });
    // getAllDoctors();
    // disp({ type: GETALLDOCTORS, data: res.data });
  };
};
export const getAllPatientsAdmin = () => {
  return async (disp) => {
    const res = await axios.get(`${BASEURL}/admin/getallpatientaccount`, {
      withCredentials: true,
    });
    disp({ type: GETALLPATIENTSADMIN, data: res.data });
  };
};
export const updatePatient = (id) => {
  return async (disp) => {
    const res = await axios.patch(`${BASEURL}/admin/updatepatientaccount/${id}`, {
    
    },{withCredentials: true });
    // disp({ type: GETALLPATIENTSADMIN, data: res.data });
  };
};
export const deletePatient = (id) => {
  return async (disp) => {
    const res = await axios.delete(`${BASEURL}/admin/deletepatienaccount/${id}`, {
      withCredentials: true,
    });
    console.log(res);
    // disp({ type: GETALLPATIENTSADMIN, data: res.data });
  };
};
export const createNewAcc = (ele) => {
  return async (disp) => {
    const res = await axios.post(`${BASEURL}/doctor/newaccount`, ele, {
     
    },{withCredentials: true });
    console.log(res);
    // disp({ type: GETALLPATIENTSADMIN, data: res.data });
  };
};

export const getDoctorTimeTableAdmin = (mobile) => {
  return async (disp) => {
    const res = await axios.get(`${BASEURL}/admin/getdoctoretimetable/${mobile}`, {
      withCredentials: true,
    });
    disp({ type: GETDOCTORTIMETABLEADMIN, data: res.data });
  };
};
export const updateDoctorTimeTableAdmin = (mobile, data) => {
  return async (disp) => {
    const res = await axios.patch(
      `${BASEURL}/admin/updatedoctoretimetable/${mobile}`,
      data,
      {
        withCredentials: true,
      }
    );

    disp({ type: UPDATED });
  };
};
export const getAllAppointments = (ele) => {
  return async (disp) => {
    const res = await axios.get(`${BASEURL}/admin/getappointment/${ele}`, {
      withCredentials: true,
    });
    disp({ type: GETAPPOINTMENT, data: res.data });
  };
};
export const getDoctorAppointments = () => {
  return async (disp) => {
    const res = await axios.get(`${BASEURL}/doctor/getappointment`, {
      withCredentials: true,
    });
    disp({ type: DOCTORAPPOINTMENT, data: res.data });
  };
};
export const getDactiveDoctors = () => {
  return async (disp) => {
    const res = await axios.get(`${BASEURL}/admin/getalldoctorsdactive`, {
      withCredentials: true,
    });
    disp({ type: GETALLDEACTIVEDOCTORS, data: res.data });
  };
};
