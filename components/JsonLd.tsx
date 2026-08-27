export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'SRMIST Tiruchirappalli ACM Student Chapter',
    alternateName: 'ACM SRM Trichy',
    url: 'https://srmtrichy.acm.org',
    logo: 'https://srmtrichy.acm.org/logo.png',
    description:
      'Official website of the ACM Student Chapter at SRM Institute of Science and Technology, Tiruchirappalli. Advancing computing as a science and profession.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tiruchirappalli',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'India',
    },
    sameAs: [
      'https://github.com/challabhaskarrao/ACM.SRMTRICHY',
      'https://www.linkedin.com/company/acm-srm-trichy',
      'https://www.instagram.com/acm_srmtrichy',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
