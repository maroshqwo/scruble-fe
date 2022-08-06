import React, { FC, useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Heading,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as _ from "lodash";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  validateEmail,
  validatePassword,
  validatePasswordMatching,
  validateHandle,
} from "@/utils/validators";
import { useAuth } from "@/hooks/auth";
import { RegisterDto, RegisterValues } from "@/api/auth/types";

export type RegisterProps = {}

export const Register: FC<RegisterProps> = () => {
  const { register } = useAuth();
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (values: RegisterValues) => {
    if (values.password !== values.confirmPassword) {
      return;
    }
    register(_.omit(values, "confirmPassword"));
  };

  return (
    <>
      <Heading>Register</Heading>
      <Formik
        initialValues={{
          handle: "",
          email: "",
          password: "",
          confirmPassword: "",
          name: "",
        }}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.setSubmitting(false);
        }}
      >
        {(formProps) => (
          <Form>
            <Field name="handle" validate={validateHandle}>
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.handle && form.touched.handle}>
                  <FormLabel htmlFor="handle">Nickname</FormLabel>
                  <Input {...field} id="handle" placeholder="handle" />
                  <FormErrorMessage>{form.errors.handle}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email" validate={validateEmail}>
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.email && form.touched.email}>
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Input {...field} id="email" placeholder="email" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="name">
              {({ field, form }: any) => (
                <FormControl>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input {...field} id="name" placeholder="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password" validate={validatePassword}>
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.password && form.touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <InputGroup>
                    <Input
                      {...field}
                      id="password"
                      placeholder="password"
                      type={show === true ? "text" : "password"}
                    />
                    <InputRightElement>
                      <IconButton
                        bgColor="transparent"
                        h="1.75rem"
                        size="sm"
                        onMouseDown={() => setShow(true)}
                        onMouseUp={() => setShow(false)}
                        aria-label="Show password"
                        icon={show === true ? <ViewOffIcon /> : <ViewIcon />}
                      />
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field
              name="confirmPassword"
              validate={(pass = formProps.values.password, passC = formProps.values.password) => validatePasswordMatching(pass, passC)}
            >
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}
                >
                  <FormLabel htmlFor="confirmPassword">Confirm password</FormLabel>
                  <InputGroup>
                    <Input
                      {...field}
                      id="confirmPassword"
                      placeholder="confirmPassword"
                      type={showConfirm === true ? "text" : "password"}
                    />
                    <InputRightElement>
                      <IconButton
                        bgColor="transparent"
                        h="1.75rem"
                        size="sm"
                        onMouseDown={() => setShowConfirm(true)}
                        onMouseUp={() => setShowConfirm(false)}
                        aria-label="Show password"
                        icon={showConfirm === true ? <ViewOffIcon /> : <ViewIcon />}
                      />
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              type="submit"
              isLoading={formProps.isSubmitting}
              colorScheme="teal"
              mt={4}
              w="100%"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Register;
