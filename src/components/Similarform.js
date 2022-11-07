// import React from 'react'
// import {
//     GoogleFormProvider,
//     useGoogleForm,
//     googleFormsToJson
//   } from "react-google-forms-hooks";

// const Similarform = () => {
//     const methods = useGoogleForm({ data });
//     googleFormsToJson(
//       "https://docs.google.com/forms/d/e/1FAIpQLSci90evhCvCcMpQ3w7MYrPVcbllSlvKF66yM_adE47JSrCZ_A/viewform?usp=sf_link"
//     )
//       .then((response) => console.log(response))
//       .catch((error) => console.log(error));
  
//     const onSubmit = async (data) => {
//       console.log("data", data);
//       await methods.submitToGoogleForms(data);
//       alert("Form submitted with success!");
//     };
  
//     console.log(">>> Here are the errors!!!", methods.formState.errors);
  
//     return (
//       <GoogleFormProvider {...methods}>
//         <form onSubmit={methods.handleSubmit(onSubmit)}>
//           <Questions />
//           <button type="submit">Submit</button>
//         </form>
//         <iframe
//           src="https://docs.google.com/forms/d/e/1FAIpQLSe-hkIF_aUC2xfql5Q2A8TgFNbEhfHaY_sL4zzR7_vyfw77ng/viewform?usp=sf_link"
//           width="640"
//           height="1242"
//           frameBorder="0"
//           marginHeight={0}
//           marginWidth={0}
//         ></iframe>
//       </GoogleFormProvider>
//     );
//   };


// export default Similarform