import React from 'react'
import { Navigate } from "react-router-dom";

//Auth Pages
import PageLogin from "../pages/Pages/AuthPages/PageLogin";

import PageCoverLogin from "../pages/Pages/AuthPages/PageCoverLogin";

import PageLoginThree from "../pages/Pages/AuthPages/PageLoginThree";

import PageLoginFive from "../pages/Pages/AuthPages/PageLoginFive";

import PageSignup from "../pages/Pages/AuthPages/PageSignup";

import PageCoverSignup from "../pages/Pages/AuthPages/PageCoverSignup";

import PageSignupThree from "../pages/Pages/AuthPages/PageSignupThree";

import PageSignupFive from "../pages/Pages/AuthPages/PageSignupFive";

import PageCoverRePassword from "../pages/Pages/AuthPages/PageCoverRePassword";

import PageRecoveryPassword from "../pages/Pages/AuthPages/PageRecoveryPassword";

import PageRePasswordThree from "../pages/Pages/AuthPages/PageRePasswordThree";

import PageResetPassFive from "../pages/Pages/AuthPages/PageResetPassFive";


import AllCases from "../pages/Pages/CaseStudy/AllCases";
import CaseDetail from "../pages/Pages/CaseStudy/CaseDetail";

//Career
import Job from "../pages/Pages/DemoJob/Job";
import PageCompanyList from "../pages/Pages/DemoJob/PageCompanyList";
import JobListone from "../pages/Pages/DemoJob/JobListOne/JobListOne";
import JobListTwo from "../pages/Pages/DemoJob/JobListTwo";
import JobListThree from "../pages/Pages/DemoJob/JobListThree";
import JobListFour from "../pages/Pages/DemoJob/JobListFour";
import JobListFive from "../pages/Pages/DemoJob/JobListFive";
import PageJobDetail from "../pages/Pages/DemoJob/PageJobDetail";
import PageJobDetailTwo from "../pages/Pages/DemoJob/PageJobDetailTwo";
import PageJobApply from "../pages/Pages/DemoJob/PageJobApply";
import PageCandidateList from "../pages/Pages/DemoJob/PageCandidateList";
import PageJobCandidate from "../pages/Pages/DemoJob/PageJobCandidate";
import PageJobCompany from "../pages/Pages/DemoJob/PageJobCompany";
import JobAbout from "../pages/Pages/DemoJob/JobAbout";
import JobPrice from "../pages/Pages/DemoJob/JobPrice";
import JobFaq from "../pages/Pages/DemoJob/JobFaq";
import AuthLogin from "../pages/Pages/DemoJob/AuthLogin";
import AuthSignup from "../pages/Pages/DemoJob/AuthSignup";
import AuthReset from "../pages/Pages/DemoJob/AuthReset";

import PageJobDetailThree from "../pages/Pages/DemoJob/PageJobDetailThree";
import PageJobsSidebar from "../pages/Pages/Careers/PageJobsSidebar";
import PageJob from "../pages/Pages/Careers/PageJob";
//Footer layouts 
import PageFooterLayouts from "../pages/Pages/PageFooterLayouts/PageFooterLayouts";

const routes = [
  //Page Job
  { path: "/index-job", component: <Job />, isWithoutLayout: true },
  { path: "/job-list-one", component: <JobListone />, isWithoutLayout: true },
  { path: "/job-list-two", component: <JobListTwo />, isWithoutLayout: true },
  { path: "/job-list-three", component: <JobListThree />, isWithoutLayout: true },
  { path: "/job-list-four", component: <JobListFour />, isWithoutLayout: true },
  { path: "/job-list-five", component: <JobListFive />, isWithoutLayout: true },
  { path: "/job-detail-one", component: <PageJobDetail />, isWithoutLayout: true },
  { path: "/job-detail-two", component: <PageJobDetailTwo />, isWithoutLayout: true },
  { path: "/job-detail-three", component: <PageJobDetailThree />, isWithoutLayout: true },
  { path: "/job-apply", component: <PageJobApply />, isWithoutLayout: true },
  { path: "/job-candidate-list", component: <PageCandidateList />, isWithoutLayout: true },
  { path: "/job-candidate", component: <PageJobCandidate />, isWithoutLayout: true },
  { path: "/job-company-list", component: <PageCompanyList />, isWithoutLayout: true },
  { path: "/job-company", component: <PageJobCompany />, isWithoutLayout: true },
  { path: "/job-about", component: <JobAbout />, isWithoutLayout: true },
  { path: "/job-price", component: <JobPrice />, isWithoutLayout: true },
  { path: "/job-faqs", component: <JobFaq />, isWithoutLayout: true },
  { path: "/auth-bs-login", component: <AuthLogin />, isWithoutLayout: true },
  { path: "/auth-bs-signup", component: <AuthSignup />, isWithoutLayout: true },
  { path: "/auth-bs-reset", component: <AuthReset />, isWithoutLayout: true },

  { path: "/page-job", component: <PageJob />, isWithoutLayout: true },
  { path: "/page-jobs-sidebar", component: <PageJobsSidebar />, isWithoutLayout: true },

  //User Pages
  { path: "/auth-login", component: <PageLogin />, isWithoutLayout: true },
  {
    path: "/auth-cover-login",
    component: <PageCoverLogin />,
    isWithoutLayout: true,
  },
  {
    path: "/auth-login-three",
    component: <PageLoginThree />,
    isWithoutLayout: true,
  },

  {
    path: "/auth-login-bg-video",
    component: <PageLoginFive />,
    isWithoutLayout: true,
  },

  { path: "/auth-signup", component: <PageSignup />, isWithoutLayout: true },
  {
    path: "/auth-cover-signup",
    component: <PageCoverSignup />,
    isWithoutLayout: true,
  },
  {
    path: "/auth-signup-three",
    component: <PageSignupThree />,
    isWithoutLayout: true,
  },

  {
    path: "/auth-signup-bg-video",
    component: <PageSignupFive />,
    isWithoutLayout: true,
  },

  {
    path: "/auth-re-password",
    component: <PageRecoveryPassword />,
    isWithoutLayout: true,
  },
  {
    path: "/auth-cover-re-password",
    component: <PageCoverRePassword />,
    isWithoutLayout: true,
  },
  {
    path: "/auth-re-password-three",
    component: <PageRePasswordThree />,
    isWithoutLayout: true,
  },

  {
    path: "/auth-reset-password-bg-video",
    component: <PageResetPassFive />,
    isWithoutLayout: true,
  },

  { path: "/footer-layouts", component: <PageFooterLayouts /> },

  //Page Case Study
  { path: "/page-all-cases", component: <AllCases /> },
  { path: "/page-case-detail", component: <CaseDetail />, isTopbarDark: true },

  

  //Index Main
  {
    path: "/",
    exact: true,
    component: <Navigate to="/index" />,
  },
  //{ path: "/index", component: <Main />, isTopbarDark: true },
  { path: "/index", component: <Job />, isWithoutLayout: true },
];

export default routes;
