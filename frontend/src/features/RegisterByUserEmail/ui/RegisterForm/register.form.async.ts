import { FC, lazy } from "react";
import { RegisterFormProps } from "./register.form";

export const RegisterFormAsync = lazy<FC<RegisterFormProps>>(() => import('./register.form'));