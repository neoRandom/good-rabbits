import dotenv from "dotenv";

/**
 * Properly loads the Environment Variables using `dotenv/config`
 *
 * Throws:
 * - an Error if there is no `.env` file
 * - `result.error` when failed to load the `.env` file
 * - If some env. variable is an empty string or `null`
 */
function loadEnv() {
    const result = dotenv.config();

    if (result.error) {
        throw result.error;
    }

    if (!result.parsed) {
        throw new Error("No '.env' file found or the file is empty");
    }

    Object.entries(result.parsed).forEach(([key, value]) => {
        if (value === undefined || value === "") {
            throw new Error(`Environment Variable '${key}' is empty or null`);
        }
    });
}

export default loadEnv;
