import type { Metadata } from 'next'
import configPromise from '@/payload.config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const generateMetadata = async ({ params, searchParams }: Args): Promise<Metadata> => {
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams
  return generatePageMetadata({ config: configPromise, params: resolvedParams, searchParams: resolvedSearchParams })
}

export default async function Page({ params, searchParams }: Args) {
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams
  
  return RootPage({ 
    config: configPromise, 
    params: resolvedParams, 
    searchParams: resolvedSearchParams, 
    importMap 
  })
}
