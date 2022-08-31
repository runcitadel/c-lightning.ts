/**
 * lightning-checkmessage -- Command to check if a signature is from a node
 *
 * **checkmessage** *message* *zbase* [*pubkey*]
 *
 */

/**
 * The **checkmessage** RPC command is the counterpart to
 * **signmessage**: given a node id (*pubkey*), signature (*zbase*) and a
 * *message*, it verifies that the signature was generated by that node
 * for that message (more technically: by someone who knows that node's
 * secret).
 *
 * As a special case, if *pubkey* is not specified, we will try every
 * known node key (as per *listnodes*), and verification succeeds if it
 * matches for any one of them.  Note: this is implemented far more
 * efficiently than trying each one, so performance is not a concern.
 *
 * On failure, an error is returned and core lightning exit with the following error code:
 * - -32602: Parameter missed or malformed;
 * - 1301: *pubkey* not found in the graph.
 */
export interface CheckmessageRequest {
  message: string;
  zbase: string;
  pubkey?: string;
}

export interface CheckmessageResponse {
  /**
   * the *pubkey* parameter, or the pubkey found by looking for known nodes
   */
  pubkey: string;
  /**
   * whether the signature was valid
   */
  verified: boolean;
}
