import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, HeartHandshake } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { Button } from '@/components/ui/button';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { PAGE_SEO } from '@/lib/seo/site';

export const metadata = buildPageMetadata({
  title: PAGE_SEO.team.title,
  description: PAGE_SEO.team.description,
  path: '/team',
});

const blurDataURL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

const avatarPalette = ['#8B1A1A', '#A23A2D', '#B8652A', '#8A5A24', '#6F3A2A', '#5F2D2D'];

type TeamMember = {
  name: string;
  role?: string;
  photo?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Janet Zeylisa Dauda',
    role: 'Founder',
    photo: '/images/founder.jpg',
  },
  { name: 'Denzel Oduro' },
  { name: 'Esmeralda Afenyo' },
  { name: 'Gilgal Ansah' },
  { name: 'Beryl Brown' },
  { name: 'Prince Tuffour' },
  { name: 'Paa Kwabena Dankyi' },
  { name: 'Hussein Faara' },
  { name: 'Alfred Oduro' },
  { name: 'Selina Oduro' },
  { name: 'Frederick Obboh' },
];

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 3);
}

function getAvatarColor(name: string) {
  const hash = [...name].reduce((total, character) => total + character.charCodeAt(0), 0);
  return avatarPalette[hash % avatarPalette.length];
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Our Team', path: '/team' },
        ]}
      />

      <section className="bg-wintima-warm py-16 lg:py-24" aria-labelledby="team-hero-heading">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <p className="text-wintima-maroon mb-4 text-sm font-bold tracking-wide uppercase">
            Our Team
          </p>
          <h1
            id="team-hero-heading"
            className="text-wintima-charcoal mx-auto mb-6 max-w-4xl text-4xl leading-tight font-bold text-balance md:text-5xl lg:text-6xl"
          >
            Meet the People Behind the Work
          </h1>
          <p className="text-medium-gray mx-auto max-w-3xl text-lg leading-8 text-balance md:text-xl">
            Wintima Foundation is powered by a dedicated team of volunteers who believe in the
            transformative power of education.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="team-grid-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2
              id="team-grid-heading"
              className="text-wintima-charcoal mb-4 text-3xl font-bold md:text-4xl"
            >
              The Volunteers Moving Wintima Forward
            </h2>
            <p className="text-medium-gray text-base leading-7 md:text-lg">
              These are the real people giving their time and care to help children learn, grow, and
              stay in school.
            </p>
          </div>

          <div
            className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            aria-label="Wintima Foundation team members"
          >
            {teamMembers.map((member) => {
              const initials = getInitials(member.name);

              return (
                <article
                  key={member.name}
                  tabIndex={0}
                  className="border-wintima-maroon/10 focus-visible:outline-wintima-maroon flex h-full flex-col items-center rounded-lg border bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  <div className="bg-wintima-light relative mb-5 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={`Photo of ${member.name}`}
                        fill
                        sizes="112px"
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        className="object-cover"
                      />
                    ) : (
                      <div
                        role="img"
                        aria-label={member.name}
                        className="flex h-full w-full items-center justify-center text-3xl font-bold tracking-normal text-white"
                        style={{ backgroundColor: getAvatarColor(member.name) }}
                      >
                        {initials}
                      </div>
                    )}
                  </div>
                  <h3 className="text-wintima-charcoal text-xl leading-snug font-bold text-balance">
                    {member.name}
                  </h3>
                  {member.role ? (
                    <p className="text-wintima-maroon mt-2 text-sm font-bold tracking-wide uppercase">
                      {member.role}
                    </p>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-wintima-maroon py-16 text-white lg:py-24">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
            <HeartHandshake className="text-wintima-gold h-7 w-7" aria-hidden="true" />
          </div>
          <h2 className="mb-5 text-3xl font-bold md:text-4xl lg:text-5xl">
            Want to Volunteer or Join Our Team?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
            We&apos;re always looking for passionate individuals who want to make a difference in
            children&apos;s education.
          </p>
          <Button
            asChild
            size="lg"
            className="text-wintima-maroon min-h-11 rounded-full bg-white px-8 hover:bg-white/90"
          >
            <Link
              href="mailto:wintimafoundation@gmail.com"
              aria-label="Send email to Wintima Foundation"
              className="inline-flex items-center gap-2"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
