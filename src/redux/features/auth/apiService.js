import * as apiService from "../../api/apiService";
const NEXT_PUBLIC_API_BASE_URL = import.meta.env.VITE_DB_HOST;

export const adminLoginApi = async (payload) =>
  apiService.postData(
    `${NEXT_PUBLIC_API_BASE_URL}/admin/login`,
    payload
  );
export const adminSignupApi = async (payload) =>
  apiService.postData(
    `${NEXT_PUBLIC_API_BASE_URL}/admin/register`,
    payload
  );

  export const confirmAdminEmailApi = async (token) =>
  apiService.getData(
    `${NEXT_PUBLIC_API_BASE_URL}/admin/confirmEmail/${token}`
  );
  export const fetchAllUserApi = async (token) =>
  apiService.getData(
    `${NEXT_PUBLIC_API_BASE_URL}/user/all`
  );

  
// export const getTokenForUser = async (payload) =>
//   apiService.postDataWithOutAuth(
//     `https://api.dev.survey-one-apis.com/api/v1/authorization/token`,
//     payload
//   );

// export const getRespondentDetails = async (Username) =>
//   apiService.getData(
//     `https://api.dev.survey-one-apis.com/api/v1/taker/respondentByUsername/${Username}`
//   );

// export const getActiveSurveys = async (RespondentId) =>
//   apiService.getData(
//     `https://api.dev.survey-one-apis.com/api/v1/taker/activeSurveysByRespondentId/${RespondentId}`
//   );

// export const getSections = async (SurveyId) =>
//   apiService.getData(
//     `https://api.dev.survey-one-apis.com/api/v1/builder/sections/${SurveyId}`
//   );

// export const getSectionsByUser = async (payload) =>
//   apiService.getData(
//     `https://api.dev.survey-one-apis.com/api/v1/taker/sectionFilings/${payload.surveyFillingId}/${payload.surveyRespondentId}`
//   );

// export const getPages = async (SectionId) =>
//   apiService.getData(
//     `https://api.dev.survey-one-apis.com/api/v1/builder/pages/${SectionId}`
//   );

// export const getCountryCodes = async () =>
//   apiService.getData(
//     `https://api.dev.survey-one-apis.com/api/v1/builder/states`
//   );


// export const getSurveyLookupFiling = async (payload) =>
//   apiService.postData(
//     `https://api.dev.survey-one-apis.com/api/v1/panel/lookupFiling`,
//     payload
//   );

// export const getPageFilings = async (SurveyFilingId) =>
//   apiService.getData(
//     `https://api.dev.survey-one-apis.com/api/v1/taker/pageFilingsBySurveyFilingId/${SurveyFilingId}`
//   );

// export const getSectionFilings = async (SurveyFilingId) =>
//   apiService.getData(
//     `https://api.dev.survey-one-apis.com/api/v1/taker/sectionFilings/${SurveyFilingId}`
//   );

// export const getAllPages = async (SurveyId) =>
//   apiService.getData(
//     `https://api.dev.survey-one-apis.com/api/v1/builder/allSurveyPages/${SurveyId}`
//   );

// export const getProgress = async (surveyFilingId) =>
//   apiService.getData(
//     `https://api.dev.survey-one-apis.com/api/v1/taker/sectionFilings/${surveyFilingId}`
//   );

// export const saveAnswers = async (payload) =>
//   apiService.postData(
//     `https://api.dev.survey-one-apis.com/api/v1/taker/save`,
//     payload
//   );

// export const getPreviousPage = async (pageFilingId) =>
//   apiService.getData(
//     `https://api.dev.survey-one-apis.com/api/v1/taker/previousPageFiling/${pageFilingId}`
//   );

// export const getNextPage = async (pageFilingId) =>
//   apiService.getData(
//     `https://api.dev.survey-one-apis.com/api/v1/taker/nextPageFiling/${pageFilingId}`
//   );

// export const validatePage = async (payload) =>
//   apiService.postData(
//     `https://api.dev.survey-one-apis.com/api/v1/taker/validate`,
//     payload
//   );

// export const errorCorrectionQes = async (errorId) =>
//   apiService.getData(
//     `https://api.dev.survey-one-apis.com/api/v1/taker/displayErrorCorrectionPage/${errorId}`
//   );

// export const saveCorrectionQues = async (payload) =>
//   apiService.postData(
//     `https://api.dev.survey-one-apis.com/api/v1/taker/fixError`,
//     payload
//   );

// export const getPageDataOfLastYear = async (payload) =>
//   apiService.postData(
//     `https://api.dev.survey-one-apis.com/api/v1/taker/populatePageFilingHistory`,
//     payload
//   );

// export const getSectionErrors = async (payload) =>
//   apiService.getData(
//     `https://api.dev.survey-one-apis.com/api/v1/taker/errors/${payload.surveyFilingId}/${payload.sectionId}`
//   );

// export const getAllErrors = async (surveyFilingId) =>
//   apiService.getData(
//     `https://api.dev.survey-one-apis.com/api/v1/taker/errors/${surveyFilingId}`
//   );

// export const getHistoricalFiling = async (payload) =>
//   apiService.postData(
//     `https://api.dev.survey-one-apis.com/api/v1/taker/historicalFiling`,
//     payload
//   );

// export const getSurveyFilingDto = async (surveyFilingId) =>
//   apiService.getData(
//     `https://api.dev.survey-one-apis.com/api/v1/taker/surveyFiling/${surveyFilingId}`
//   );

// export const createSurveyHelper = async (payload) =>
//   apiService.postData(
//     `https://api.dev.survey-one-apis.com/api/v1/panel/surveyHelper`,
//     payload
//   );

// export const saveSurveySectionAssignments = async (payload) =>
//   apiService.postData(
//     `https://api.dev.survey-one-apis.com/api/v1/panel/sectionAssignments`,
//     payload
//   );

// export const getSurveyRespondents = async (surveyOrganizationId) =>
//   apiService.getData(
//     `https://api.dev.survey-one-apis.com/api/v1/panel/surveyRespondents/${surveyOrganizationId}`
//   );

// export const deleteSurveyRespondents = async (payload) =>
//   apiService.deleteMethod(
//     `https://api.dev.survey-one-apis.com/api/v1/panel/surveyHelper`,
//     payload
//   );
// export const updateSurveyRespondents = async (payload) =>
//   apiService.putData(
//     `https://api.dev.survey-one-apis.com/api/v1/panel/surveyRespondent`,
//     payload
//   );

// export const getSectionAssignments = async (payload) =>
//   apiService.getData(
//     `https://api.dev.survey-one-apis.com/api/v1/panel/sectionAssignments/${payload.surveyFilingId}/${payload.surveyRespondentId}`
//   );

// export const getSurveyProgressReport = async (surveyFilingId) =>
//   apiService.getData(
//     `https://api.dev.survey-one-apis.com/api/v1/taker/surveyProgressReport/${surveyFilingId}`
//   );
