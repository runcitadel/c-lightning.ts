/**
 * lightning-fundchannel\_start -- Command for initiating channel establishment for a lightning channel
 * 
 * **fundchannel\_start** *id* *amount* \[*feerate* *announce* *close_to* *push_msat*\] 
 * 
 */

/**
 * `fundchannel_start` is a lower level RPC command. It allows a user to
 * initiate channel establishment with a connected peer.
 * 
 * *id* is the node id of the remote peer.
 * 
 * *amount* is the satoshi value that the channel will be funded at. This
 * value MUST be accurate, otherwise the negotiated commitment transactions
 * will not encompass the correct channel value.
 * 
 * *feerate* is an optional field. Sets the feerate for subsequent
 * commitment transactions: see **fundchannel**.
 * 
 * *announce* whether or not to announce this channel.
 * 
 * *close_to* is a Bitcoin address to which the channel funds should be sent to
 * on close. Only valid if both peers have negotiated `option_upfront_shutdown_script`.
 * Returns `close_to` set to closing script iff is negotiated.
 * 
 * *push_msat* is the amount of millisatoshis to push to the channel peer at
 * open. Note that this is a gift to the peer -- these satoshis are
 * added to the initial balance of the peer at channel start and are largely
 * unrecoverable once pushed.
 * 
 * Note that the funding transaction MUST NOT be broadcast until after
 * channel establishment has been successfully completed by running
 * `fundchannel_complete`, as the commitment transactions for this channel
 * are not secured until the complete command succeeds. Broadcasting
 * transaction before that can lead to unrecoverable loss of funds.
*/
export interface FundchannelStartRequest {
  id: /* GUESSED */ string;
  amount: /* GUESSED */ string;
  feerate?: /* GUESSED */ string;
}

export interface FundchannelStartResponse {
    /**
     * The raw scriptPubkey which mutual close will go to; only present if *close_to* parameter
     * was specified and peer supports `option_upfront_shutdown_script`
     */
    close_to?: string;
    /**
     * The address to send funding to for the channel
     */
    funding_address: string;
    /**
     * The raw scriptPubkey for the address
     */
    scriptpubkey: string;
}

