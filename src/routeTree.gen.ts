/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as VideosImport } from './routes/videos'
import { Route as SearchImport } from './routes/search'
import { Route as NewsCatImport } from './routes/news.$cat'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const VideosRoute = VideosImport.update({
  path: '/videos',
  getParentRoute: () => rootRoute,
} as any)

const SearchRoute = SearchImport.update({
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const NewsCatRoute = NewsCatImport.update({
  path: '/news/$cat',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/videos': {
      id: '/videos'
      path: '/videos'
      fullPath: '/videos'
      preLoaderRoute: typeof VideosImport
      parentRoute: typeof rootRoute
    }
    '/news/$cat': {
      id: '/news/$cat'
      path: '/news/$cat'
      fullPath: '/news/$cat'
      preLoaderRoute: typeof NewsCatImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  SearchRoute,
  VideosRoute,
  NewsCatRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/search",
        "/videos",
        "/news/$cat"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/search": {
      "filePath": "search.tsx"
    },
    "/videos": {
      "filePath": "videos.tsx"
    },
    "/news/$cat": {
      "filePath": "news.$cat.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
