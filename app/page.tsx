import Image from "next/image"
import WaitlistForm from "@/components/waitlist-form"
import FeatureCard from "@/components/feature-card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import clientPromise from "@/lib/mongo"

export default function Home() {

  console.log(process.env.MONGO_URI);
  
  // clientPromise.db.collection()

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="hero min-h-[80vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto px-4 py-16">
          <div className="lg:w-1/2">
            <Image
              src="/placeholder.svg?height=600&width=600"
              width={600}
              height={600}
              alt="Hero illustration"
              className="rounded-lg shadow-2xl max-w-sm mx-auto"
              priority
            />
          </div>
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="text-5xl font-bold">Launch Your Next Big Idea</h1>
            <p className="py-6 text-lg">
              Get ready for the most innovative platform that will transform how you build web applications. Join our
              waitlist to be the first to know when we launch.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Lightning Fast"
              description="Built on Next.js for optimal performance and lightning-fast page loads."
              icon="zap"
            />
            <FeatureCard
              title="Responsive Design"
              description="Looks great on any device with fully responsive components."
              icon="smartphone"
            />
            <FeatureCard
              title="Modern UI"
              description="Beautiful, modern UI components powered by DaisyUI and Tailwind CSS."
              icon="palette"
            />
            <FeatureCard
              title="Developer Friendly"
              description="Built with developers in mind, making customization a breeze."
              icon="code"
            />
            <FeatureCard
              title="SEO Optimized"
              description="Structured for maximum search engine visibility and ranking."
              icon="search"
            />
            <FeatureCard
              title="Scalable Solution"
              description="Grows with your business from startup to enterprise."
              icon="trending-up"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Early Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <Image src="/placeholder.svg?height=48&width=48" width={48} height={48} alt="Avatar" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold">Sarah Johnson</h3>
                    <p className="text-sm opacity-70">Frontend Developer</p>
                  </div>
                </div>
                <p>
                  "This platform has completely transformed our development workflow. The speed and ease of use are
                  unmatched."
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-warning"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <Image src="/placeholder.svg?height=48&width=48" width={48} height={48} alt="Avatar" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold">Michael Chen</h3>
                    <p className="text-sm opacity-70">CTO, TechStart</p>
                  </div>
                </div>
                <p>
                  "We've cut our development time in half since adopting this platform. The integration with our
                  existing tools was seamless."
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-warning"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <Image src="/placeholder.svg?height=48&width=48" width={48} height={48} alt="Avatar" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold">Emily Rodriguez</h3>
                    <p className="text-sm opacity-70">Product Manager</p>
                  </div>
                </div>
                <p>
                  "The analytics and insights provided by this platform have been invaluable for our product decisions.
                  Highly recommended!"
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-warning"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Development Experience?</h2>
          <p className="mb-8 text-lg">Join thousands of developers who have already signed up for early access.</p>
          <div className="max-w-md mx-auto">
            <WaitlistForm buttonClass="btn-secondary" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
