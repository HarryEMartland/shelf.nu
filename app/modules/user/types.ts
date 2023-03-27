import type { User } from "@prisma/client";

export interface UpdateUserPayload {
  id: User["id"];
  username?: User["username"];
  firstName?: User["firstName"];
  lastName?: User["lastName"];
  profilePicture?: User["profilePicture"];
}

export interface UpdateUserResponse {
  user: User | null;
  errors: {
    /** key is the field name, value is the error message */
    [k: string]: string | unknown;
  } | null;

  /** Used when sending a pwd reset link for the user */
  passwordReset?: boolean;
}
