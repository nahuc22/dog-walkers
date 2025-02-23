import { db } from "../db"; // Asegúrate de exportar tu instancia de Drizzle
import { eq } from "drizzle-orm";
import { usersTable } from "../db/schema/users";
import { UserRegistration , UserLogin } from "../schemas/userSchemas";
import { handleDrizzleError } from "./drizzleErrorHandler";
import { ServiceError } from "./serviceError";

function hash(value: string){
  return "@" + value ;
}

export async function registerUserService(userData: UserRegistration) {
    try {
        const insertResult = await db.insert(usersTable).values({
            name: userData.name, 
            email: userData.email,
            password: hash(userData.password), 
          }).$returningId();

          return insertResult[0];
  } catch (error) {
    handleDrizzleError(error);
  }
}

export async function loginUserService(LoginData: UserLogin) {
  const { email, password } = LoginData;

  try {
    const [user] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email))
      .limit(1) 
      .execute();

    if (!user) {
      throw new ServiceError("INVALID_USERNAME_OR_PASSWORD");
    }

    const isPasswordValid =  hash(password) === user.password;

    if (!isPasswordValid) {
        throw new ServiceError("INVALID_USERNAME_OR_PASSWORD")
    }
    return user;
  } catch (error) {
    handleDrizzleError(error)
  }
}
