import configPromise from '@/payload.config'
import '@payloadcms/next/css'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import React from 'react'
import { importMap } from '../importMap'

type Args = {
  children: React.ReactNode
}

const serverFunction: any = async function (args: any) {
  'use server'
  return handleServerFunctions({
    ...args,
    config: configPromise,
    importMap,
  })
}

export default function Layout({ children }: Args) {
  return (
    // @ts-ignore - Attempting to pass suppressHydrationWarning to fix ColorZilla extension issues
    <RootLayout config={configPromise} importMap={importMap} serverFunction={serverFunction} suppressHydrationWarning>
      {children}
    </RootLayout>
  )
}

