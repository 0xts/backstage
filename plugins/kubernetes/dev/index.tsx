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
import { Entity } from '@backstage/catalog-model';
import { createDevApp } from '@backstage/dev-utils';
import { EntityProvider } from '@backstage/plugin-catalog-react';
import {
  EntityKubernetesContent,
  kubernetesPlugin,
  kubernetesApiRef,
  KubernetesApi,
} from '../src';
import {
  CustomObjectsByEntityRequest,
  FetchResponse,
  ObjectsByEntityResponse,
  WorkloadsByEntityRequest,
} from '@backstage/plugin-kubernetes-common';
import fixture1 from '../src/__fixtures__/1-deployments.json';
import fixture2 from '../src/__fixtures__/2-deployments.json';
import fixture3 from '../src/__fixtures__/1-cronjobs.json';
import fixture4 from '../src/__fixtures__/2-cronjobs.json';
import fixture5 from '../src/__fixtures__/1-rollouts.json';
import fixture6 from '../src/__fixtures__/3-ingresses.json';
import fixture7 from '../src/__fixtures__/2-statefulsets.json';
import { mockApis, TestApiProvider } from '@backstage/test-utils';
import { permissionApiRef } from '@backstage/plugin-permission-react';
import { StructuredMetadataTable } from '@backstage/core-components';
import { Socket } from '@backstage/plugin-kubernetes-react';

const mockEntity: Entity = {
  apiVersion: 'backstage.io/v1alpha1',
  kind: 'Component',
  metadata: {
    name: 'backstage',
    description: 'backstage.io',
    annotations: {
      'backstage.io/kubernetes-id': 'dice-roller',
    },
  },
  spec: {
    lifecycle: 'production',
    type: 'service',
    owner: 'user:guest',
  },
};

class MockKubernetesClient implements KubernetesApi {
  readonly resources: FetchResponse[];

  constructor(fixtureData: { [resourceType: string]: any[] }) {
    this.resources = Object.entries(fixtureData).flatMap(
      ([type, resources]) =>
        ({ type: type.toLocaleLowerCase('en-US'), resources } as FetchResponse),
    );
  }
  async proxyWs(options: {
    clusterName: string;
    path: string;
  }): Promise<Socket> {
    return new Socket(
      `ws://localhost/api/kuberntes/proxy/${options.path}?cluster=${options.clusterName}`,
      [
        'token',
        'binary.k8s.io',
        'Backstage-Cluster-Authorization-serviceAccount',
      ],
    );
  }
  async getPodLogs(_request: {
    podName: string;
    namespace: string;
    clusterName: string;
    containerName: string;
    token: string;
  }): Promise<string> {
    return await 'some logs';
  }
  async getWorkloadsByEntity(
    _request: WorkloadsByEntityRequest,
  ): Promise<ObjectsByEntityResponse> {
    return {
      items: [
        {
          cluster: { name: 'mock-cluster' },
          resources: this.resources,
          podMetrics: [],
          errors: [],
        },
      ],
    };
  }
  async getCustomObjectsByEntity(
    _request: CustomObjectsByEntityRequest,
  ): Promise<ObjectsByEntityResponse> {
    return {
      items: [
        {
          cluster: { name: 'mock-cluster' },
          resources: this.resources,
          podMetrics: [],
          errors: [],
        },
      ],
    };
  }

  async getObjectsByEntity(): Promise<ObjectsByEntityResponse> {
    return {
      items: [
        {
          cluster: { name: 'mock-cluster' },
          resources: this.resources,
          podMetrics: [],
          errors: [],
        },
      ],
    };
  }

  async getClusters(): Promise<{ name: string; authProvider: string }[]> {
    return [{ name: 'mock-cluster', authProvider: 'serviceAccount' }];
  }

  async getCluster(
    _clusterName: string,
  ): Promise<{ name: string; authProvider: string }> {
    return { name: 'mock-cluster', authProvider: 'serviceAccount' };
  }

  async proxy(_options: { clusterName: String; path: String }): Promise<any> {
    return {
      kind: 'Namespace',
      apiVersion: 'v1',
      metadata: {
        name: 'mock-ns',
      },
    };
  }
}

const metadata = {
  testA: 'stuff',
  testB: { testC: 'stuff' },
  testD: [{ testE: 'stuff' }],
};

createDevApp()
  .addPage({
    path: '/fixture-1',
    title: 'Fixture 1',
    element: (
      <TestApiProvider
        apis={[
          [kubernetesApiRef, new MockKubernetesClient(fixture1)],
          [permissionApiRef, mockApis.permission()],
        ]}
      >
        <EntityProvider entity={mockEntity}>
          <EntityKubernetesContent />
        </EntityProvider>
      </TestApiProvider>
    ),
  })
  .addPage({
    path: '/fixture-2',
    title: 'Fixture 2',
    element: (
      <TestApiProvider
        apis={[
          [kubernetesApiRef, new MockKubernetesClient(fixture2)],
          [permissionApiRef, mockApis.permission()],
        ]}
      >
        <EntityProvider entity={mockEntity}>
          <EntityKubernetesContent />
        </EntityProvider>
      </TestApiProvider>
    ),
  })
  .addPage({
    path: '/fixture-3',
    title: 'Fixture 3',
    element: (
      <TestApiProvider
        apis={[
          [kubernetesApiRef, new MockKubernetesClient(fixture3)],
          [permissionApiRef, mockApis.permission()],
        ]}
      >
        <EntityProvider entity={mockEntity}>
          <EntityKubernetesContent />
        </EntityProvider>
      </TestApiProvider>
    ),
  })
  .addPage({
    path: '/fixture-4',
    title: 'Fixture 4',
    element: (
      <TestApiProvider
        apis={[
          [kubernetesApiRef, new MockKubernetesClient(fixture4)],
          [permissionApiRef, mockApis.permission()],
        ]}
      >
        <EntityProvider entity={mockEntity}>
          <EntityKubernetesContent />
        </EntityProvider>
      </TestApiProvider>
    ),
  })
  .addPage({
    path: '/fixture-5',
    title: 'Fixture 5',
    element: (
      <TestApiProvider
        apis={[
          [kubernetesApiRef, new MockKubernetesClient(fixture5)],
          [permissionApiRef, mockApis.permission()],
        ]}
      >
        <EntityProvider entity={mockEntity}>
          <EntityKubernetesContent />
        </EntityProvider>
      </TestApiProvider>
    ),
  })
  .addPage({
    path: '/fixture-6',
    title: 'Fixture 6',
    element: (
      <TestApiProvider
        apis={[[kubernetesApiRef, new MockKubernetesClient(fixture6)]]}
      >
        <EntityProvider entity={mockEntity}>
          <EntityKubernetesContent />
        </EntityProvider>
      </TestApiProvider>
    ),
  })
  .addPage({
    path: '/fixture-7',
    title: 'Fixture 7',
    element: (
      <TestApiProvider
        apis={[[kubernetesApiRef, new MockKubernetesClient(fixture7)]]}
      >
        <EntityProvider entity={mockEntity}>
          <StructuredMetadataTable
            metadata={metadata}
            options={{ nestedValuesAsYaml: true }}
          />
          <EntityKubernetesContent />
        </EntityProvider>
      </TestApiProvider>
    ),
  })
  .registerPlugin(kubernetesPlugin)
  .render();
