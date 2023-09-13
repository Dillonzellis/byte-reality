import Image from "next/image";
import introImg from "@/public/bite-reality.jpg";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

export const Intro = () => {
  return (
    <Section sectionName="intro tw-relative">
      <Container>
        <div className="tw-grid tw-grid-cols-2">
          <Image src={introImg} alt="intro image" />
          <div className="tw-space-y-2">
            <div className="tw-text-4xl tw-font-bold">
              Fun, Safe, and Interactive
            </div>
            <div className="tw-font-serif tw-text-brandingBlue-400 tw-font-bold tw-text-3xl">
              Bite of Reality
            </div>
            <div className="tw-bg-brandingBlue-400 tw-text-white full-bleed">
              Bite of Reality is a hands-on app-based simulation that appeals to
              teens while giving them a taste of real-world financial realities.
              Teens are given a fictional occupation, salary, credit score,
              spouse and a child, student loan debt, credit card debt, and
              medical insurance payments. The teens then walk around to various
              table-top stations to “purchase” housing, transportation, food,
              clothing, and other needs. Fortunately, the game also includes a
              “credit union” to help with their financial needs.
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
