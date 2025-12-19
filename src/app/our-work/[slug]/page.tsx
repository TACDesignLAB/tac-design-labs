import Admiration from './components/admiration';
import Banner from './components/banner';
import CallToAction from './components/call-to-action';
import FeaturedVideos from './components/featured-videos';
import Highlights from './components/highlights';
import MainContent from './components/main-content';
import Testimonial from './components/testimonial';
import type { Work } from '~/constants/works/models';

export interface PageParams {
  params: Promise<{
    slug: Work;
  }>;
}

async function Page({ params }: PageParams) {
  const { slug } = await params;

  return (
    <div className="bg-[#EDD7C3] font-primary bg-blend-luminosity">
      <Banner work={slug} />
      <Highlights work={slug} />
      <MainContent work={slug} />
      <Testimonial work={slug} />
      <FeaturedVideos work={slug} />
      <Admiration work={slug} />
      <CallToAction work={slug} />
    </div>
  );
}

export default Page;
