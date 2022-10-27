import Head from "next/head";
import { PostCard, Categories, PostWidget, Navbar, LatestPost, Footer } from "../components";
import { getPosts } from '../services';

//rows einfügen
export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-6 mb-8">
      <Head>
        <title>Ethereumblock</title>
        <meta name="description" content="ethereumblock website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 mb-8 px-4">
        <span className="font-bold text-2xl mb-2 text-center">Neuigkeiten und Updates rund um die Themen Ethereum und Layer 2</span>
        <span className="font-bold text-2xl text-center">Guides zu Rollups, Staking und Smart Contracts</span>
      </div>
      <div className="grid grid-cols-1">
        <Navbar />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-12 mb-6 border-b w-full inline-block border-black-400 py-8">
        <div className="lg:col-span-9 col-span-12">
          <LatestPost />
        </div>
        <div className="lg:col-span-3 col-span-3">
          <div className="relative">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 ">
        {posts.map((post, index) => {
          return <div key={index} className="lg:col-span-4 col-span-1">
            <PostCard post={post.node} />
          </div>
        })}
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}
