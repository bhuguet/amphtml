/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AmpA4A} from '../../amp-a4a/0.1/amp-a4a';
import {base64UrlDecodeToBytes} from '../../../src/utils/base64';

/**
 * Purch base URL
 *
 * @type {string}
 * @private
 */
const PURCH_BASE_URL_ = 'https://ads.servebom.com/';

/** @const {string} */
const TAG = 'amp-ad-network-purch-impl';

export class AmpAdNetworkPurchImpl extends AmpA4A {

  /** @override */
  isValidElement() {
    return this.isAmpAdElement();
  }

  /** @override */
  delayAdRequestEnabled() {
    return true;
  }

  /** @override */
  getSigningServiceNames() {
    return ['cloudflare'];
  }

  /** @override */
  getAdUrl() {
    const o = '"p":'+ this.element.getAttribute('data-pid');
    return PURCH_BASE_URL_ + 'tmntag.js?v=1.2&fmt=amp&o={'+encodeURIComponent(o)+'}';
  }

}


AMP.extension('amp-ad-network-purch-impl', '0.1', AMP => {
  AMP.registerElement(
      'amp-ad-network-purch-impl', AmpAdNetworkPurchImpl);
});
