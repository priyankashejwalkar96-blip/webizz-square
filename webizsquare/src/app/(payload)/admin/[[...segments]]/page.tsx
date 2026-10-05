import configPromise from '@/payload.config'
import { RootPage } from '@payloadcms/next/views'
import { importMap } from '../importMap'

export default function Page({
  params,
  searchParams,
}: {
  params: { segments: string[] }
  searchParams: { [key: string]: string | string[] }
}) {
  return RootPage({ config: configPromise, params, searchParams, importMap })
}
