import React from "react";
import styled from "styled-components";
import FileUpload from "./AnswerType/FileUpload";

import { GoogleFormProvider, useGoogleForm } from "react-google-forms-hooks";

import form from "./form.json";

// 'enter.1739071494': '',
//     'enter.547369603': '',
//     'enter.744689075': ''

import ShortAnswerInput from "./AnswerType/ShotAnswer";
import LongAnswerInput from "./AnswerType/longAnswer";


const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 50px 0;
`;

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const QuestionLabel = styled.h3`
  margin-bottom: 10px;
`;

const Questions = () => {
  return (
    <div>
      {form.fields.map((field) => {
        const { id } = field;

        let questionInput = null;
        switch (field.type) {
    
          case "SHORT_ANSWER":
            questionInput = <ShortAnswerInput id={id} />;
            break;
          case "LONG_ANSWER":
            questionInput = <LongAnswerInput id={id} />;
            break;
         
          default:
            return null;
        }

        if (!questionInput) {
          return null;
        }

        return (
          <QuestionContainer key={id}>
            <QuestionLabel>{field.label}</QuestionLabel>
            {/* <QuestionLabel>{field.label}</QuestionLabel> */}
            {questionInput}
          </QuestionContainer>
        );
      })}
    </div>
  );
};

const App = () => {
  const methods = useGoogleForm({ form });
  const onSubmit = async (data) => {
    console.log(">>> Here is the data", data);
    await methods.submitToGoogleForms(data);
    alert("Form submitted with success!");
  };

  console.log(">>> Here are the errors!!!", methods.formState.errors);

  return (
    <GoogleFormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Questions />
        <FileUpload />
        <button type="submit">Submit</button>
      </Form>
    </GoogleFormProvider>
  );
};

export default App;
