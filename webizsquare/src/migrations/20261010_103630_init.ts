import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_services_services_icon" AS ENUM('globe', 'smartphone', 'pen-tool', 'share', 'search', 'bar-chart', 'bot', 'zap');
  CREATE TYPE "public"."enum_services_icon" AS ENUM('Layout', 'Smartphone', 'Database', 'Search', 'Globe', 'PenTool', 'Share2', 'Bot', 'Zap', 'Shield');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"headline" varchar NOT NULL,
  	"subheadline" varchar,
  	"background_image_id" integer,
  	"cta_text" varchar,
  	"cta_link" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_about_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"heading" varchar NOT NULL,
  	"desc" varchar NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "pages_blocks_about_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_about" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"headline" varchar DEFAULT 'About' NOT NULL,
  	"highlighted_word" varchar DEFAULT 'Webiz Square' NOT NULL,
  	"subheadline" varchar DEFAULT 'As a leading Digital Agency, we offer strategic solutions tailored to elevate your brand''s digital presence.' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_brands_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "pages_blocks_brands" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"headline" varchar DEFAULT 'Brands We' NOT NULL,
  	"highlighted_word" varchar DEFAULT 'Work With' NOT NULL,
  	"subheadline" varchar DEFAULT 'Trusted by leading brands across industries driving digital transformation.' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_services_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"icon" "enum_pages_blocks_services_services_icon" NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "pages_blocks_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"headline" varchar DEFAULT 'Our' NOT NULL,
  	"highlighted_word" varchar DEFAULT 'Services' NOT NULL,
  	"subheadline" varchar DEFAULT 'End-to-end digital solutions that drive measurable growth.' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_portfolio_projects_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_portfolio_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"category" varchar NOT NULL,
  	"stat" varchar NOT NULL,
  	"client" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"desc" varchar NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "pages_blocks_portfolio" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'PROVEN TRACK RECORD' NOT NULL,
  	"headline" varchar DEFAULT 'Transformative' NOT NULL,
  	"highlighted_word" varchar DEFAULT 'Success' NOT NULL,
  	"subheadline" varchar DEFAULT 'Discover how our bespoke strategies brought victory to our clients.' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_stats_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"headline" varchar DEFAULT 'Numbers That' NOT NULL,
  	"highlighted_word" varchar DEFAULT 'Speak' NOT NULL,
  	"subheadline" varchar DEFAULT 'We are proud of the impact we''ve made globally.' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonials_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" varchar NOT NULL,
  	"tag" varchar NOT NULL,
  	"location" varchar NOT NULL,
  	"quote" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"headline" varchar DEFAULT 'What Our' NOT NULL,
  	"highlighted_word" varchar DEFAULT 'Clients Say' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"headline" varchar DEFAULT 'Frequently Asked' NOT NULL,
  	"highlighted_word" varchar DEFAULT 'Questions' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_contact_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"headline" varchar DEFAULT 'Ready to' NOT NULL,
  	"highlighted_word" varchar DEFAULT 'Transform' NOT NULL,
  	"headline_end" varchar DEFAULT 'Your Business?' NOT NULL,
  	"form_title" varchar DEFAULT 'Get Your Free Growth Audit' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"caption" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_hero_url" varchar,
  	"sizes_hero_width" numeric,
  	"sizes_hero_height" numeric,
  	"sizes_hero_mime_type" varchar,
  	"sizes_hero_filesize" numeric,
  	"sizes_hero_filename" varchar
  );
  
  CREATE TABLE "services_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature" varchar NOT NULL
  );
  
  CREATE TABLE "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"image_id" integer NOT NULL,
  	"icon" "enum_services_icon" NOT NULL,
  	"is_active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "policies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"content" jsonb NOT NULL,
  	"last_updated" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"pages_id" integer,
  	"media_id" integer,
  	"services_id" integer,
  	"policies_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_settings_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"header_cta_label" varchar,
  	"header_cta_url" varchar,
  	"copyright_text" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "about_company_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "about_company_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "about_story_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "about_story_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "about_values" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"icon_name" varchar NOT NULL
  );
  
  CREATE TABLE "about_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "about_team_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "about" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_headline" varchar DEFAULT 'About',
  	"hero_highlighted_word" varchar DEFAULT 'Webiz Square',
  	"hero_description" varchar DEFAULT 'We are a team of digital marketing experts, AI engineers, and creative strategists dedicated to helping businesses achieve extraordinary growth.',
  	"company_highlights_title" varchar DEFAULT 'Company Highlights',
  	"company_highlights_subtitle" varchar DEFAULT 'Rapid business growth, real results.',
  	"story_headline" varchar DEFAULT 'Our',
  	"story_highlighted_word" varchar DEFAULT 'Story',
  	"story_highlight_text" varchar DEFAULT 'Today, we combine cutting-edge technology with proven marketing strategies to empower our clients in a fast-evolving digital landscape.',
  	"values_headline" varchar DEFAULT 'Our Core',
  	"values_highlighted_word" varchar DEFAULT 'Values',
  	"values_subtitle" varchar DEFAULT 'The principles that guide everything we do',
  	"journey_headline" varchar DEFAULT 'Our',
  	"journey_highlighted_word" varchar DEFAULT 'Journey',
  	"journey_subtitle" varchar DEFAULT 'Key milestones in our growth story',
  	"team_headline" varchar DEFAULT 'Our',
  	"team_highlighted_word" varchar DEFAULT 'Team',
  	"team_subtitle" varchar DEFAULT 'A diverse team of experts working together to deliver exceptional results.',
  	"cta_headline" varchar DEFAULT 'Ready to Work Together?',
  	"cta_subtitle" varchar DEFAULT 'Find out how we can help grow your business with our proven strategies and AI-powered custom software solutions.',
  	"cta_button_text" varchar DEFAULT 'Contact Us Today',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "contact_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge_text" varchar DEFAULT 'Contact Webiz Square',
  	"hero_headline" varchar DEFAULT 'Let''s Start a',
  	"hero_highlighted_word" varchar DEFAULT 'Conversation',
  	"hero_description" varchar DEFAULT 'Have questions? We''d love to hear from you. Share a few details and we''ll respond as soon as possible.',
  	"whatsapp_button_text" varchar DEFAULT 'Chat on WhatsApp',
  	"call_button_text" varchar DEFAULT 'Call Now',
  	"contact_headline" varchar DEFAULT 'Get in',
  	"contact_highlighted_word" varchar DEFAULT 'Touch',
  	"phone_number" varchar DEFAULT '+91 91729 44434',
  	"email_address" varchar DEFAULT 'hello@webizsquare.com',
  	"location_text" varchar DEFAULT 'Webiz Square HQ, College Road,
  Nashik, Maharashtra 422005',
  	"business_hours" varchar DEFAULT 'Mon - Sat: 9:00 AM - 6:00 PM',
  	"form_title" varchar DEFAULT 'Send us a Message',
  	"form_subtitle" varchar DEFAULT 'We''ll get back within 24 hours.',
  	"form_button_text" varchar DEFAULT 'Get Growth Audit',
  	"map_headline" varchar DEFAULT 'Visit Our',
  	"map_highlighted_word" varchar DEFAULT 'Office',
  	"map_subtitle" varchar DEFAULT 'We''re located in Nashik, Maharashtra. Feel free to drop by for a coffee and discuss your next big idea during business hours.',
  	"map_embed_url" varchar DEFAULT 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.38706385208!2d73.72107759882206!3d20.000109968434692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdebaa0967d1655%3A0xc07a216fcb11a5dc!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714488390772!5m2!1sen!2sin',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_about_tabs" ADD CONSTRAINT "pages_blocks_about_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_about_tabs" ADD CONSTRAINT "pages_blocks_about_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_about_stats" ADD CONSTRAINT "pages_blocks_about_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_about" ADD CONSTRAINT "pages_blocks_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_brands_logos" ADD CONSTRAINT "pages_blocks_brands_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_brands_logos" ADD CONSTRAINT "pages_blocks_brands_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_brands"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_brands" ADD CONSTRAINT "pages_blocks_brands_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_services" ADD CONSTRAINT "pages_blocks_services_services_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_services" ADD CONSTRAINT "pages_blocks_services_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_services" ADD CONSTRAINT "pages_blocks_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio_projects_tags" ADD CONSTRAINT "pages_blocks_portfolio_projects_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_portfolio_projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio_projects" ADD CONSTRAINT "pages_blocks_portfolio_projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio_projects" ADD CONSTRAINT "pages_blocks_portfolio_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_portfolio"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio" ADD CONSTRAINT "pages_blocks_portfolio_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats_stats" ADD CONSTRAINT "pages_blocks_stats_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats" ADD CONSTRAINT "pages_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_faqs" ADD CONSTRAINT "pages_blocks_faq_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq" ADD CONSTRAINT "pages_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_bullets" ADD CONSTRAINT "pages_blocks_contact_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact" ADD CONSTRAINT "pages_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_features" ADD CONSTRAINT "services_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_policies_fk" FOREIGN KEY ("policies_id") REFERENCES "public"."policies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_header_links" ADD CONSTRAINT "site_settings_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_footer_links" ADD CONSTRAINT "site_settings_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_company_stats" ADD CONSTRAINT "about_company_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_company_bullets" ADD CONSTRAINT "about_company_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_story_paragraphs" ADD CONSTRAINT "about_story_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_story_stats" ADD CONSTRAINT "about_story_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_values" ADD CONSTRAINT "about_values_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_timeline" ADD CONSTRAINT "about_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_team_stats" ADD CONSTRAINT "about_team_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_background_image_idx" ON "pages_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_about_tabs_order_idx" ON "pages_blocks_about_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_about_tabs_parent_id_idx" ON "pages_blocks_about_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_about_tabs_image_idx" ON "pages_blocks_about_tabs" USING btree ("image_id");
  CREATE INDEX "pages_blocks_about_stats_order_idx" ON "pages_blocks_about_stats" USING btree ("_order");
  CREATE INDEX "pages_blocks_about_stats_parent_id_idx" ON "pages_blocks_about_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_about_order_idx" ON "pages_blocks_about" USING btree ("_order");
  CREATE INDEX "pages_blocks_about_parent_id_idx" ON "pages_blocks_about" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_about_path_idx" ON "pages_blocks_about" USING btree ("_path");
  CREATE INDEX "pages_blocks_brands_logos_order_idx" ON "pages_blocks_brands_logos" USING btree ("_order");
  CREATE INDEX "pages_blocks_brands_logos_parent_id_idx" ON "pages_blocks_brands_logos" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_brands_logos_image_idx" ON "pages_blocks_brands_logos" USING btree ("image_id");
  CREATE INDEX "pages_blocks_brands_order_idx" ON "pages_blocks_brands" USING btree ("_order");
  CREATE INDEX "pages_blocks_brands_parent_id_idx" ON "pages_blocks_brands" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_brands_path_idx" ON "pages_blocks_brands" USING btree ("_path");
  CREATE INDEX "pages_blocks_services_services_order_idx" ON "pages_blocks_services_services" USING btree ("_order");
  CREATE INDEX "pages_blocks_services_services_parent_id_idx" ON "pages_blocks_services_services" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_services_services_image_idx" ON "pages_blocks_services_services" USING btree ("image_id");
  CREATE INDEX "pages_blocks_services_order_idx" ON "pages_blocks_services" USING btree ("_order");
  CREATE INDEX "pages_blocks_services_parent_id_idx" ON "pages_blocks_services" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_services_path_idx" ON "pages_blocks_services" USING btree ("_path");
  CREATE INDEX "pages_blocks_portfolio_projects_tags_order_idx" ON "pages_blocks_portfolio_projects_tags" USING btree ("_order");
  CREATE INDEX "pages_blocks_portfolio_projects_tags_parent_id_idx" ON "pages_blocks_portfolio_projects_tags" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portfolio_projects_order_idx" ON "pages_blocks_portfolio_projects" USING btree ("_order");
  CREATE INDEX "pages_blocks_portfolio_projects_parent_id_idx" ON "pages_blocks_portfolio_projects" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portfolio_projects_image_idx" ON "pages_blocks_portfolio_projects" USING btree ("image_id");
  CREATE INDEX "pages_blocks_portfolio_order_idx" ON "pages_blocks_portfolio" USING btree ("_order");
  CREATE INDEX "pages_blocks_portfolio_parent_id_idx" ON "pages_blocks_portfolio" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portfolio_path_idx" ON "pages_blocks_portfolio" USING btree ("_path");
  CREATE INDEX "pages_blocks_stats_stats_order_idx" ON "pages_blocks_stats_stats" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats_stats_parent_id_idx" ON "pages_blocks_stats_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stats_order_idx" ON "pages_blocks_stats" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats_parent_id_idx" ON "pages_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stats_path_idx" ON "pages_blocks_stats" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonials_testimonials_order_idx" ON "pages_blocks_testimonials_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_testimonials_parent_id_idx" ON "pages_blocks_testimonials_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_order_idx" ON "pages_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_parent_id_idx" ON "pages_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_path_idx" ON "pages_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_faqs_order_idx" ON "pages_blocks_faq_faqs" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_faqs_parent_id_idx" ON "pages_blocks_faq_faqs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_order_idx" ON "pages_blocks_faq" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_parent_id_idx" ON "pages_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_path_idx" ON "pages_blocks_faq" USING btree ("_path");
  CREATE INDEX "pages_blocks_contact_bullets_order_idx" ON "pages_blocks_contact_bullets" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_bullets_parent_id_idx" ON "pages_blocks_contact_bullets" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_order_idx" ON "pages_blocks_contact" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_parent_id_idx" ON "pages_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_path_idx" ON "pages_blocks_contact" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_hero_sizes_hero_filename_idx" ON "media" USING btree ("sizes_hero_filename");
  CREATE INDEX "services_features_order_idx" ON "services_features" USING btree ("_order");
  CREATE INDEX "services_features_parent_id_idx" ON "services_features" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "services_slug_idx" ON "services" USING btree ("slug");
  CREATE INDEX "services_image_idx" ON "services" USING btree ("image_id");
  CREATE INDEX "services_updated_at_idx" ON "services" USING btree ("updated_at");
  CREATE INDEX "services_created_at_idx" ON "services" USING btree ("created_at");
  CREATE UNIQUE INDEX "policies_slug_idx" ON "policies" USING btree ("slug");
  CREATE INDEX "policies_updated_at_idx" ON "policies" USING btree ("updated_at");
  CREATE INDEX "policies_created_at_idx" ON "policies" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_services_id_idx" ON "payload_locked_documents_rels" USING btree ("services_id");
  CREATE INDEX "payload_locked_documents_rels_policies_id_idx" ON "payload_locked_documents_rels" USING btree ("policies_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "site_settings_header_links_order_idx" ON "site_settings_header_links" USING btree ("_order");
  CREATE INDEX "site_settings_header_links_parent_id_idx" ON "site_settings_header_links" USING btree ("_parent_id");
  CREATE INDEX "site_settings_footer_links_order_idx" ON "site_settings_footer_links" USING btree ("_order");
  CREATE INDEX "site_settings_footer_links_parent_id_idx" ON "site_settings_footer_links" USING btree ("_parent_id");
  CREATE INDEX "site_settings_logo_idx" ON "site_settings" USING btree ("logo_id");
  CREATE INDEX "about_company_stats_order_idx" ON "about_company_stats" USING btree ("_order");
  CREATE INDEX "about_company_stats_parent_id_idx" ON "about_company_stats" USING btree ("_parent_id");
  CREATE INDEX "about_company_bullets_order_idx" ON "about_company_bullets" USING btree ("_order");
  CREATE INDEX "about_company_bullets_parent_id_idx" ON "about_company_bullets" USING btree ("_parent_id");
  CREATE INDEX "about_story_paragraphs_order_idx" ON "about_story_paragraphs" USING btree ("_order");
  CREATE INDEX "about_story_paragraphs_parent_id_idx" ON "about_story_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "about_story_stats_order_idx" ON "about_story_stats" USING btree ("_order");
  CREATE INDEX "about_story_stats_parent_id_idx" ON "about_story_stats" USING btree ("_parent_id");
  CREATE INDEX "about_values_order_idx" ON "about_values" USING btree ("_order");
  CREATE INDEX "about_values_parent_id_idx" ON "about_values" USING btree ("_parent_id");
  CREATE INDEX "about_timeline_order_idx" ON "about_timeline" USING btree ("_order");
  CREATE INDEX "about_timeline_parent_id_idx" ON "about_timeline" USING btree ("_parent_id");
  CREATE INDEX "about_team_stats_order_idx" ON "about_team_stats" USING btree ("_order");
  CREATE INDEX "about_team_stats_parent_id_idx" ON "about_team_stats" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_about_tabs" CASCADE;
  DROP TABLE "pages_blocks_about_stats" CASCADE;
  DROP TABLE "pages_blocks_about" CASCADE;
  DROP TABLE "pages_blocks_brands_logos" CASCADE;
  DROP TABLE "pages_blocks_brands" CASCADE;
  DROP TABLE "pages_blocks_services_services" CASCADE;
  DROP TABLE "pages_blocks_services" CASCADE;
  DROP TABLE "pages_blocks_portfolio_projects_tags" CASCADE;
  DROP TABLE "pages_blocks_portfolio_projects" CASCADE;
  DROP TABLE "pages_blocks_portfolio" CASCADE;
  DROP TABLE "pages_blocks_stats_stats" CASCADE;
  DROP TABLE "pages_blocks_stats" CASCADE;
  DROP TABLE "pages_blocks_testimonials_testimonials" CASCADE;
  DROP TABLE "pages_blocks_testimonials" CASCADE;
  DROP TABLE "pages_blocks_faq_faqs" CASCADE;
  DROP TABLE "pages_blocks_faq" CASCADE;
  DROP TABLE "pages_blocks_contact_bullets" CASCADE;
  DROP TABLE "pages_blocks_contact" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "services_features" CASCADE;
  DROP TABLE "services" CASCADE;
  DROP TABLE "policies" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "site_settings_header_links" CASCADE;
  DROP TABLE "site_settings_footer_links" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TABLE "about_company_stats" CASCADE;
  DROP TABLE "about_company_bullets" CASCADE;
  DROP TABLE "about_story_paragraphs" CASCADE;
  DROP TABLE "about_story_stats" CASCADE;
  DROP TABLE "about_values" CASCADE;
  DROP TABLE "about_timeline" CASCADE;
  DROP TABLE "about_team_stats" CASCADE;
  DROP TABLE "about" CASCADE;
  DROP TABLE "contact_page" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_services_services_icon";
  DROP TYPE "public"."enum_services_icon";`)
}
