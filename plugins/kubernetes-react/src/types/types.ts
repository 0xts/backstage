/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { JsonObject } from '@backstage/types';
import { Event } from 'event-target-shim';

/**
 * @public
 */
export interface ClusterLinksFormatterOptions {
  dashboardUrl?: URL;
  dashboardParameters?: JsonObject;
  object: any;
  kind: string;
}

/**
 * @public
 */
export interface ClusterLinksFormatter {
  formatClusterLink(options: ClusterLinksFormatterOptions): Promise<URL>;
}

/**
 * @public
 */
export type SocketEventMap = {
  connecting: Event<'connecting'>;
  connected: Event<'connected'>;
  disconnected: Event<'disconnected'> & CloseEvent;
  message: Event<'message'> & MessageEvent;
  connect_error: Event<'connect_error'>;
  disconnect_error: Event<'disconnect_error'>;
};
