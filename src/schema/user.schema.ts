import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is required!",
    }),
    password: string({
      required_error: "Password is required!",
    })
      .min(8, "Password should be greater than 8 characters!")
      .max(25, "Password should be less than 25 characters!"),
    passwordConfirmation: string({
      required_error: "Password confirmation is required!",
    }),
    email: string({
      required_error: "Email address is required!",
    }).email("invalid email address!"),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Password does not match!",
    path: ["passwordConfirmation"],
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;
