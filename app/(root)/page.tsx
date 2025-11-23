import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="space-y-6 max-w-lg">
          <h2 className="textfont-medium tracking-wide">
            Get Interview&#8208;Ready with AI&#8208;Powered Practice &#38;
            Feedback
          </h2>
          <p className="text-lg">
            Practice real interview questions &#38; get instant feedback&#46;
          </p>
          <Button className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <div>
          <Image
            src="/robot.png"
            alt="Robot Image"
            width={400}
            height={400}
            className="max-sm:hidden"
          />
        </div>
      </section>

      <section className="mt-8 space-y-6">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>

      <section className="mt-8 space-y-6">
        <h2>Take an Interview</h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}

          {/* <p>You haven&apos;t taken any interviews yet</p> */}
        </div>
      </section>
    </>
  );
};

export default page;
