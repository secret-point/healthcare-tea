import React, { ReactElement } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { IQuizForm } from '~Root/services/quiz/types';

type FormQuizProps = {
  children: ReactElement;
};

export const FormQuiz = ({ children }: FormQuizProps) => {
  const methods = useForm<IQuizForm>();

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export const useFormQuiz = () => {
  const methods = useFormContext<IQuizForm>();

  return {
    ...methods,
  };
};
