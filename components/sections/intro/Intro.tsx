import Image from "next/image";
import intronewNoBg from "@/public/bite-into-no-bg.png";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const Intro = () => {
  return (
    <Section sectionName="intro tw-relative">
      <Container>
        <div className="tw-grid tw-grid-cols-2">
          <div className="tw-relative">
            <Image
              src={intronewNoBg}
              alt="intro image"
              className="tw-relative tw-z-30 tw-rounded-md tw-bg-brandingGreen-400 tw-shadow-md tw-shadow-zinc-800/30"
              width={400}
              height={450}
            />
            <div className="tw-absolute tw-left-[23px] tw-top-[23px] tw-z-20 tw-h-[450px] tw-w-[400px] tw-rounded-md tw-border-4 tw-border-brandingGreen-400 tw-drop-shadow-lg"></div>
          </div>
          <div className="tw-space-y-2">
            <div className="tw-text-4xl tw-font-semibold">
              Fun, Safe, and Interactive
            </div>
            <div>
              <div className="full-bleed-purple tw-bg-brandingPurple-400 tw-py-2">
                <div className="tw-pb-2 tw-font-serif tw-text-4xl tw-font-bold tw-text-brandingGreen-400">
                  Bite of Reality
                </div>
                <hr className="tw-pb-2" />
                <div className="tw-text-white">
                  Bite of Reality is a hands-on app-based simulation that
                  appeals to teens while giving them a taste of real-world
                  financial realities. Teens are given a fictional occupation,
                  salary, credit score, spouse and a child, student loan debt,
                  credit card debt, and medical insurance payments. The teens
                  then walk around to various table-top stations to “purchase”
                  housing, transportation, food, clothing, and other needs.
                  Fortunately, the game also includes a “credit union” to help
                  with their financial needs.
                </div>
              </div>
            </div>
            <div>
              This interactive activity will teach teens how to make financial
              decisions and give them a better understanding of the challenges
              of living on a budget. Teens will have to deal with a pushy “car
              salesperson” and a commission-based “realtor,” and weigh their
              wants versus their needs. There’s even a “Fickle Finger of Fate”
              that will give the students unexpected “expenses” or
              “windfalls”—just like in real life.
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
