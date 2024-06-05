/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface UserUndoDeleteRequest {
    /**
     * User ID to undo deletion. Mutually exclusive with `client_user_id`.
     */
    userId?: string;
    /**
     * Client User ID to undo deletion. Mutually exclusive with `user_id`.
     */
    clientUserId?: string;
}