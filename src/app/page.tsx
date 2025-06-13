import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <nav className="w-full px-6 py-4 bg-white border-b shadow-sm flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold text-gray-900">myresumer.com</span>
        </Link>
        <Button className="text-sm px-4 py-2">Get Started</Button>
      </nav>

      <header className="flex flex-col items-center text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
          AI-Powered Resume & Interview Assistant
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl text-gray-600">
          Upload your resume to get top-rated versions, smart interview prep, and expert career training — all in one place.
        </p>
        <Button className="mt-6 text-lg px-6 py-4">Upload Resume & Get Started</Button>
      </header>

      <section className="grid md:grid-cols-3 gap-8 px-6 md:px-16 py-10">
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <Image src="/images/resume.jpg" alt="AI Resume Builder" width={400} height={250} className="rounded-xl object-cover w-full h-[250px]" />
            <h2 className="text-xl font-semibold mt-4">Upload & Improve Your Resume</h2>
            <p className="text-gray-600 mt-2">
              Instantly get ATS-optimized resume versions tailored to your job title, skills, and industry using cutting-edge AI.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            <Image src="/images/interview.jpg" alt="Interview Assistant" width={400} height={250} className="rounded-xl object-cover w-full h-[250px]" />
            <h2 className="text-xl font-semibold mt-4">Pass Interviews with Confidence</h2>
            <p className="text-gray-600 mt-2">
              Practice real-world questions with AI-generated answers and live feedback customized for your target roles.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            <Image src="/images/learn.jpg" alt="Career Training" width={400} height={250} className="rounded-xl object-cover w-full h-[250px]" />
            <h2 className="text-xl font-semibold mt-4">Learn & Grow with Courses</h2>
            <p className="text-gray-600 mt-2">
              Unlock expert-led lessons on resume writing, interview storytelling, and technical upskilling — all in one platform.
            </p>
          </CardContent>
        </Card>
      </section>

      <footer className="bg-gray-100 text-center py-10 px-4 mt-12">
        <p className="text-gray-500">© 2025 myresumer.com. All rights reserved.</p>
      </footer>
    </div>
  );
}
