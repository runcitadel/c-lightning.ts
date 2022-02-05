/**
 * lightning-createinvoice -- Low-level invoice creation
 * 
 * **createinvoice** *invstring* *label* *preimage* 
 * 
 */

/**
 * The **createinvoice** RPC command signs and saves an invoice into the
 * database.
 * 
 * The *invstring* parameter is of bolt11 form, but without the final
 * signature appended.  Minimal sanity checks are done.  (Note: if
 * **experimental-offers** is enabled, *invstring* can actually be an
 * unsigned bolt12 invoice).
 * 
 * The *label* must be a unique string or number (which is treated as a
 * string, so "01" is different from "1"); it is never revealed to other
 * nodes on the lightning network, but it can be used to query the status
 * of this invoice.
 * 
 * The *preimage* is the preimage to supply upon successful payment of
 * the invoice.
*/
export interface CreateinvoiceRequest {
  invstring: string;
  label: string | number;
  preimage: string;
}

export interface CreateinvoiceResponse {
  /**
   * the label for the invoice
   */
  label: string;
  /**
   * the bolt11 string (always present unless **bolt12** is)
   */
  bolt11?: string;
  /**
   * the bolt12 string instead of **bolt11** (**experimental-offers** only)
   */
  bolt12?: string;
  /**
   * the hash of the *payment_preimage* which will prove payment
   */
  payment_hash: /* hex */ string;
  /**
   * The amount of the invoice (if it has one)
   */
  amount_msat?: /* msat */ number;
  /**
   * Whether it has been paid, or can no longer be paid
   */
  status: "paid" | "expired" | "unpaid";
  /**
   * Description extracted from **bolt11** or **bolt12**
   */
  description: string;
  /**
   * UNIX timestamp of when invoice expires (or expired)
   */
  expires_at: /* u64 */ number;
  /**
   * Incrementing id for when this was paid (**status** *paid* only)
   */
  pay_index?: /* u64 */ number;
  /**
   * Amount actually received (**status** *paid* only)
   */
  amount_received_msat?: /* msat */ number;
  /**
   * UNIX timestamp of when invoice was paid (**status** *paid* only)
   */
  paid_at?: /* u64 */ number;
  /**
   * the proof of payment: SHA256 of this **payment_hash**
   */
  payment_preimage?: /* hex */ string;
  /**
   * the *id* of our offer which created this invoice (**experimental-offers** only).
   */
  local_offer_id?: /* hex */ string;
  /**
   * the optional *payer_note* from invoice_request which created this invoice (**experimental-offers** only).
   */
  payer_note?: string;
}

