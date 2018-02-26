/* global window */

// This file contains anything that we (regrettably)
// need to make available globally (i.e. on the `window` object)

// jquery-validation-unobtrusive 3.2.6 is a twat and needs global jquery
// 3.2.7 will fix this and the global exposition of jquery will no longer be needed
import $ from 'jquery';
window.jQuery = $;