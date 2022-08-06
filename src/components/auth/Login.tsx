import React, { FC } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Heading,
  InputRightElement,
  InputGroup,
  IconButton,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { LoginDto } from "@/api/auth/types";
import { useAuth } from "@/hooks/auth";
import { validateEmail, validatePassword } from "@/utils/validators";

export type LoginProps = {}

export const Login: FC<LoginProps> = (props) => {
  const { isLoggedIn, login } = useAuth();
  const [show, setShow] = React.useState(false);
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);

  const handleSubmit = (values: LoginDto) => {
    login(values).then(() => {
      if (isLoggedIn) {
        navigate("/");
      }
    });
  };

  return (
    <>
      <Heading>Login</Heading>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.setSubmitting(false);
        }}
      >
        {(formProps) => (
          <Form>
            <Field name="email">
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.email && form.touched.email}>
                  <FormLabel htmlFor="email">Email or nick</FormLabel>
                  <Input {...field} id="email" placeholder="email/nick" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password" validate={validatePassword}>
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
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
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
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
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
