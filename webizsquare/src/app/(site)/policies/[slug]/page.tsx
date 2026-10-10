import { getPayload } from 'payload';
import configPromise from '@/payload.config';
import React from 'react';
import { notFound } from 'next/navigation';

// A simple recursive renderer for Payload Lexical JSON
function serializeLexical(nodes: any[]): React.ReactNode[] {
  if (!nodes) return [];
  return nodes.map((node, index) => {
    if (node.type === 'text') {
      let text: React.ReactNode = <React.Fragment key={index}>{node.text}</React.Fragment>;
      if (node.format & 1) text = <strong key={index} className="text-gray-900 dark:text-white">{text}</strong>;
      if (node.format & 2) text = <em key={index}>{text}</em>;
      if (node.format & 16) text = <code key={index} className="bg-gray-100 dark:bg-gray-800 rounded px-1">{text}</code>;
      return text;
    }
    if (node.type === 'paragraph') {
      return <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">{serializeLexical(node.children)}</p>;
    }
    if (node.type === 'heading') {
      const Tag = node.tag as React.ElementType;
      const sizeClasses = {
        h1: 'text-4xl font-bold mb-6 mt-8 text-gray-900 dark:text-white',
        h2: 'text-3xl font-bold mb-5 mt-8 text-gray-900 dark:text-white',
        h3: 'text-2xl font-bold mb-4 mt-6 text-gray-900 dark:text-white',
        h4: 'text-xl font-bold mb-3 mt-4 text-gray-900 dark:text-white',
        h5: 'text-lg font-bold mb-2 mt-4 text-gray-900 dark:text-white',
        h6: 'text-base font-bold mb-2 mt-4 text-gray-900 dark:text-white',
      };
      const className = sizeClasses[Tag as keyof typeof sizeClasses] || sizeClasses.h2;
      return <Tag key={index} className={className}>{serializeLexical(node.children)}</Tag>;
    }
    if (node.type === 'list') {
      const Tag = (node.listType === 'number' ? 'ol' : 'ul') as React.ElementType;
      const className = node.listType === 'number' ? 'list-decimal ml-6 mb-6' : 'list-disc ml-6 mb-6';
      return <Tag key={index} className={className + " text-gray-700 dark:text-gray-300 space-y-2"}>{serializeLexical(node.children)}</Tag>;
    }
    if (node.type === 'listitem') {
      return <li key={index} className="pl-1">{serializeLexical(node.children)}</li>;
    }
    if (node.type === 'link') {
      return (
        <a key={index} href={node.fields?.url} className="text-[#ff5987] hover:underline">
          {serializeLexical(node.children)}
        </a>
      );
    }
    if (node.children) {
      return <React.Fragment key={index}>{serializeLexical(node.children)}</React.Fragment>;
    }
    return null;
  });
}

// Fallback content in case the DB doesn't have it yet
const getFallbackContent = (slug: string) => {
  const isPrivacy = slug === 'privacy-policy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions';
  
  return {
    title,
    content: (
      <>
        <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-white">Interpretation and Definitions</h2>
        <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">Interpretation</h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>
        
        <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">Definitions</h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">For the purposes of this {title}:</p>
        <ul className="list-disc ml-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li><strong className="text-gray-900 dark:text-white">Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
          <li><strong className="text-gray-900 dark:text-white">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Webiz Square, Nashik, Maharashtra.</li>
          <li><strong className="text-gray-900 dark:text-white">Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
          <li><strong className="text-gray-900 dark:text-white">Country</strong> refers to: Maharashtra, India.</li>
          <li><strong className="text-gray-900 dark:text-white">Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
          <li><strong className="text-gray-900 dark:text-white">Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
        </ul>

        {isPrivacy && (
          <>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-white">Collecting and Using Your Personal Data</h2>
            <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">Types of Data Collected</h3>
            <h4 className="text-lg font-bold mb-2 mt-4 text-gray-900 dark:text-white">Personal Data</h4>
            <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc ml-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Usage Data</li>
            </ul>
          </>
        )}
        
        <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl mt-12 border border-gray-200 dark:border-white/10">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is placeholder content. To edit this page, please log in to your Payload CMS Admin Panel at <strong>/admin</strong>, navigate to <strong>Policies</strong>, and create a new policy with the slug <strong>{slug}</strong>.
          </p>
        </div>
      </>
    )
  }
}

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  let dbPolicy = null;
  try {
    const payload = await getPayload({ config: configPromise });
    const { docs } = await payload.find({
      collection: 'policies',
      where: {
        slug: { equals: slug }
      },
      limit: 1
    });
    if (docs.length > 0) {
      dbPolicy = docs[0];
    }
  } catch (e) {
    console.error("Could not fetch policy", e);
  }

  const fallback = getFallbackContent(slug);
  
  const title = dbPolicy?.title || fallback.title;
  let contentNode = null;
  
  if (dbPolicy?.content && typeof dbPolicy.content === 'object' && 'root' in dbPolicy.content) {
    contentNode = serializeLexical(dbPolicy.content.root.children);
  } else {
    contentNode = fallback.content;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505]">
      {/* Banner */}
      <div className="relative h-[40vh] min-h-[350px] bg-[#111] flex items-center justify-center">
        {/* Abstract background graphics */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-gradient-to-r from-black/80 to-transparent z-10" />
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111]/80 to-[#111]" />
        </div>
        
        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">{title}</h1>
          <div className="w-24 h-1 bg-[#ff5987] mx-auto rounded-full" />
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-[900px] mx-auto px-6 py-20">
        <div className="bg-white dark:bg-[#050505]">
          {contentNode}
        </div>
      </div>
    </div>
  );
}
